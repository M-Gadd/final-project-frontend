import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InActiveCoursesComponent } from './in-active-courses.component';

describe('InActiveCoursesComponent', () => {
  let component: InActiveCoursesComponent;
  let fixture: ComponentFixture<InActiveCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InActiveCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InActiveCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
