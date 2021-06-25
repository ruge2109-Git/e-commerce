import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private wowSubscription: Subscription = new Subscription;

  constructor(private router: Router,private wowService: NgwWowService) {


    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe(
      () => {
        this.wowService.init();
      }
    );
  }
  ngOnInit(): void {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
    (item: HTMLElement) => {
      // do whatever you want with revealed element
    });
  }

  ngOnDestroy(): void {
    this.wowSubscription.unsubscribe();
  }


  title = 'ecoomerce';
}
