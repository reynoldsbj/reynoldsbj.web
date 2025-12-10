import { AfterViewInit, Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  private readonly _window = inject(DOCUMENT);
  title = 'reynoldsbj.dev';

  constructor(readonly router: Router, @Inject(PLATFORM_ID) private readonly platformId: Object) {
    this.router = router;
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe((evt) => {
      // Only run in the browser
      if (isPlatformBrowser(this.platformId)) {
        // Run after Angular finishes rendering
        setTimeout(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        });
      }
    });
  }
}
