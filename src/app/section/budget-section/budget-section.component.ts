import { Component, input } from '@angular/core';
import { AddUserComponent } from '../../components/add-user/add-user.component';
import { ListUserComponent } from '../../components/list-user/list-user.component';

@Component({
  selector: 'app-budget-section',
  imports: [ListUserComponent],
  templateUrl: './budget-section.component.html',
  styleUrl: './budget-section.component.css',
})
export class BudgetSectionComponent {}
