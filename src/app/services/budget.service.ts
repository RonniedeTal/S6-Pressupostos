import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root',
})
export class BudgetService {
    pageCounters: { [key: string]: number } = {
        Seo: 1,
        Ads: 1,
        Web: 1
      };
    
      plusPages(service: string) {
        if (this.pageCounters[service] < 99) {
          this.pageCounters[service]++;
        }
      }
    
      minusPages(service: string) {
        if (this.pageCounters[service] > 1) {
          this.pageCounters[service]--;
        }
      }
    
      getPageCount(service: string): number {
        return this.pageCounters[service];
      }
    }