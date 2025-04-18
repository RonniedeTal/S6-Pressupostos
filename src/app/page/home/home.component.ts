import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CardSectionComponent } from "../../section/card-section/card-section.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-home',
  imports: [CardComponent, CardSectionComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
