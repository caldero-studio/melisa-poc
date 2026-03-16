import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container footer-inner">
        <p class="footer-brand">Melisa Caceres</p>
        <p class="footer-rights">{{ t().footer.rights }}</p>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        background: var(--color-primary-dark);
        padding: 2rem 1.5rem;
      }

      .footer-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.4rem;
        text-align: center;
      }

      .footer-brand {
        font-family: var(--font-heading);
        font-size: 1.1rem;
        color: var(--color-accent);
        letter-spacing: 0.05em;
      }

      .footer-rights {
        font-size: 0.78rem;
        color: rgba(255, 255, 255, 0.45);
        letter-spacing: 0.03em;
      }
    `,
  ],
})
export class FooterComponent {
  translation = inject(TranslationService);
  t = this.translation.t;
}
