import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InActiveTeachersComponent } from './in-active-teachers.component';

describe('InActiveTeachersComponent', () => {
  let component: InActiveTeachersComponent;
  let fixture: ComponentFixture<InActiveTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InActiveTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InActiveTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
