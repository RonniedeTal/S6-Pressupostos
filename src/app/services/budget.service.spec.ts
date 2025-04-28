import { TestBed } from "@angular/core/testing";
import { BudgetService } from "./budget.service";


describe('BudgetService', () => {
  let service: BudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly calculate the budget for Seo service', () => {

    service.pageCounters['Seo'] = 3;
    service.languagesCounters['Seo'] = 2;

   
    const result = service.budgetCalculator('Seo');

    
    expect(result).toBe(150);
  });

  it('should return 0 if no pages and languages are selected', () => {
   
    const result = service.budgetCalculator('Ads');

    
    expect(result).toBe(0);
  });

  it('should not exceed budget if values are capped at 10', () => {
    service.pageCounters['Web'] = 10;
    service.languagesCounters['Web'] = 10;

    const result = service.budgetCalculator('Web');
    expect(result).toBe(600)
  });
});