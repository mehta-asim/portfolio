//import statements go at the top
import { getData } from "./components/TheDataMiner.js";
import TheHamburgerMenu from "./components/TheHamBurgerComponent";
import TheLightboxComponent from "./components/TheLightboxComponent.js";
import TheThumbNail from "./components/TheThumbNailComponent.js";
import TheLogo from "./components/TheLogoComponent.js";
import { sendEmail } from "./components/TheEmailComponent.js";
import { processMailSuccess } from "./components/TheEmailComponent.js";
import { processMailFailure } from "./components/TheEmailComponent.js";

(() => {
  const myVue = new Vue({
    created: function () {
      //go fetch the portfolio data here
      //make it available in the Vue instance
      getData(null, (data) => (this.portfolioData = data));
      // debugger;
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
      async sendMail(event) {
        debugger;
        event.preventDefault();
        sendEmail(event.currentTarget.parentNode)
          .then((data) => processMailSuccess(data))
          .catch((err) => processMailFailure(err));
      },
    },

    components: {
      thumb: TheThumbNail,
      burger: TheHamburgerMenu,
      logo: TheLogo,
      lightbox: TheLightboxComponent,
    },
  }).$mount("#app");
})();

// (() => {
//   const theGallery = document.querySelector("#gallery"),
//     galleryPiece = document.querySelector("#galleryPieceTemplate").content;

//   let baseURL = "./includes/index.php";

//   function getSrc() {
//     fetch(baseURL)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         // debugger;

//         buildImg(data);
//       });
//   }

//   function buildImg(imgSource) {
//     console.log(imgSource);
//     // debugger;

//     let isource = Object.keys(imgSource[0]);
//     // debugger;
//     // let source = JSON.parse(imgSource);
//     isource.forEach((img) => {
//       let panel = galleryPiece.cloneNode(true);
//       // debugger;

//       let imgContainer = panel.firstElementChild.firstElementChild;

//       panel.firstElementChild.dataset.key = img.id;

//       let finalSource = imgSource[0][img].Source;

//       imgContainer.src = `images/${finalSource}`;

//       theGallery.appendChild(panel);
//     });

//     // Object.keys(imgSource).forEach((img) => console.log(img));
//     // debugger;
//   }

//   getSrc();
// })();
