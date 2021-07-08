import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TestimonioService } from 'src/app/services/testimonio.service';
import { Testimonio } from 'src/app/states/testimonio/Testimonio.model';

@Component({
  selector: 'app-testimonios-home',
  templateUrl: './testimonios-home.component.html',
  styleUrls: ['./testimonios-home.component.scss']
})
export class TestimoniosHomeComponent implements OnInit {

  customOptions: OwlOptions = {
    center: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    items: 1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  }

  public testimonios: Testimonio[] = [];


  constructor(
    private _testimonioService: TestimonioService,
  ) {
    this.obtenerTestimonios();
  }

  ngOnInit(): void {
  }

  obtenerTestimonios(){
    this._testimonioService.obtenerTestimonios().then(
      (data)=>{
        if (data.flag) {
          this.testimonios = data.data;
          this.testimonios = this.testimonios.slice(0,6);
        }
      }
    )
  }

}
