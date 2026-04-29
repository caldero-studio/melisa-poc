import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuoteBandComponent } from './components/quote-band/quote-band.component';
import { TalleresComponent } from './components/talleres/talleres.component';
import { RecursosComponent } from './components/recursos/recursos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    QuoteBandComponent,
    TalleresComponent,
    RecursosComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-services />
      <app-about />
      <app-quote-band />
      <app-talleres />
      <app-recursos />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: [
    `
      main {
        padding-top: 0;
      }
    `,
  ],
})
export class AppComponent {}
