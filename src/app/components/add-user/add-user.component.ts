import { Component, inject, Input } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { BudgetService } from '../../services/budget.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  @Input() getServiceValue!: () => number;
  @Input() selectedService!: string;

  fb = inject(FormBuilder);
  userService = inject(UserService);
  budgetService = inject(BudgetService);

  formInput: FormGroup = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    telephone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("^[0-9]{9}$")]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    budget: [0],
    service: [[]],

  });

  inputInvalid():any{
    if(this.formInput.invalid){
      this.formInput.markAllAsTouched()
      return false
    }
  }

  addUser() {
    if(this.formInput.invalid)return
    console.log(this.formInput);
    
    const user = this.formInput.getRawValue();
    user.budget = this.getServiceValue();

    if (this.selectedService) {
      const serviceInfo = this.budgetService.getService(this.selectedService);
      user.service = [serviceInfo];
    }

    user.id = uuidv4();
    user.createdAt = new Date();

    const existingUserIndex = this.userService
      .getUser()()
      .findIndex((u) => u.name === user.name);

    if (existingUserIndex !== -1) {
      const usersArray = this.userService.getUser()();
      usersArray[existingUserIndex].service.push(...user.service);
      usersArray[existingUserIndex].budget += user.budget;
      this.userService.users.set(usersArray);
    } else {
      this.userService.setUser(user);
    }

    // console.log(user);
    this.formInput.reset({
      name: '',
      telephone: '',
      email: '',
      budget: 0,
      service: [],
    });
  }
}
