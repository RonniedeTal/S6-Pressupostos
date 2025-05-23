import { Injectable, signal } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  users = signal<UserInterface[]>([]);

  pageCounters: { [key: string]: number } = {
    Seo: 1,
    Ads: 1,
    Web: 1,
  };

  plusPages(service: string) {
    if (this.pageCounters[service] < 10) {
      this.pageCounters[service]++;
    }
  }

  minusPages(service: string) {
    if (this.pageCounters[service] > 0) {
      this.pageCounters[service]--;
    }
  }

  getPageCount(service: string): number {
    return this.pageCounters[service];
  }

  languagesCounters: { [key: string]: number } = {
    Seo: 1,
    Ads: 1,
    Web: 1,
  };
  plusLanguages(service: string) {
    if (this.languagesCounters[service] < 10) this.languagesCounters[service]++;
  }

  minusLanguages(service: string) {
    if (this.languagesCounters[service] > 0) {
      this.languagesCounters[service]--;
    }
  }

  getLanguageCount(service: string): number {
    return this.languagesCounters[service] || 0;
  }

  getService(service: string): {
    serviceName: string;
    languages: number;
    pages: number;
  } {
    const languages = this.getLanguageCount(service);
    const pages = this.getPageCount(service);

    return {
      serviceName: service,
      languages: languages,
      pages: pages,
    };
  }
  budgetCalculator(service: string): number {
    return (
      (this.getLanguageCount(service) - 1 + this.getPageCount(service) - 1) * 30
    );
  }
}
