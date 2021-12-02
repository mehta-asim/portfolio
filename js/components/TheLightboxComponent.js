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
    <section class="lightboxWrapper">
    

    <component  v-if="piece.mediaType" :is="activeComponent" :piece="piece" ></component>

    <h2>{{piece.name}}</h2>
    <p>{{piece.description}}</p>
    <h3 @click="closeMe" id="close">X</h3>
    </section>
    `,

  methods: {
    closeMe() {
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
