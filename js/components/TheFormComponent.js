import { sendEmail } from "./TheEmailComponent.js";
import { processMailSuccess } from "./TheEmailProcessComponent.js";
import { processMailFailure } from "./TheEmailProcessComponent.js";

export default {
  name: "TheForm",

  template: `
    <section id="contactMe">
            <h2 id="contactMeText">contact me</h2>
            <form action="./includes/mail/send.php" method="POST" id="mail-form">
                <input type="text" required id="name" name="name" placeholder="name">
                <input type="email" required id="email" name="email" placeholder="email">
                <textarea required id="message" name="message" placeholder="your questions..."></textarea>
                <input v-on:click="sendMail" id="submit" type="submit" name="send" value="submit">
            </form>
        </section>
        `,

  methods: {
    sendMail(event) {
      // debugger;
      event.preventDefault();
      sendEmail(event.currentTarget.parentNode)
        .then((data) => processMailSuccess(data))
        .catch((err) => processMailFailure(err));
    },
  },
};
