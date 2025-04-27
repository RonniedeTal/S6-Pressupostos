import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { UserInterface } from '../../interfaces/user-interface';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  user: UserInterface | undefined;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    const paramId = this.route.snapshot.params['id'];
    this.user = this.userService.getId(paramId);
    console.log('paramId:', paramId);
    console.log('user:', this.user);
  }
}
