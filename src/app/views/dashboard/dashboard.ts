import { Component } from '@angular/core';
import { EmissionsList } from "@components/emissions-list/emissions-list";
import { Co2EmissionsTrend } from "@components/co2-emissions-trend/co2-emissions-trend";
import { CountryEmissionsContrastChart } from "@components/country-emissions-contrast-chart/country-emissions-contrast-chart";

@Component({
  selector: 'app-dashboard',
  imports: [EmissionsList, Co2EmissionsTrend, CountryEmissionsContrastChart],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
