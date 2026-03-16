import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-services />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: [
    `
      main {
        padding-top: 0; /* sections handle their own spacing */
      }
    `,
  ],
})
export class AppComponent {}
