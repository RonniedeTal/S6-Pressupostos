import { Component } from '@angular/core';

import { CardSectionComponent } from '../../section/card-section/card-section.component';
import { HeaderComponent } from '../../components/header/header.component';
import { BudgetSectionComponent } from '../../section/budget-section/budget-section.component';

@Component({
  selector: 'app-home',
  imports: [CardSectionComponent, HeaderComponent, BudgetSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
