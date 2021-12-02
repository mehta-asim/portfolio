export default {
  name: "TheImageComponent",

  props: ["piece"],

  template: `
               <section class="image-holder">
               <img :src='"images/" + piece.Source' :alt="piece.name">
              </section>`,
};
