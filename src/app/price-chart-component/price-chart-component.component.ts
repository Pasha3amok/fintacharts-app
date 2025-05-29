import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-price-chart-component',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './price-chart-component.component.html',
  styleUrl: './price-chart-component.component.scss'
})
export class PriceChartComponentComponent {
  sampleData = [
    {
      name: 'Ціна Активу',
      series: [
        { name: 'Пн', value: 100 },
        { name: 'Вт', value: 120 },
        { name: 'Ср', value: 110 },
        { name: 'Чт', value: 130 },
        { name: 'Пт', value: 125 },
      ],
    },
  ];
}
