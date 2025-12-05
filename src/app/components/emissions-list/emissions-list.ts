import { Component, computed, inject } from '@angular/core';
import { FilteredRecords } from '@services/filtered-records';
import { TEmissionRecords } from '@models/emission-record.type';

@Component({
  selector: 'app-emissions-list',
  imports: [],
  templateUrl: './emissions-list.html',
  styleUrl: './emissions-list.scss',
})
export class EmissionsList {
  FilteredRecordsService = inject(FilteredRecords);
  records = computed<TEmissionRecords>(() => this.FilteredRecordsService.filteredRecords());
}
