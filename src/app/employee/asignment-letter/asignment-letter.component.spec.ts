import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignmentLetterComponent } from './asignment-letter.component';

describe('AsignmentLetterComponent', () => {
  let component: AsignmentLetterComponent;
  let fixture: ComponentFixture<AsignmentLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignmentLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignmentLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
