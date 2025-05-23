import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetSectionComponent } from './budget-section.component';

describe('BudgetSectionComponent', () => {
  let component: BudgetSectionComponent;
  let fixture: ComponentFixture<BudgetSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
