import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalimagesComponent } from './modalimages.component';

describe('ModalimagesComponent', () => {
  let component: ModalimagesComponent;
  let fixture: ComponentFixture<ModalimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
