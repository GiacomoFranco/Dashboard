import { Component } from '@angular/core';
import { EmissionsList } from "@components/emissions-list/emissions-list";
import { Co2EmissionsTrend } from "@components/co2-emissions-trend/co2-emissions-trend";
import { CountryEmissionsContrastChart } from "@components/country-emissions-contrast-chart/country-emissions-contrast-chart";
import { TotalEmissionsContrast } from "@components/total-emissions-contrast/total-emissions-contrast";

@Component({
  selector: 'app-dashboard',
  imports: [EmissionsList, Co2EmissionsTrend, CountryEmissionsContrastChart, TotalEmissionsContrast],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
