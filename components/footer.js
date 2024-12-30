const footerTemplate = document.createElement('template');

const year = (new Date().getFullYear());
footerTemplate.innerHTML = `
<style>
  [hidden] { display: none !important; }
  
  footer {
    padding: 90px 0;
    text-align: center
  }
  
  .footer-title {
    font-size: 60px;
    margin-bottom: 3rem;
  }
    
  .copyright {
    color: #767676;
    font-size: 12px;
  }
  
  .social-links {
    margin-top: 60px;
    margin-bottom: 40px;
    padding: 0;
    list-style: none;
    
    a {
      color: #767676;
      font-size: 15px;
    }
    
    img {
      transition: all 0.3s linear;
      filter: invert(48%) sepia(1%) saturate(337%) hue-rotate(350deg) brightness(95%) contrast(90%);
      &:hover {
        transform: scale(1.5);
      }
    }
    
    li {
    display: inline-flex;
    margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  
  img.facebook:hover {
    filter: invert(33%) sepia(65%) saturate(3188%) hue-rotate(203deg) brightness(99%) contrast(92%);
  }
  img.github:hover {
    filter: brightness(0) saturate(100%) invert(0%) sepia(95%) saturate(18%) hue-rotate(270deg) brightness(108%) contrast(104%);  
  }
  img.linkedin:hover {
    filter: invert(26%) sepia(99%) saturate(2689%) hue-rotate(183deg) brightness(90%) contrast(101%);
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
    border-radius: 8px;
  }
</style>
  <footer id="pageFooter" class="footer-section text-center">
    <div class="container">
        <h2 class="footer-title">Let&rsquo;s work together</h2>
        <a href="/contact.html"
          class="site-btn">Get in touch</a>
        <ul class="social-links">
            <li>
              <a href="https://www.linkedin.com/in/klarence" rel="external" aria-label="LinkedIn">
                <img src="/assets/fa-pro/svgs/brands/linkedin-in.svg" width="15" height="15" alt="LinkedIn" class="linkedin"/>
              </a>
            </li>
<!--            <li>&lt;!&ndash;<a href="https://twitter.com/klarenceouyang" rel="external"><span class="fab fa-twitter"></span></a>&ndash;&gt;</li>-->
            <li>
              <a href="https://www.facebook.com/klarence.ouyang" rel="external" aria-label="Facebook">
              <img src="/assets/fa-pro/svgs/brands/facebook-f.svg" width="15" height="15" alt="Facebook" class="facebook"/>
              </a>
            </li>
<!--            <li><a href=""><span class="fab fa-instagram" rel="external"></span></a></li>-->
<!--            <li><a href=""><span class="fab fa-pinterest-p"></span></a></li>-->
            <li>
              <a href="https://github.com/Klarence" rel="external" aria-label="GitHub">
              <img src="/assets/fa-pro/svgs/brands/github.svg" width="15" height="15" alt="GitHub" class="gitHub"/>
              </a>
            </li>
<!--            <li><a href="https://stackoverflow.com/users/4267591/klarence" rel="external" aria-label="Stack Overflow"><span class="fab fa-stack-overflow"></span></a></li>-->
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
    const shadowRoot = this.attachShadow({ mode: 'open' });
    
    shadowRoot.appendChild(footerTemplate.content);

    const currentRoute = window.location.pathname;
    const contactBtn = document.querySelector('footer-component').shadowRoot.querySelector('.site-btn');
    contactBtn.hidden = !!currentRoute.includes("contact");
  }
}

customElements.define('footer-component', Footer);
