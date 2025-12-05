import { computed, inject, Injectable, signal } from '@angular/core';
import { COUNTRIES, EMISSION_TYPES, EMISSION_YEARS } from '@models/emission.constants';
import { parseSelectFilter, parseTextFilter } from '@utilities/parse-filters';
import { EmissionRecords } from '@services/emission-records';
import { TEmissionRecords } from '@models/emission-record.type';

@Injectable({
  providedIn: 'root',
})
export class FilteredRecords {
  private records: TEmissionRecords = inject(EmissionRecords).records;

  readonly selectableYears = EMISSION_YEARS;
  readonly selectableEmissionTypes = EMISSION_TYPES;
  readonly selectableCountries = COUNTRIES;

  private currentYear = signal<number | ''>('');
  private currentCountry = signal<string>('');
  private currentActivitySearch = signal<string>('');
  private currentEmissionType = signal<string>('');


  public filteredRecords = computed(() => {

    const year = this.currentYear();
    const country = this.currentCountry();
    const emission_type = this.currentEmissionType();
    const activity = this.currentActivitySearch().toLowerCase();

    return (
      this.records?.filter((record) => {
        const parsedYear = record.year;
        const parsedActivity = parseTextFilter(record.activity);
        const filterCountry = parseSelectFilter(record.country);
        const filterEmissionType = parseSelectFilter(record.emission_type);

        return (
          (emission_type === '' || emission_type === filterEmissionType) &&
          (year === '' || year === parsedYear) &&
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
  }

  selectCountry(value: string) {
    this.currentCountry.set(value);
  }

  slectYear(value: string) {
    this.currentYear.set(value === '' ? '' : Number(value));
  }
}
