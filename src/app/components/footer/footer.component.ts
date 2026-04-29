import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container footer-grid">
        <!-- Column 1: Logo + description -->
        <div class="footer-col footer-col--brand">
          <a href="#hero" class="footer-brand">
            <img
              src="logo.png"
              alt="Tu Mapa Interior"
              class="footer-logo"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
            />
            <span class="footer-brand-text" style="display:none"
              >Tu Mapa Interior</span
            >
          </a>
          <p class="footer-tagline">
            Astrología y terapias holísticas para reconectar con tu esencia.
          </p>
        </div>

        <!-- Column 2: Navigation -->
        <div class="footer-col">
          <h4 class="footer-col-title">{{ t().footer.navTitle }}</h4>
          <ul class="footer-list">
            @for (link of t().footer.navLinks; track link) {
              <li>
                <a href="#hero">{{ link }}</a>
              </li>
            }
          </ul>
        </div>

        <!-- Column 3: Services -->
        <div class="footer-col">
          <h4 class="footer-col-title">{{ t().footer.servicesTitle }}</h4>
          <ul class="footer-list">
            @for (svc of t().footer.serviceLinks; track svc) {
              <li>
                <a href="#services">{{ svc }}</a>
              </li>
            }
          </ul>
        </div>

        <!-- Column 4: Contact -->
        <div class="footer-col">
          <h4 class="footer-col-title">{{ t().footer.contactTitle }}</h4>
          <ul class="footer-list footer-contact-list">
            <li>
              <span class="footer-icon">&#9742;</span>
              {{ t().footer.contact.phone }}
            </li>
            <li>
              <span class="footer-icon">&#9424;</span>
              {{ t().footer.contact.instagram }}
            </li>
            <li>
              <span class="footer-icon">&#9993;</span>
              {{ t().footer.contact.email }}
            </li>
            <li>
              <span class="footer-icon">&#9873;</span>
              {{ t().footer.contact.location }}
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>{{ t().footer.rights }}</p>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background-color: var(--color-bg-alt);
        padding-top: 4rem;
      }

      .footer-grid {
        display: grid;
        grid-template-columns: 1.4fr 1fr 1fr 1fr;
        gap: 3rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid var(--color-border);
      }

      .footer-col--brand {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .footer-brand {
        display: inline-block;
      }

      .footer-logo {
        height: 60px;
        width: auto;
        object-fit: contain;
      }

      .footer-brand-text {
        font-family: var(--font-heading);
        font-size: 1.1rem;
        color: var(--color-text-dark);
        font-weight: 500;
      }

      .footer-tagline {
        font-size: 0.85rem;
        font-weight: 300;
        line-height: 1.6;
        color: var(--color-text);
        max-width: 200px;
      }

      .footer-col-title {
        font-family: var(--font-body);
        font-size: 0.78rem;
        font-weight: 500;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--color-text-dark);
        margin-bottom: 1rem;
      }

      .footer-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        li {
          font-size: 0.88rem;
          font-weight: 300;
          color: var(--color-text);
        }

        a {
          color: var(--color-text);
          transition: color 0.2s;

          &:hover {
            color: var(--color-accent);
          }
        }
      }

      .footer-contact-list {
        li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }
      }

      .footer-icon {
        color: var(--color-accent);
        flex-shrink: 0;
        margin-top: 1px;
      }

      .footer-bottom {
        text-align: center;
        padding: 1.5rem;

        p {
          font-size: 0.8rem;
          font-weight: 300;
          color: var(--color-text-muted);
        }
      }

      @media (max-width: 900px) {
        .footer-grid {
          grid-template-columns: 1fr 1fr;
        }
      }

      @media (max-width: 560px) {
        .footer-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }
    `,
  ],
})
export class FooterComponent {
  translation = inject(TranslationService);
  t = this.translation.t;
}
