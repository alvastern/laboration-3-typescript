import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-varden',
  imports: [CommonModule, FormsModule],
  templateUrl: './varden.html',
  styleUrl: './varden.scss',
})

export class Varden {
  meter: number = 0;
  fotInput: number = 0;
  fotResultat: number = 0;
  meterResultat: number = 0;

  celcius: number = 0;
  farenheitInput: number = 0;
  farenheitResultat: number = 0;
  celciusResultat: number = 0;

  meterToFot(e: Event) {
    e.preventDefault();
    this.fotResultat = this.meter * 3.28084;
  }

  fotToMeter(e: Event) {
    e.preventDefault();
    this.meterResultat = this.fotInput / 3.28084;
  }

  celciusToFarenheit(e: Event) {
    e.preventDefault();
    this.farenheitResultat = (this.celcius * 9 / 5) + 32;
  }

  farenheitToCelcius(e: Event) {
    e.preventDefault();
    this.celciusResultat = (this.farenheitInput - 32) * 5 / 9;
  }
}