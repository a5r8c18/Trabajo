import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShieldAlt, faCog, faHandsHelping } from '@fortawesome/free-solid-svg-icons';  // Importa los iconos necesarios

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],  // Añade CommonModule y FontAwesomeModule
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent {
  faShieldAlt = faShieldAlt;
  faCog = faCog;
  faHandsHelping = faHandsHelping;

}
