import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  products:string[] = []
  menuType: string = 'superUser';

  constructor() {
    this.products = [
      "mouse",
      "keyboard",
      "cord",
      "font"
    ]
   }

  ngOnInit(): void {
  }

  addItems(){
    this.products.push("Another product")
  }

  remove(index:number){
    this.products.splice(index, 1);
  }

}
