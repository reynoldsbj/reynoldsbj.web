import { Component } from '@angular/core';
import { ImageObj } from '../../classes/image-obj/image-obj';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  carouselImgs: ImageObj[] = [
    new ImageObj('bgdImg1', '../../../assets/carousel/mountain_background_001.jpg', 'Mountain_Background_Image_001'),
    new ImageObj('bgdImg2', '../../../assets/carousel/mountain_background_002.jpg', 'Mountain_Background_Image_002'),
    new ImageObj('bgdImg3', '../../../assets/carousel/mountain_background_003.jpg', 'Mountain_Background_Image_003')
  ];
}
