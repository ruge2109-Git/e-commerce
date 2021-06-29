import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private wowSubscription: Subscription = new Subscription;
  loadingStatus$?: Observable<boolean>;

  constructor(private router: Router, private wowService: NgwWowService) {


    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd)).subscribe(
      () => {
        this.wowService.init();
      }
    );
  }
  ngOnInit(): void {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item: HTMLElement) => { });

  }

  ngOnDestroy(): void {
    this.wowSubscription.unsubscribe();
  }

  onActivate(event: any) {
    window.scroll(0, 0);
  }

}
