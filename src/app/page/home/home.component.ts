import { Component } from '@angular/core';

import { CardSectionComponent } from "../../section/card-section/card-section.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-home',
  imports: [ CardSectionComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
