import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent implements OnInit,OnDestroy{
  currentIndex: number = 0;
  autoSlideInterval: any;
  images: { url: string, description: string }[] = [
    { url: '/assets/images/prince_img5.jpeg', description: 'Image 1 description' },
    { url: '/assets/images/prince_img6.jpeg', description: 'Image 2 description' },
    { url: '/assets/images/prince_img16.jpeg', description: 'Image 3 description' },
    { url: '/assets/images/prince_img13.jpeg', description: 'Image 1 description' },
    { url: '/assets/images/prince_img15.jpeg', description: 'Image 2 description' },
    { url: '/assets/images/prince_img6.jpeg', description: 'Image 3 description' }

  ];
  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }
  startAutoSlide(): void {
  
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }
}
