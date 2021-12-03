export default {
  name: "TheVideoComponent",

  props: ["piece"],

  template: `
             <section class="video-player">
                <video :src='"videos/" + piece.Source' width="60%" controls></video>
            </section>`,
};
