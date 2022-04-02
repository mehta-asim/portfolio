export default {
  name: "TheHamburgerComponent",

  //   props: ["piece"],

  //   //   computed: {
  //   //     activeComponent: function () {
  //   //       return `${this.piece.mediaType + "Component"}`;

  //   //       //activeComponent: AudioComponent
  //   //     },
  //   //   },

  template: `
  <div class="navMenu">
  <ul id="hamMenu">
      <li><a href="index.html">home</a></li>
      <li><a href="work.html">work</a></li>
      <li><a href="case-studies.html">casestudy</a></li>
      <li><a href="about-me.html">about me</a></li>
      <li><a href="contact-us.html">contact us</a></li>
  </ul>
</div>
    `,

  methods: {},

  //   components: {
  //     AudioComponent: TheAudioComponent,
  //     VideoComponent: TheVideoComponent,
  //   },
};
