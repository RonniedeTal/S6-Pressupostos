import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-card-section',
  imports: [CardComponent, FormsModule],
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.css'
})
export class CardSectionComponent {
 selectedService: string = ''
isChecked=false;

checkBoxToggle(){
  this.isChecked = !this.isChecked
}
}
