import { Component } from '@angular/core';
import { EmissionsList } from "@components/emissions-list/emissions-list";

@Component({
  selector: 'app-dashboard',
  imports: [EmissionsList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
