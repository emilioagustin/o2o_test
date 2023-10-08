import { Component } from '@angular/core';
import { HomeComponent } from './home-component/home-component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    HomeComponent
  ]
})

export class AppComponent {
  title = 'Test O2O';
}
