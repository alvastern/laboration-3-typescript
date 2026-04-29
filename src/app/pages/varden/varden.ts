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
  fot: number = 0;

  celcius: number = 0;
  farenheit: number = 0;

  meterToFot(e: Event) {
    e.preventDefault();
    this.fot = this.meter * 3.28084;
  }

  fotToMeter(e: Event) {
    e.preventDefault();
    this.meter = this.fot / 3.28084;
  }

   celciusToFarenheit(e: Event) {
    e.preventDefault();
    this.farenheit = (this.celcius * 9/5) + 32;
   }

   FarenheitToCelcius(e: Event) {
    e.preventDefault();
    this.celcius = (this.farenheit - 32) * 5/9;
   }
}