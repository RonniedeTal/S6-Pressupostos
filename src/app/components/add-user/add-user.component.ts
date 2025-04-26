import { Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { BudgetService } from '../../services/budget.service';
import {v4 as uuidv4} from 'uuid'

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
    name: ['', Validators.required],
    telephone: ['', Validators.required],
    email: ['', [Validators.required]],
    budget: [0],
    service: [[]]
  });

  addUser() {
    const user = this.formInput.getRawValue();
    user.budget = this.getServiceValue();
  
    if (this.selectedService) {
      const serviceInfo = this.budgetService.getService(this.selectedService);
      user.service = [serviceInfo];
    }
  
    user.id = uuidv4();
    user.createdAt = new Date();
  
    const existingUserIndex = this.userService.getUser()().findIndex(u => u.name === user.name);
  
    if (existingUserIndex !== -1) {
      const usersArray = this.userService.getUser()(); 
      usersArray[existingUserIndex].service.push(...user.service);
      usersArray[existingUserIndex].budget += user.budget;
      this.userService.users.set(usersArray);
    } else {
      this.userService.setUser(user);
    }
  
    console.log(user);
    this.formInput.reset({ name: '', telephone: '', email: '', budget: 0, service: [] });
  }
}