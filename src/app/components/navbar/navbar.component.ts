import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="navbar" [class.scrolled]="scrolled">
      <nav class="container nav-inner">
        <a class="nav-brand" href="#hero">
          <img
            src="logo.png"
            alt="Tu Mapa Interior"
            class="nav-logo"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
          />
          <span class="nav-brand-text" style="display:none"
            >Tu Mapa Interior</span
          >
        </a>
        <ul class="nav-links">
          <li>
            <a href="#hero">{{ t().nav.home }}</a>
          </li>
          <li>
            <a href="#about">{{ t().nav.about }}</a>
          </li>
          <li>
            <a href="#services">{{ t().nav.services }}</a>
          </li>
          <li>
            <a href="#talleres">{{ t().nav.workshops }}</a>
          </li>
          <li>
            <a href="#recursos">{{ t().nav.resources }}</a>
          </li>
          <li>
            <a href="#contact">{{ t().nav.contact }}</a>
          </li>
        </ul>
        <div class="nav-actions">
          <a href="#contact" class="btn nav-cta">{{ t().nav.cta }}</a>
          <button class="lang-toggle" (click)="translation.toggle()">
            {{ t().nav.langToggle }}
          </button>
        </div>
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
            <a href="#hero" (click)="menuOpen = false">{{ t().nav.home }}</a>
          </li>
          <li>
            <a href="#about" (click)="menuOpen = false">{{ t().nav.about }}</a>
          </li>
          <li>
            <a href="#services" (click)="menuOpen = false">{{
              t().nav.services
            }}</a>
          </li>
          <li>
            <a href="#talleres" (click)="menuOpen = false">{{
              t().nav.workshops
            }}</a>
          </li>
          <li>
            <a href="#recursos" (click)="menuOpen = false">{{
              t().nav.resources
            }}</a>
          </li>
          <li>
            <a href="#contact" (click)="menuOpen = false">{{
              t().nav.contact
            }}</a>
          </li>
          <li>
            <a
              href="#contact"
              class="btn"
              style="display:inline-block"
              (click)="menuOpen = false"
              >{{ t().nav.cta }}</a
            >
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
        padding: 1rem 0;
        transition:
          background-color 0.3s,
          box-shadow 0.3s;

        &.scrolled {
          background-color: rgba(247, 233, 238, 0.97);
          box-shadow: 0 1px 20px rgba(232, 183, 200, 0.2);
          backdrop-filter: blur(8px);
        }
      }

      .nav-inner {
        display: flex;
        align-items: center;
        gap: 1.5rem;
      }

      .nav-brand {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-shrink: 0;
      }

      .nav-logo {
        height: 48px;
        width: auto;
        object-fit: contain;
      }

      .nav-brand-text {
        font-family: var(--font-heading);
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-text-dark);
        letter-spacing: 0.02em;
        white-space: nowrap;
        align-items: center;
      }

      .nav-links {
        display: flex;
        list-style: none;
        gap: 1.5rem;
        margin-left: auto;

        a {
          font-size: 0.85rem;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: var(--color-text);
          transition: color 0.2s;
          position: relative;

          &::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 0;
            height: 1.5px;
            background: var(--color-accent);
            transition: width 0.25s ease;
          }

          &:hover {
            color: var(--color-accent);
            &::after {
              width: 100%;
            }
          }
        }
      }

      .nav-actions {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        flex-shrink: 0;
      }

      .nav-cta {
        font-size: 0.8rem;
        padding: 10px 20px;
      }

      .lang-toggle {
        background: none;
        border: 1.5px solid var(--color-border);
        border-radius: 20px;
        padding: 0.3rem 0.75rem;
        font-size: 0.75rem;
        letter-spacing: 0.08em;
        font-family: var(--font-body);
        cursor: pointer;
        color: var(--color-text);
        transition:
          border-color 0.2s,
          color 0.2s;

        &:hover {
          border-color: var(--color-accent);
          color: var(--color-accent);
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
          background: var(--color-accent);
          border-radius: 2px;
        }
      }

      .nav-mobile {
        list-style: none;
        background: rgba(247, 233, 238, 0.98);
        padding: 1rem 1.5rem 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-top: 1px solid var(--color-border);

        a {
          font-size: 1rem;
          color: var(--color-text);
        }
      }

      @media (max-width: 800px) {
        .nav-links {
          display: none;
        }

        .nav-actions {
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
