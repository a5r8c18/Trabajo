import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromisosBannerComponent } from './compromisos-banner.component';

describe('CompromisosBannerComponent', () => {
  let component: CompromisosBannerComponent;
  let fixture: ComponentFixture<CompromisosBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompromisosBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompromisosBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
