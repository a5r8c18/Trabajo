import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-equipo-banner',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule], // Añade NgbCarouselModule
  templateUrl: './equipo-banner.component.html',
  styleUrls: ['./equipo-banner.component.css'],
})
export class EquipoBannerComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  constructor(private router: Router) {} // Inyecta Router

  goToTeam() {
    this.router.navigate(['/team']); // Ajusta la ruta según sea necesario
  }

  // Define un array de miembros del equipo
  teamMembers = [
    {
      image: 'assets/yo.jpg', // Ruta a la imagen
      name: 'John Doe',
      role: 'Desarrollador',
      facebook: 'https://www.facebook.com/johndoe',
      instagram: 'https://www.instagram.com/johndoe',
      twitter: 'https://www.twitter.com/johndoe',
    },
    {
      image: 'assets/lol.jpeg', // Ruta a la imagen
      name: 'Jane Smith',
      role: 'Diseñadora',
      facebook: 'https://www.facebook.com/janesmith',
      instagram: 'https://www.instagram.com/janesmith',
      twitter: 'https://www.twitter.com/janesmith',
    },
    {
      image: 'assets/kjk.jpg', // Cambia esta ruta a una imagen válida
      name: 'Alice Johnson',
      role: 'Product Manager',
      facebook: 'https://www.facebook.com/alicejohnson',
      instagram: 'https://www.instagram.com/alicejohnson',
      twitter: 'https://www.twitter.com/alicejohnson',
    },
    // Añade más miembros según sea necesario
  ];
}
