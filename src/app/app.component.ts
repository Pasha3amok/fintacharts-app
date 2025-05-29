import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PriceChartComponentComponent } from "./price-chart-component/price-chart-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PriceChartComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fintacharts-app';
}
