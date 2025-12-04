import { computed, Injectable, signal } from '@angular/core';
import RECORDS from '@utilities/gas-emissions.mock.json';
import { COUNTRIES, EMISSION_TYPES, EMISSION_YEARS } from '@constants/constant';
import { parseSelectFilter, parseTextFilter } from '@utilities/parse-filters';

@Injectable({
  providedIn: 'root',
})
export class EmissionRecords {
  readonly selectableYears = EMISSION_YEARS;
  readonly selectableEmissionTypes = EMISSION_TYPES;
  readonly selectableCountries = COUNTRIES;

  private currentYear = signal<string | number>('');
  private currentEmissionType = signal<string>('');
  private currentActivitySearch = signal<string>('');
  private currentCountry = signal<string>('');

  private records = RECORDS;

  public filteredRecords = computed(() => {
    const year = this.currentYear();
    const country = this.currentCountry();
    const emission_type = this.currentEmissionType();
    const activity = this.currentActivitySearch().toLowerCase();

    return (
      this.records?.filter((record) => {
        const parsedYear = record.year.toString();
        const parsedActivity = parseTextFilter(record.activity);
        const filterCountry = parseSelectFilter(record.country);
        const filterEmissionType = parseSelectFilter(record.emission_type);

        console.log('Parsed Year' + parsedYear);
        console.log('Year' + year);


        return (
          (emission_type === '' || emission_type === filterEmissionType) &&
          (year === '' || year.toString() === parsedYear) &&
          (country === '' || country === filterCountry) &&
          parsedActivity.includes(activity)
        );
      }) ?? null
    );
  });

  filterByActivity(value: string) {
    this.currentActivitySearch.set(value);
  }

  selectEmissionType(value: string) {
    this.currentEmissionType.set(value);
    console.log('here');
  }

  selectCountry(value: string) {
    this.currentCountry.set(value);
  }

  slectYear(value: string | number) {
    this.currentYear.set(value);
  }
}
