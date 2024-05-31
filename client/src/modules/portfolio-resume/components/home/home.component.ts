import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  socialMediaLink(platform: string) {
    let url = '';
    if (platform === "linkedin") {
      url = 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile';
    }
    // Add more conditions for other social media platforms if needed

    if (url !== '') {
      window.open(url, '_blank');
    }
  }
}
