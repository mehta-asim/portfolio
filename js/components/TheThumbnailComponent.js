export default {
  name: "TheThumbNailComponent",

  props: ["piece"],

  created: function () {
    // console.log("error");
  },

  template: `
    <div class="gallery_avatar">
    <img @click="showmydata" :src='"images/" + piece.thumb' :alt="piece.thumb">
</div>
      `,

  data: function () {
    return {
      message: "I am a component",
      isVisible: false,
    };
  },

  methods: {
    showmydata() {
      this.$emit("showdata", this.piece);
    },
  },
};
