import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { CarouselComponent } from './carousel/carousel.component';
import { CompromisosBannerComponent } from './compromisos-banner/compromisos-banner.component';
import { EquipoBannerComponent } from './equipo-banner/equipo-banner.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { DynamicBannerComponent } from './dynamic-banner/dynamic-banner.component';
import { FooterComponent } from './footer/footer.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, BannerComponent,CarouselComponent,CompromisosBannerComponent,EquipoBannerComponent,WhyChooseUsComponent,DynamicBannerComponent,FooterComponent]
})
export class AppComponent {
  title = 'Trabajo';
}
