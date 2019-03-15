import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  films: string[] = [
    'skary makarony',
    'film o pszczolach',
    'okejka',
    'super przeznaczenie 3',
    'mariusz pudzianowski psem pasterskim był 2'
  ];
}
