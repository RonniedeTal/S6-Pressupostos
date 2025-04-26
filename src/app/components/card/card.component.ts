import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() h4Content:string="";
@Input() pContent:string="";
@Input() priceContent:number=0;


}
