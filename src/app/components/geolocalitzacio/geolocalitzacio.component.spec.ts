import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocalitzacioComponent } from './geolocalitzacio.component';

describe('GeolocalitzacioComponent', () => {
  let component: GeolocalitzacioComponent;
  let fixture: ComponentFixture<GeolocalitzacioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocalitzacioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocalitzacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
