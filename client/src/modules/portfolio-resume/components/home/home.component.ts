import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Experience } from './home.component.models';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  userInfoDetails: any = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('../../../../assets/data.json/user-data-info.json')
      .subscribe(data => {
        this.userInfoDetails = data;
      });
    console.log('experiences', JSON.stringify(this.userInfoDetails))
  }

  socialMediaLink(platform: string) {
    const urls = {
      linkedin: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
      github: 'https://github.com/princegupta1131',
      resume: 'https://drive.google.com/file/d/1oRxvj5gzbiCCAf2qbfi-FQMrTLPVEE5T/view?usp=drive_link'
    } as any;

    const url = urls[platform];

    if (url) {
      window.open(url, '_blank');
    }
  }


}
