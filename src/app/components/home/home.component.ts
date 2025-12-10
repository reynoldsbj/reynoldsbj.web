import { Component } from '@angular/core';
import { MaintenanceComponent } from '../maintenance/maintenance.component';

@Component({
  selector: 'app-home',
  imports: [MaintenanceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
