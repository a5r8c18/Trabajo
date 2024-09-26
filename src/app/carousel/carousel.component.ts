import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carouselItems = [
    { image: '/assets/planning.jpeg', text: 'Planificación', link: '/planificacion' },
    { image: '/assets/design.jpeg', text: 'Diseño', link: '/diseno' },
    { image: '/assets/development.jpeg', text: 'Desarrollo', link: '/desarrollo' }
  ];

  currentSlide = 0;

  ngOnInit(): void {
    this.autoSlide();
  }

  autoSlide(): void {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.carouselItems.length;
      this.updateCarousel();
    }, 3000); // Cambia de imagen cada 3 segundos
  }

  updateCarousel(): void {
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
      const offset = (index - this.currentSlide) * 130; // 130px = 100px (image width) + 30px (margin)
      (item as HTMLElement).style.transform = `translateX(${offset}px)`;
    });
  }
}
