import { Component, computed, inject } from '@angular/core';
import { EmissionRecords } from '@services/emission-records';

@Component({
  selector: 'app-emissions-list',
  imports: [],
  templateUrl: './emissions-list.html',
  styleUrl: './emissions-list.scss',
})
export class EmissionsList {
  RecordsService = inject(EmissionRecords);
  records = computed(() => this.RecordsService.filteredRecords());
}
