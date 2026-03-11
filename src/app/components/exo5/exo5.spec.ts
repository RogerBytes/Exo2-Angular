import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo5 } from './exo5';

describe('Exo5', () => {
  let component: Exo5;
  let fixture: ComponentFixture<Exo5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exo5],
    }).compileComponents();

    fixture = TestBed.createComponent(Exo5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
