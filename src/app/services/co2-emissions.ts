import { inject, Injectable } from '@angular/core';
import { EmissionRecords } from '@services/emission-records';

@Injectable({
  providedIn: 'root',
})
export class Co2Emissions {
  public co2EmissionsData = inject(EmissionRecords).records.filter(record => record.emission_type === 'CO2' && record.country === 'United States');
}
