import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoBannerComponent } from './equipo-banner.component';

describe('EquipoBannerComponent', () => {
  let component: EquipoBannerComponent;
  let fixture: ComponentFixture<EquipoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipoBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
