import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MatCard, MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [MatCard, MatCardModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss'
})
export class ImageCardComponent implements OnInit {
  @Input() image: any;

  ngOnInit() {
    // console.log('imgt',this.image)
  }
  likeImage(image: any) {
    console.log('likeImage')
  }
  previewImage(img: any) { }
  downloadImage(img: any) { }
  shareImage(img: any) { }
}
