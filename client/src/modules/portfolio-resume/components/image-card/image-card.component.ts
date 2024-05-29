import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MatCard, MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [MatCard, MatCardModule, CommonModule, MatIconModule],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss'
})
export class ImageCardComponent implements OnInit {
  @Input() image: any;

  ngOnInit() {
    // console.log('imgt',this.image)
  }
  likeImage(image: any) {

  }
  previewImage(img: any) { }
  downloadImage(img: any) { }
  shareImage(img: any) { }
}
