import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'life-cycle';
  isAliveCheckSample: boolean = true;

  disposeCheckSample(): void{
    this.isAliveCheckSample = false;
  }
}
