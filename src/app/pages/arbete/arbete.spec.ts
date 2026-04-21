import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arbete } from './arbete';

describe('Arbete', () => {
  let component: Arbete;
  let fixture: ComponentFixture<Arbete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arbete],
    }).compileComponents();

    fixture = TestBed.createComponent(Arbete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
