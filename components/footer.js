class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    text-align: center;
                    padding: 2.5rem 1rem 2rem;
                    font-size: 0.8rem;
                    color: #8892b0;
                    width: 100%;
                    overflow: hidden;
                }

                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 1.25rem;
                }

                .social-links a {
                    color: #ccd6f6;
                    transition: color 0.3s ease, transform 0.3s ease;
                    display: inline-flex;
                }

                .social-links a:hover {
                    color: #64ffda;
                    transform: translateY(-3px);
                }

                .credit {
                    margin-bottom: 0.75rem;
                }

                .credit a {
                    color: #64ffda;
                    text-decoration: none;
                }

                .legal-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-top: 0.6rem;
                }

                .legal-links button {
                    background: none;
                    border: none;
                    color: #4a5568;
                    font-size: 0.72rem;
                    cursor: pointer;
                    padding: 0;
                    letter-spacing: 0.03em;
                    transition: color 0.2s ease;
                    font-family: inherit;
                }

                .legal-links button:hover {
                    color: #64ffda;
                }

                .divider {
                    color: #2d3748;
                    user-select: none;
                }
            </style>

            <div class="social-links">
                <a href="https://github.com/kamillearn/" target="_blank" rel="noopener" aria-label="GitHub">
                    <i data-feather="github"></i>
                </a>
                <a href="https://www.linkedin.com/in/kamil-karim" target="_blank" rel="noopener" aria-label="LinkedIn">
                    <i data-feather="linkedin"></i>
                </a>
                <a href="mailto:abdulkamilkarim@gmail.com" aria-label="Email">
                    <i data-feather="mail"></i>
                </a>
            </div>

            <div class="credit">
                <p><a href="https://kamilkarim.com/">© Kamil Karim.</a> All rights reserved.</p>
            </div>

            <div class="legal-links">
                <button class="js-legal" data-modal="impressum">Impressum</button>
                <span class="divider">·</span>
                <button class="js-legal" data-modal="datenschutz">Datenschutzerklärung</button>
            </div>
        `;

        // Wire legal buttons to global modal opener
        this.shadowRoot.querySelectorAll('.js-legal').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.modal;
                if (typeof window.openModal === 'function') {
                    window.openModal(id);
                }
            });
        });
    }
}

customElements.define('custom-footer', CustomFooter);
