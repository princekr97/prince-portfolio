import { Component } from '@angular/core';
import { ImageCardComponent } from '../image-card/image-card.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';

@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [ImageCardComponent,ImageSliderComponent],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.scss'
})
export class GallaryComponent {
   images = [
    // Sample data
    { url: '/assets/images/prince_img12.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img6.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img5.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img13.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img15.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img16.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img11.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img19.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img10.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img14.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img9.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img7.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img8.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img4.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img17.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img18.jpeg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img2.jpg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img2.jpg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img2.jpg', description: 'A captivating moment captured by Prince' },
    { url: '/assets/images/prince_img2.jpg', description: 'A captivating moment captured by Prince' },



    // Add more images as needed
  ];
  constructor() { }

  ngOnInit(): void { 
    console.log('galley', this.images)
  }
  onScroll(): void {
    // Logic for infinite scroll
    this.loadMoreImages();
  }

  loadMoreImages(): void {
    // Load more images and append to the `images` array
  }

}
