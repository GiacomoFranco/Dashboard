import { inject, Injectable, signal } from '@angular/core';
import { EmissionRecords } from './emission-records';
import { TEmissionRecords } from '@models/emission-record.type';

@Injectable({
  providedIn: 'root',
})
export class EmissionsContrast {
  constructor() {
    this.getGlobalYearComparison();
  }

  public readonly records: TEmissionRecords = inject(EmissionRecords).records;

  totalEmissionsLastYear = signal<number>(0);
  totalEmissionsCurrentYear = signal<number>(0);
  emissionsAnalysis = signal<number>(0);

  getSum(country: string, year: number): number {
    return this.records
      .filter((r) => r.country === country && r.year === year)
      .reduce((sum, r) => sum + r.emissions, 0);
  }

  getCountries() {
    return [...new Set(this.records.map((r) => r.country))];
  }

  getComparisonData() {
    const current = new Date().getFullYear();
    const last = current - 1;

    return this.getCountries().map((country) => ({
      country,
      lastYear: this.getSum(country, last),
      thisYear: this.getSum(country, current),
    }));
  }

  getTotalByYear(year: number): number {
    return this.records.filter((r) => r.year === year).reduce((total, r) => total + r.emissions, 0);
  }

  getGlobalYearComparison() {
    const current = new Date().getFullYear();
    const last = current - 1;

    this.totalEmissionsLastYear.set(this.getTotalByYear(last));
    this.totalEmissionsCurrentYear.set(this.getTotalByYear(current));

    const difference: number = this.totalEmissionsCurrentYear() - this.totalEmissionsLastYear();

    this.emissionsAnalysis.set(
      parseFloat(((difference / this.totalEmissionsLastYear()) * 100).toFixed(2))
    );
  }
}
