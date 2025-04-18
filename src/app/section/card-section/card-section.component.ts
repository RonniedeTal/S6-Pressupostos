import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {FormsModule} from '@angular/forms'
import { BudgetService } from '../../services/budget.service';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-card-section',
  standalone:true,
  imports: [CardComponent, FormsModule, FontAwesomeModule],
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.css'
})
export class CardSectionComponent implements OnInit{

  constructor(public budgetService:BudgetService){}
  // counter:number=0
  //aqui añado las operaciones
  // plusPages(){
  //   this.counter++
  // }
  // minusPages(){
  //   if(this.counter>0){
  //     this.counter--
  //   }else{
  //     this.counter=0
  //   }
    
  // }
 
selectedService: string = ''
isChecked=false;
faplus=faPlus
faminus=faMinus
checkBoxToggle(){
  this.isChecked = !this.isChecked
}
ngOnInit(): void {
  
}

}
