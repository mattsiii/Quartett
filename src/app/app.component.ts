import { Component } from '@angular/core';
import {SKYSCRAPER} from "./models/skyscraper";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled3';
  skyscrapers = SKYSCRAPER;
}
