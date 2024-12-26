const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `

<style>
[hidden] { display: none !important; }

#menuToggle {
transition: height .25s ease;
overflow: hidden;
}

.logo img {
  width: 100px;
}

.row {
  display: flex;
  flex-wrap: nowrap;
  margin-right: -15px;
  margin-left: -15px;
}

.header-section {
  display: block;
  position: relative;
  padding-top: 30px;
  padding-bottom: 20px;
}

.site-logo {
  padding-top: 20px;
  font-size: 24px;
}

.main-menu ul {
  list-style: none;
}

.main-menu ul li {
  display: inline;
}

.main-menu ul li a {
  text-decoration: none;
  display: inline-block;
  margin-right: 10px;
  margin-left: 15px;
  padding: 20px 0 5px;
  color: #001418;
  font-size: 18px;
}

.main-menu ul li a:hover,
.main-menu ul li a.active {
  font-weight: bold;
}

.header-btn {
  float: right;
  /* margin-right: 0; */
  margin: 5px 0;
}

.site-btn {
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
}

.nav-switch {
  display: none;
}

.intro-section {
  /* padding: 110px 0; */
  padding: 30px 0 60px 0;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.fa-bars:before {
  content: "\\f0c9";
}

.col-md-3, .col-lg-4 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

@media only screen and (max-width: 767px) {
  .main-menu {
    position: absolute;
    top: 90px;
    left: 0;
    z-index: 999;
    /*display: none;*/
    width: 100%;
    padding-top: 15px;
    background: #efefef;
  }

  .main-menu ul li a {
    display: block;
    padding: 10px 15px;
    border-bottom: 1px solid #ddd;
  }

  .main-menu ul li a.active {
    font-weight: bold;
    text-decoration: underline;
  }

  .main-menu ul li {
    display: block;
  }

  .main-menu ul li:last-child a {
    border-bottom: none;
  }

  .nav-switch {
    position: absolute;
    top: 35px;
    right: 25px;
    display: block;
    color: #333;
    font-size: 30px;
  }

  .header-btn {
    display: none;
  }

  .header-section {
    position: relative;
    padding-top: 1em;
    padding-bottom: 0.8em;
  }

  .logo img {
    max-width: 25%;
  }

  #menuToggle:not(.active) {
    display: none;
  }

  .nav-switch {
    position: absolute;
    top: 35px;
    right: 25px;
    display: block;
    color: #333;
    font-size: 30px;
  }

  .fa,
  .fas {
    font-family: 'Font Awesome 5 Pro';
    font-weight: 900;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
  }

  .header-btn {
    display: none;
  }
}


@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .nav-switch {
    display: none;
  }

  .container {
    max-width: 720px;
  }

  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }

  .col-lg-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-lg-8 {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
}

@media (min-width: 1200px) {

  .container {
    max-width: 1140px;
  }
}
</style>
<header class="header-section" id="mainHeader">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-3">
                <div class="logo">
                    <a class="d-block" href="/">
                    <img alt="KOY Designs"
                         src="/images/KOY-designs-logo.png"
                         loading="eager">
                    </a>
                    <!-- <h1 class="site-logo">Klarence OuYang Designs</h1> -->
                </div>
            </div>
            <div class="col-lg-8 col-md-9">
                <a href="/contact.html"
                   class="site-btn header-btn"
                >Get in touch</a>
                <nav class="main-menu" id="menuToggle">
                    <ul>
<!--                        <li><a href="/">Home</a></li>-->
                        <li><a href="/about.html" rel="author">About</a></li>
                        <!--<li><a href="/work.html">Portfolio</a></li>-->
<!--                        <li><a href="/slides.html">Slides</a></li>-->
                        <li><a href="/contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <div class="nav-switch" id="menuToggleTrigger">
        <i class="fa fa-bars" aria-hidden="true" aria-label="Menu"></i>
    </div>
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
