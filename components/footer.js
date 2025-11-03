class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    text-align: center;
                    padding: 2rem 0;
                    font-size: 0.8rem;
                    color: #8892b0;
                }
                
                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 1rem;
                }
                
                .social-links a {
                    color: #ccd6f6;
                    transition: color 0.3s ease, transform 0.3s ease;
                }
                
                .social-links a:hover {
                    color: #64ffda;
                    transform: translateY(-3px);
                }
                
                .credit a {
                    color: #64ffda;
                    text-decoration: none;
                }
            </style>
            <div class="social-links">
                <a href="#"><i data-feather="github"></i></a>
                <a href="#"><i data-feather="twitter"></i></a>
                <a href="#"><i data-feather="linkedin"></i></a>
                <a href="#"><i data-feather="mail"></i></a>
            </div>
            <div class="credit">
                <p>Designed & Built by <a href="#">Kamil Karim</a></p>
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
