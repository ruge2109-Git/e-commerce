import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {

  @Input() itemActivo:string= "inicio";

  constructor() { }

  ngOnInit(): void {
  }

}
