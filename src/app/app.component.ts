import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'
import { HomeComponent } from "./page/home/home.component"; 


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, CommonModule, FontAwesomeModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 's6-pressupostos';
  faCofee=faCoffee
  faTrash=faTrash
 
}
