import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="navbar" [class.scrolled]="scrolled">
      <nav class="container nav-inner">
        <a class="nav-brand" href="#hero">Melisa Caceres</a>
        <ul class="nav-links">
          <li>
            <a href="#about">{{ t().nav.about }}</a>
          </li>
          <li>
            <a href="#services">{{ t().nav.services }}</a>
          </li>
          <li>
            <a href="#contact">{{ t().nav.contact }}</a>
          </li>
        </ul>
        <button class="lang-toggle" (click)="translation.toggle()">
          {{ t().nav.langToggle }}
        </button>
        <button
          class="menu-toggle"
          (click)="menuOpen = !menuOpen"
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
      @if (menuOpen) {
        <ul class="nav-mobile">
          <li>
            <a href="#about" (click)="menuOpen = false">{{ t().nav.about }}</a>
          </li>
          <li>
            <a href="#services" (click)="menuOpen = false">{{
              t().nav.services
            }}</a>
          </li>
          <li>
            <a href="#contact" (click)="menuOpen = false">{{
              t().nav.contact
            }}</a>
          </li>
          <li>
            <button
              class="lang-toggle"
              (click)="translation.toggle(); menuOpen = false"
            >
              {{ t().nav.langToggle }}
            </button>
          </li>
        </ul>
      }
    </header>
  `,
  styles: [
    `
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        padding: 1.2rem 0;
        transition:
          background-color 0.3s,
          box-shadow 0.3s;

        &.scrolled {
          background-color: rgba(250, 248, 253, 0.96);
          box-shadow: 0 1px 16px rgba(124, 92, 191, 0.08);
          backdrop-filter: blur(8px);
        }
      }

      .nav-inner {
        display: flex;
        align-items: center;
        gap: 2rem;
      }

      .nav-brand {
        font-family: var(--font-heading);
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--color-primary);
        letter-spacing: 0.02em;
        white-space: nowrap;
      }

      .nav-links {
        display: flex;
        list-style: none;
        gap: 2rem;
        margin-left: auto;

        a {
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-text);
          transition: color 0.2s;

          &:hover {
            color: var(--color-primary);
          }
        }
      }

      .lang-toggle {
        background: none;
        border: 1px solid var(--color-border);
        border-radius: 4px;
        padding: 0.3rem 0.7rem;
        font-size: 0.75rem;
        letter-spacing: 0.1em;
        font-family: var(--font-body);
        cursor: pointer;
        color: var(--color-text-muted);
        transition:
          border-color 0.2s,
          color 0.2s;

        &:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
      }

      .menu-toggle {
        display: none;
        flex-direction: column;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
        margin-left: auto;

        span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--color-primary);
          border-radius: 2px;
        }
      }

      .nav-mobile {
        list-style: none;
        background: rgba(250, 248, 253, 0.98);
        padding: 1rem 1.5rem 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-top: 1px solid var(--color-border);

        a {
          font-size: 1rem;
          color: var(--color-text);
          letter-spacing: 0.05em;
        }
      }

      @media (max-width: 700px) {
        .nav-links {
          display: none;
        }

        .lang-toggle {
          display: none;
        }

        .menu-toggle {
          display: flex;
        }
      }
    `,
  ],
})
export class NavbarComponent {
  translation = inject(TranslationService);
  t = this.translation.t;
  scrolled = false;
  menuOpen = false;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 40;
      });
    }
  }
}
