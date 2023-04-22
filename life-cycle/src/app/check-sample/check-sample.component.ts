import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
  implements
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  quantity: number = 0;

  constructor() {}

  addQuantity() {
    this.quantity += 1;
  }

  substractQuantity() {
    this.quantity -= 1;
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnDestroy(): void {
    console.log('Goodbye my friend!!!')
  }

}
