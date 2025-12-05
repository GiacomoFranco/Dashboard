import { Injectable } from '@angular/core';
import { TEmissionRecords } from '@models/emission-record.type';
import RECORDS from '@utilities/gas-emissions.mock.json';

@Injectable({
  providedIn: 'root',
})
export class EmissionRecords {
  public records: TEmissionRecords = RECORDS; // API data would be fetched here;
}
