const footerTemplate = document.createElement('template');

const year = (new Date().getFullYear());
footerTemplate.innerHTML = `
  <style>
  footer {
  padding: 110px 0;
  text-align: center
  }
  .footer-title {
    font-size: 60px;
    margin-bottom: 3rem;
  }
  
    .footer-section {
      padding: 110px 0;
    }
    
    .footer-section .copyright {
      color: #767676;
      font-size: 12px;
    }
    
    .social-links {
      margin-top: 60px;
      margin-bottom: 40px;
      padding: 0;
      list-style: none;
    }
    .social-links a {
      color: #767676;
      font-size: 15px;
    }
    
    .social-links li {
      display: inline-flex;
      margin-right: 30px;
    }
    
    .social-links li:last-child {
      margin-right: 0;
    }
    .site-btn {
    position: relative;
    z-index: 1;
    display: inline-block;
    min-width: 140px;
    max-height: 51px;
    padding: 15px 10px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    background-color: #36634d;
    border: none;
}
  </style>
  <footer id="pageFooter"
        class="footer-section text-center"
>
    <div class="container">
        <h2 class="footer-title">Let&rsquo;s work together</h2>
        <a href="/contact.html"
           class="site-btn"
        >Get in touch</a>
        <ul class="social-links">
            <li><a href="https://www.linkedin.com/in/klarence" rel="external" aria-label="LinkedIn"><span class="fab fa-linkedin-in"></span></a></li>
<!--            <li>&lt;!&ndash;<a href="https://twitter.com/klarenceouyang" rel="external"><span class="fab fa-twitter"></span></a>&ndash;&gt;</li>-->
            <li><a href="https://www.facebook.com/klarence.ouyang" rel="external" aria-label="Facebook"><span class="fab fa-facebook-f"></span></a></li>
<!--            <li><a href=""><span class="fab fa-instagram" rel="external"></span></a></li>-->
<!--            <li><a href=""><span class="fab fa-pinterest-p"></span></a></li>-->
            <li><a href="https://github.com/Klarence" rel="external" aria-label="GitHub"><span class="fab fa-github"></span></a></li>
            <li><a href="https://stackoverflow.com/users/4267591/klarence" rel="external" aria-label="Stack Overflow"><span class="fab fa-stack-overflow"></span></a></li>
<!--            <li><a href="https://dribbble.com/klarence" rel="external"><span class="fab fa-dribbble"></span></a></li>-->
<!--            <li><a href="https://www.behance.net/klarenceouyang" rel="external"><span class="fab fa-behance"></span></a></li>-->
<!--            <li><a href=""><span class="fab fa-medium-m" rel="external"></span></a></li>-->
<!--            <li> <a href="https://angel.co/klarence-ouyang?public_profile=1" rel="external" aria-label="Angellist"><span class="fab fa-angellist"></span></a></li>-->
        </ul>
        <small class="copyright">
            Copyright &copy; 2010&mdash;${year}
            All rights reserved.
        </small>
    </div>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'open' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
