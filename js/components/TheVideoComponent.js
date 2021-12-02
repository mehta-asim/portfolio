export default {
  name: "TheVideoComponent",

  props: ["piece"],

  template: `
             <section class="video-player">
                <video :src='"videos/" + piece.Source' controls></video>
            </section>`,
};
