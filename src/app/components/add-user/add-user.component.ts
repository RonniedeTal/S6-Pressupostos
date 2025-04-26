import { Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  @Input() getServiceValue!: () => number;
  @Input() selectedService!: string;

  fb = inject(FormBuilder);
  userService = inject(UserService);
  budgetService = inject(BudgetService);

  formInput: FormGroup = this.fb.nonNullable.group({
    name: [''],
    telephone: [''],
    email: [''],
    budget: [0],
    service: [[]]
  });

  addUser() {
    const user = this.formInput.getRawValue();
    user.budget = this.getServiceValue();

    let serviceDescription = '';

    if (this.selectedService && this.budgetService) {
      const pages = this.budgetService.pageCounters[this.selectedService] || 0;
      const languages = this.budgetService.languagesCounters[this.selectedService] || 0;

      serviceDescription = `${this.selectedService} (${pages} páginas, ${languages} lenguajes)`;
    }

    user.service = [serviceDescription]; 

    console.log(user);
    console.log(serviceDescription);
    
    this.userService.setUser(user);
    this.formInput.reset({ name: '', telephone: '', email: '', budget: 0, service: [] });
  }
}