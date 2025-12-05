import { Component, inject } from '@angular/core';
import { EmissionsContrast } from '@services/emissions-contrast';

@Component({
  selector: 'app-total-emissions-contrast',
  imports: [],
  templateUrl: './total-emissions-contrast.html',
  styleUrl: './total-emissions-contrast.scss',
})
export class TotalEmissionsContrast {
  EmissionsService = inject(EmissionsContrast);

  totalEmissions = this.EmissionsService.totalEmissionsCurrentYear();
  percentage = this.EmissionsService.emissionsAnalysis();
}
