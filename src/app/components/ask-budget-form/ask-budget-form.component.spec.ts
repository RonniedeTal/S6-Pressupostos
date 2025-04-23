import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskBudgetFormComponent } from './ask-budget-form.component';

describe('AskBudgetFormComponent', () => {
  let component: AskBudgetFormComponent;
  let fixture: ComponentFixture<AskBudgetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskBudgetFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskBudgetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
