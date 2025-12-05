import { inject, Injectable } from '@angular/core';
import { EmissionRecords } from './emission-records';
import { TEmissionRecords } from '@models/emission-record.type';

@Injectable({
  providedIn: 'root',
})
export class EmissionsContrast {
  public readonly records: TEmissionRecords = inject(EmissionRecords).records;

  getSum(country: string, year: number): number {
    return this.records
      .filter(r => r.country === country && r.year === year)
      .reduce((sum, r) => sum + r.emissions, 0);
  }

  getCountries() {
    return [...new Set(this.records.map(r => r.country))];
  }

  getComparisonData() {
    const current = new Date().getFullYear();
    const last = current - 1;

    return this.getCountries().map(country => ({
      country,
      lastYear: this.getSum(country, last),
      thisYear: this.getSum(country, current)
    }));
  }
}
