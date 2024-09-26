import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { faCheckCircle, faSyncAlt, faLock, faDatabase, faGlobe, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-compromisos-banner',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './compromisos-banner.component.html',
  styleUrl: './compromisos-banner.component.css'
})
export class CompromisosBannerComponent {
  faResponsabilidad = faCheckCircle;
  faActualizaciones = faSyncAlt;
  faPagoSeguro = faLock;
  faBaseDatos = faDatabase;
  faMultilingue = faGlobe;
  faAtencionHumana = faHeadset;

  constructor(private router: Router) {} // Inyecta Router

  goToMoreInfo() {
    this.router.navigate(['/more-info']); // Ajusta la ruta según sea necesario
  }
}