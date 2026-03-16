import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contact" class="section section--alt contact">
      <div class="container contact-inner">
        <div class="contact-info">
          <h2 class="section-title" style="text-align:left">
            {{ t().contact.title }}
          </h2>
          <hr class="divider" style="margin-left:0" />
          <p style="margin-bottom:2rem">{{ t().contact.subtitle }}</p>

          <div class="social-links">
            <a
              class="social-link social-link--wa"
              href="https://wa.me/TUNUMERO"
              target="_blank"
              rel="noopener"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                />
                <path
                  d="M11.998 0C5.374 0 0 5.373 0 12c0 2.116.554 4.104 1.524 5.83L.057 23.985l6.304-1.65A11.943 11.943 0 0012 24c6.626 0 12-5.373 12-12S18.624 0 11.998 0zm.002 21.818a9.818 9.818 0 01-5.007-1.369l-.36-.213-3.728.977.994-3.63-.234-.373A9.818 9.818 0 012.183 12c0-5.415 4.404-9.818 9.817-9.818 5.414 0 9.818 4.403 9.818 9.818 0 5.414-4.404 9.818-9.818 9.818z"
                />
              </svg>
              {{ t().contact.whatsapp }}
            </a>

            <a
              class="social-link social-link--ig"
              href="https://instagram.com/TUUSUARIO"
              target="_blank"
              rel="noopener"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.74 0 8.333.014 7.053.072 5.775.13 4.602.402 3.635 1.368 2.67 2.333 2.398 3.507 2.34 4.785 2.282 6.065 2.268 6.472 2.268 12s.014 5.935.072 7.215c.058 1.278.33 2.451 1.297 3.418.966.966 2.14 1.238 3.418 1.297C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.452-.33 3.418-1.297.966-.966 1.238-2.14 1.297-3.418.058-1.28.072-1.687.072-7.213s-.014-5.935-.072-7.215c-.058-1.278-.33-2.451-1.297-3.418C20.399.402 19.225.13 17.947.072 16.667.014 16.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
              {{ t().contact.instagram }}
            </a>
          </div>
        </div>

        <form
          class="contact-form"
          (ngSubmit)="onSubmit()"
          #contactForm="ngForm"
        >
          @if (!sent()) {
            <div class="form-group">
              <input
                type="text"
                name="name"
                [(ngModel)]="formData.name"
                required
                [placeholder]="t().contact.namePlaceholder"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                name="email"
                [(ngModel)]="formData.email"
                required
                [placeholder]="t().contact.emailPlaceholder"
              />
            </div>
            <div class="form-group">
              <textarea
                name="message"
                [(ngModel)]="formData.message"
                required
                rows="5"
                [placeholder]="t().contact.messagePlaceholder"
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn btn--filled"
              [disabled]="contactForm.invalid"
            >
              {{ t().contact.send }}
            </button>
          } @else {
            <div class="success-msg">
              <span class="success-icon">✓</span>
              <p>{{ t().contact.successMessage }}</p>
            </div>
          }
        </form>
      </div>
    </section>
  `,
  styles: [
    `
      .contact-inner {
        display: grid;
        grid-template-columns: 1fr 1.2fr;
        gap: 4rem;
        align-items: start;
      }

      .social-links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .social-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.9rem;
        padding: 0.8rem 1.2rem;
        border-radius: var(--radius);
        border: 1px solid var(--color-border);
        background: var(--color-white);
        transition:
          border-color 0.2s,
          color 0.2s,
          background-color 0.2s;
        color: var(--color-text);

        &:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
      }

      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .form-group input,
      .form-group textarea {
        width: 100%;
        padding: 0.85rem 1rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius);
        font-family: var(--font-body);
        font-size: 0.95rem;
        background: var(--color-white);
        color: var(--color-text);
        transition: border-color 0.2s;
        resize: vertical;

        &::placeholder {
          color: var(--color-text-muted);
          opacity: 0.7;
        }

        &:focus {
          outline: none;
          border-color: var(--color-primary-light);
        }
      }

      .success-msg {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 3rem 2rem;
        text-align: center;
        background: var(--color-white);
        border-radius: var(--radius-lg);
        border: 1px solid var(--color-border);

        .success-icon {
          font-size: 2rem;
          color: var(--color-primary);
        }

        p {
          font-size: 1rem;
          color: var(--color-text);
        }
      }

      @media (max-width: 768px) {
        .contact-inner {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }
    `,
  ],
})
export class ContactComponent {
  translation = inject(TranslationService);
  t = this.translation.t;
  sent = signal(false);

  formData = { name: '', email: '', message: '' };

  onSubmit(): void {
    // TODO: integrate with email service (e.g. EmailJS, Formspree or backend)
    console.log('Form submitted:', this.formData);
    this.sent.set(true);
  }
}
