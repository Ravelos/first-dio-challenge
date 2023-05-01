import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private parameterizer: ActivatedRoute, private router: Router) {
    // http://localhost:4200/portfolio/2
    this.parameterizer.params.subscribe((res) => console.log(res));

    this.parameterizer.firstChild?.params.subscribe((res) => console.log(res));

    // http://localhost:4200/portfolio/2?name=oswaldo&token=123
    this.parameterizer.queryParams.subscribe((res) => console.log(res));
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.router.navigate(['/']);
    // }, 5000);
  }
}
