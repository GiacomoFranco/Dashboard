import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { EmissionsContrast } from '@services/emissions-contrast';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-country-emissions-contrast-chart',
  imports: [],
  templateUrl: './country-emissions-contrast-chart.html',
  styleUrl: './country-emissions-contrast-chart.scss',
})
export class CountryEmissionsContrastChart {
  comparisons = inject(EmissionsContrast).getComparisonData();

  canvas = viewChild<ElementRef<HTMLCanvasElement>>('canvas');

  generateChart() {
    const ctx = this.canvas()!.nativeElement.getContext('2d')!;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.comparisons.map((c) => c.country),
        datasets: [
          {
            label: 'Last Year',
            data: this.comparisons.map(c => c.lastYear),
            backgroundColor: '#DCFF00',
            borderRadius: 10,
            barPercentage: 1,
          },
          {
            label: 'This Year',
            data: this.comparisons.map(c => c.thisYear),
            backgroundColor: '#454e0f',
            borderRadius: 10,
            barPercentage: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            min: 4,
            max: 7,
            grid: {
              display: true,
              color: '#0f0f0fff',
            },
          },
        },
      },
    });
  }

  ngAfterViewInit() {
    this.generateChart();
  }
}
