import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCourseDetailsComponent } from './general-course-details.component';

describe('GeneralCourseDetailsComponent', () => {
  let component: GeneralCourseDetailsComponent;
  let fixture: ComponentFixture<GeneralCourseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralCourseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
