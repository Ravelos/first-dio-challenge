import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-attributes',
  templateUrl: './comp-attributes.component.html',
  styleUrls: ['./comp-attributes.component.css']
})
export class CompAttributesComponent implements OnInit {

  estilo: string = 'enable';
  corFundo: string = 'blue';
  corDaFonte: string = 'yellow'
  item: string = '';
  list: string[] = [];
  isEnableBlock: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  changeStyle(){
    if(this.estilo === 'disable'){
      this.estilo = 'enable'
    }else{
      this.estilo = 'disable'
    }
  }

  addList(){
    this.list.push(this.item)
  }

}
