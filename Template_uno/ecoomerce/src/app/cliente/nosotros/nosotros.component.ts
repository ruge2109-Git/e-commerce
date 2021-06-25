import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  public satisfechos=0;
  public experiencia=0;
  public tiposLicor=0;
  public sucursales=0;

  constructor() { }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.satisfechos++;
      if (this.satisfechos == 10000) {
        clearInterval(interval);
      }
    }, 50);
    let interval2 = setInterval(() => {
      this.experiencia++;
      if (this.experiencia == 80) {
        clearInterval(interval2);
      }
    }, 170);
    let interval3 = setInterval(() => {
      this.tiposLicor++;
      if (this.tiposLicor == 100) {
        clearInterval(interval3);
      }
    }, 150);
    let interval4 = setInterval(() => {
      this.sucursales++;
      if (this.sucursales == 40) {
        clearInterval(interval4);
      }
    }, 200);
  }



}
