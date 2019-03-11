import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router,ParamMap } from '@angular/router'
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-department-detail',
  template:`
   <h3> you seleted department with id= {{departmentId}}</h3>
  
   <router-outlet><router-outlet>
   <a (click)="goPrevious()">Previous</a>
   <a (click)="goNext()">Next</a>
  <div>
  <button (click)="gotoDepartments()">Back</button>
  </div>


  `,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  constructor( private route:ActivatedRoute, private router:Router) { }

  
  ngOnInit() {
  //  let id=parseInt(this.route.snapshot.paramMap.get('id'));
  //  this.departmentId=id; 
   this.route.paramMap.subscribe((params:ParamMap)=>{
     let id=parseInt(params.get('id'));
     this.departmentId=id;
   }); 

  }

  goPrevious(){
    let previousId=this.departmentId-1;
    if(previousId>0)
      return this.router.navigate(['/departments',previousId]);
      this.router.navigate(['/departments',1]);
  
    }

  goNext(){
    let nextId=this.departmentId+1;
    if(nextId<6)
    return this.router.navigate(['/departments',nextId]);
    return this.router.navigate(['/departments',5]) 
    
    
    }

    gotoDepartments(){
      let selecteId=this.departmentId?this.departmentId : null;
      //this.router.navigate(['/departments',{id:selecteId,test:"testvalue"}])
      this.router.navigate(['../',{id:selecteId}],{relativeTo:this.route})
    }

}
 