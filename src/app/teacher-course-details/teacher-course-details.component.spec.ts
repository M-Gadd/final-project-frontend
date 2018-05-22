import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCourseDetailsComponent } from './teacher-course-details.component';

describe('TeacherCourseDetailsComponent', () => {
  let component: TeacherCourseDetailsComponent;
  let fixture: ComponentFixture<TeacherCourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCourseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
