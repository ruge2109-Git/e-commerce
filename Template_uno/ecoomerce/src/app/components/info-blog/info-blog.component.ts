import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-blog',
  templateUrl: './info-blog.component.html',
  styleUrls: ['./info-blog.component.scss']
})
export class InfoBlogComponent implements OnInit {

  public contadorAnios =0 ;

  constructor() { }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.contadorAnios++;
      if (this.contadorAnios == 150) {
        clearInterval(interval);
      }
    }, 100);
  }

}
