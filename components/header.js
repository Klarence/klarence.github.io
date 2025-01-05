const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<style>
[hidden] { display: none !important; }

.header-section {
  display: block;
  position: relative;
  padding-top: 30px;
  padding-bottom: 20px;
  width: 100vw;
}

.header-container {
  display: flex;
  flex-wrap: nowrap;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
}

.logo img {
  min-width: 100px;
  max-width: 128px;
  height: auto;
  padding: 8px;
}

.nav-links {
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  align-items: center;
}

#menuToggle {
  transition: height .25s ease;
  overflow: hidden;
}

.main-menu {
  width: 100%;
  text-align: center;
  ul {
    list-style: none;
    padding-left: 0;
    width: 100%;

    li {
      display: inline;
      a {
        text-transform: uppercase;
        text-decoration: none;
        display: inline-block;
        margin-right: 10px;
        padding: 20px 0 5px;
        color: #001418;
        font-size: 18px;
        min-width: 72px;
        &:hover,
        &.active {
          font-weight: bold;
          text-decoration: underline;
          text-underline-offset: 2px;
          text-decoration-thickness: 2px;
        }
      }
    }
  }
}

.site-btn {
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  display: inline-block;
  min-width: 140px;
  max-height: 51px;
  margin-right: 15px;
  padding: 15px 10px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  background-color: #36634d;
  border: none;
  border-radius: 8px;
  &:hover {
    font-weight: bold;
  }
  .header-btn {
    float: right;
    margin: 5px 0;
  }
}

.nav-switch {
  display: none;
  cursor: pointer;
  position: absolute;
  top: 35px;
  right: 12px;
  color: #333;
  font-size: 30px;
  background-color: transparent;
  border: none;
  transition: all 0.3s linear;
  /*color: #333;*/
  filter: invert(16%) sepia(18%) saturate(10%) hue-rotate(338deg) brightness(98%) contrast(88%);
  &:hover {
    transform: scale(1.25);
    filter: invert(0%) sepia(100%) saturate(21%) hue-rotate(2deg) brightness(92%) contrast(108%);
  }
}

@media only screen and (width <= 767px) {
  .header-section {
    padding-top: 1em;
    padding-bottom: 0.8em;
  }
  
  .main-menu {
    position: absolute;
    top: 90px;
    left: 0;
    z-index: 999;
    width: 100vw;
    padding-top: 15px;
    background: #efefef;
    justify-content: center;
    display: flex;
    
    ul {
      li {
        display: block;
        text-align: center;
  
        &:last-child a {
          border-bottom: none;
        }
        
        a {
          display: block;
          padding: 10px 15px;
          border-bottom: 1px solid #ddd;
          &.active {
            font-weight: bold;
            text-decoration: underline;
          }
        }
      }
    }

  }

  .header-btn,
  #menuToggle:not(.active){
    display: none;
  }
  
  .nav-switch {
    display: block;
  }
}

@media (width >= 1200px) {
  .header-container {
    max-width: 1140px;
  }
}
</style>
<header class="header-section" id="mainHeader">
    <div class="header-container">
          <div class="logo">
              <a href="/">
              <picture>
                <source type="image/webp" srcset="/images/portfolio/koy-logo-128.webp">
                <source type="image/png" srcset="/images/portfolio/koy-logo.png">
                <img src="/images/portfolio/koy-logo.png" alt="KOYdesigns" loading="eager" width="128" height="80">
              </picture>
              </a>
          </div>
          <div class="nav-links">
              <a href="/contact.html"
                 class="site-btn header-btn"
              >Get in touch</a>
              <nav class="main-menu" id="menuToggle">
                  <ul>
                      <li><a href="/about.html" rel="author">About</a></li>
                      <!--<li><a href="/work.html">Portfolio</a></li>-->
<!--                        <li><a href="/slides.html">Slides</a></li>-->
                      <li><a href="/contact.html">Contact</a></li>
                  </ul>
              </nav>
          </div>
    </div>
    <button class="nav-switch" id="menuToggleTrigger">
        <img src="/assets/fa-pro/svgs/solid/bars.svg" alt="Navigation Menu" width="30" height="30" />
    </button>
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback(qualifiedName, value) {
    const shadowRoot = this.attachShadow({ mode: 'open' });

    shadowRoot.appendChild(headerTemplate.content);

    const currentRoute = window.location.pathname;
    const menuItems = document.querySelector('header-component').shadowRoot.querySelectorAll('.main-menu a');
    menuItems.forEach((el) => {
      if (currentRoute.includes(el.getAttribute('href'))) {
        el.classList.add('active');
      }

      el.addEventListener('click', (e) => {
        menuItems.forEach((elem) => elem.classList.remove('active'));
        e.target.classList.add('active');
      });
    });

    const contactBtn = document.querySelector('header-component').shadowRoot.querySelector('.site-btn');
    const menuToggle = document.querySelector('header-component').shadowRoot.querySelector('#menuToggle');
    const menuTrigger = document.querySelector('header-component').shadowRoot.querySelector('#menuToggleTrigger');

    contactBtn.hidden = !!currentRoute.includes("contact");
    if (menuTrigger) {
      menuTrigger.addEventListener('click', (event) => {
        event.preventDefault();

        if (!menuToggle.classList.contains('active')) {
          menuToggle.classList.add('active');
          menuToggle.style.height = 'auto';

          const height = `${menuToggle.clientHeight}px`;

          menuToggle.style.height = '0px';

          setTimeout(() => {
            menuToggle.style.height = height;
          }, 0);
        } else {
          menuToggle.style.height = '0px';

          menuToggle.addEventListener('transitionend', () => {
            menuToggle.classList.remove('active');
          }, {
            once: true,
          });
        }
      });
    }


  }
}

customElements.define('header-component', Header);
