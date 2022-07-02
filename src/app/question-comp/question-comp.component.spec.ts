import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCompComponent } from './question-comp.component';

describe('QuestionCompComponent', () => {
  let component: QuestionCompComponent;
  let fixture: ComponentFixture<QuestionCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
