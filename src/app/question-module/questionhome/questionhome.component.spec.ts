import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionhomeComponent } from './questionhome.component';

describe('QuestionhomeComponent', () => {
  let component: QuestionhomeComponent;
  let fixture: ComponentFixture<QuestionhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
