import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FormsModule } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { AlertifyService } from '../../services/alertify.service';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { AddUserComponent } from '../../components/add-user/add-user.component';

@Component({
  selector: 'app-card-section',
  standalone: true,
  imports: [
    CardComponent,
    FormsModule,
    FontAwesomeModule,
    CommonModule,
    AddUserComponent,
  ],
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css'],
})
export class CardSectionComponent implements OnInit {
  total: any;

  constructor(
    public budgetService: BudgetService,
    public alertifyService: AlertifyService
  ) {}

  selectedService: string = '';
  isChecked = false;
  faplus = faPlus;
  faminus = faMinus;
  faQuestion = faQuestion;
  faInfo = faInfo;
  faCircleInfo = faCircleInfo;

  checkBoxToggle() {
    this.isChecked = !this.isChecked;
  }
  ngOnInit(): void {}
  servicePrices: { [key: string]: number } = {
    Seo: 300,
    Ads: 400,
    Web: 500,
  };
  getServiceValue(): number {
    if (!this.selectedService) return 0;
    const actualValue = this.servicePrices[this.selectedService] || 0;
    const extraService = this.budgetService.budgetCalculator(
      this.selectedService
    );
    return actualValue + extraService;
  }

  languageInfo(): void {
    this.alertifyService.alert(
      'choose the number of languages  of your project. every language cost is 30€'
    );
  }
  pagesInfo(): void {
    this.alertifyService.alert(
      'choose the number of pages  of your project. every language cost is 30€'
    );
  }
}
