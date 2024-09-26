import { Component } from '@angular/core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter; // Ajustando para X (anteriormente Twitter)
  faInstagram = faInstagram;
fa: any;
x: any;
}
