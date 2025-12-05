import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Co2Emissions } from '@services/co2-emissions';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-co2-emissions-trend',
  imports: [],
  templateUrl: './co2-emissions-trend.html',
  styleUrl: './co2-emissions-trend.scss',
})
export class Co2EmissionsTrend {
  data = inject(Co2Emissions).co2EmissionsData;

  canvas = viewChild<ElementRef<HTMLCanvasElement>>('canvas');

  generateChart() {
    const ctx = this.canvas()!.nativeElement.getContext('2d')!;
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(220, 255, 0, 0.4)');
    gradient.addColorStop(1, 'rgba(220, 255, 0, 0)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.data.map((record) => record.year),
        datasets: [
          {
            data: this.data.map((record) => record.emissions),
            borderColor: '#DCFF00',
            backgroundColor: gradient,
            fill: true,
            tension: 0,
            pointRadius: 0,
            borderWidth: 3,
            pointHoverRadius: 10,
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
