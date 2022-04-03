import TheImageComponent from "./TheImageComponent.js";
import TheVideoComponent from "./TheVideoComponent.js";

export default {
  name: "TheLightboxComponent",

  props: ["piece"],

  computed: {
    activeComponent: function () {
      return `${this.piece.mediaType + "Component"}`;

      //activeComponent: AudioComponent
    },
  },
  //   <i @click="closeMe" class="fa-solid fa-circle-xmark"></i>
  template: `
  <section>
  <img @click="closeMe" src="images/close.svg" alt="close button">
    <section class="lightboxWrapper">
    <section id="lightboxDesc">
    <h2>{{piece.name}}</h2>

    <p>{{piece.description}}</p>
    </section>
    

    <component  v-if="piece.mediaType" :is="activeComponent" :piece="piece" ></component>

    
    
    </section></section>
    `,

  methods: {
    closeMe() {
      
      if(document.querySelector('.video-player video')){
        let video = document.querySelector('.video-player video');
        video.pause();
        video.currentTime = 0;
      }
     
      document.querySelector(".lightbox").classList.remove("visible");
      this.$emit("closelb");
      

    },
    popcurrentItem() {
      this.$emit("popitem", this.piece);
    },
  },

  components: {
    imageComponent: TheImageComponent,
    videoComponent: TheVideoComponent,
  },
};
