//import statements go at the top
import { getData } from "./components/TheDataMiner.js";
import TheHamburgerMenu from "./components/TheHamBurgerComponent.js";
import TheLightboxComponent from "./components/TheLightboxComponent.js";
import TheThumbNail from "./components/TheThumbNailComponent.js";
import TheLogo from "./components/TheLogoComponent.js";
import TheForm from "./components/TheFormComponent.js";

(() => {
  const myVue = new Vue({
    created: function () {
      //go fetch the portfolio data here
      //make it available in the Vue instance
      getData(null, (data) => (this.portfolioData = data));
      console.log(this.portfolioData);
      debugger;
    },

    data: {
      //this is storing the database info from our fetch call

      portfolioData: [],
      message: "hello from Vue",
      isVisible: false,
      currentPortfolioItem: {},
    },

    methods: {
      popLightBox(item) {
        this.currentPortfolioItem = item;

        this.isVisible = true;
      },

      closeLightBox() {
        this.isVisible = false;
      },
      burgerMenu() {
        if (document.querySelector(".navMenu").classList[1] != "bvisible") {
          document.querySelector(".navMenu").classList.add("bvisible");
        } else {
          document.querySelector(".navMenu").classList.remove("bvisible");
        }
      },
    },

    components: {
      thumb: TheThumbNail,
      burger: TheHamburgerMenu,
      logo: TheLogo,
      lightbox: TheLightboxComponent,
      contactform: TheForm,
    },
  }).$mount("#app");
})();
