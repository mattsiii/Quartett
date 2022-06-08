import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars: Car[] = CARS;
  title = 'Quartett';
  game:any;
  status:any;
}
