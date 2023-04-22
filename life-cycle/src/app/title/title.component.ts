import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() name: string = ''

  constructor() {
    console.log("Constructor")
   }


  ngOnChanges(){
    console.log('OnChange')
  }
  ngOnInit(): void {
    console.log("onInit")
  }

}
