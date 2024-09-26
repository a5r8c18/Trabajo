import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-banner',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './dynamic-banner.component.html',
  styleUrls: ['./dynamic-banner.component.css']
})
export class DynamicBannerComponent implements OnInit, OnDestroy {
  public count: number = 0;
  public intervalId: any;
  public maxCount: number = 25; // Límite máximo

  public images: string[] = [
    'assets/image1.jpeg',
    'assets/imagen5.jpg',
    'assets/images6.jpeg',
    'assets/images3.jpeg',
    'assets/images2.jpeg'
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.startCounter();
  }

  startCounter() {
    this.intervalId = setInterval(() => {
      if (this.count < this.maxCount) {
        this.count += 1;
      } else {
        clearInterval(this.intervalId);
      }
    }, 100); // Incrementa cada 50ms
  }

  goToLearnMore() {
    this.router.navigate(['/learn-more']); // Ajusta la ruta según sea necesario
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

