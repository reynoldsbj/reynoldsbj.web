import { Component } from '@angular/core';
import { ImageObj } from '../../classes/image-obj/image-obj';

@Component({
  selector: 'app-maintenance',
  imports: [],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent {
  maintenanceImg: ImageObj = new ImageObj('maintenanceImg1',
    '../../../assets/maintenance/maintenance_img_001.jpg', 
    'MaintenanceImage001');

  navToGithub() {
    window.open('https://github.com/reynoldsbj/reynoldsbj.web', '_blank');
  }
}
