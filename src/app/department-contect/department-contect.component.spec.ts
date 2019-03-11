import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentContectComponent } from './department-contect.component';

describe('DepartmentContectComponent', () => {
  let component: DepartmentContectComponent;
  let fixture: ComponentFixture<DepartmentContectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentContectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentContectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
