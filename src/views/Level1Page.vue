<template>
  <div style="color: aliceblue" class="mt-5">
    <h1>
      <i class="fa fa-gamepad margin-right-5"></i><span>TOBIA Games</span>
    </h1>
  </div>
  <br /><br /><br /><br />
  <h1 class="text-center" style="color: aliceblue">LEVEL 1</h1>
  <div
    id="c"
    class="w-75 text-center ms-auto me-auto mt-5"
    style="
      height: 200px;
      background-color: rgba(158, 162, 234, 0.27);
      border-radius: 20px;
      color: aliceblue;
    "
  >
    <p id="counter"></p>
    <p
      id="text-to-type"
      style="
        user-select: none;
        font-size: 15px;
        margin-left: 20px;
        padding: 20px;
        visibilty: hidden;
      "
    >
      <b>{{ parts.matchPart }}</b> {{ parts.unmatchPart }}
    </p>
    <input
      disabled
      id="typed-text"
      class="w-75 mt-2"
      type="text"
      style="border-radius: 10px"
      v-model="typedText"
    />
    <span> {{ " time : " + timeleft }} </span>
    <h3 id="wpm-calc" style="visibility: hidden">wpm : {{ wpm }}</h3>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      words: [
        "Be yourself; everyone else is already taken.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "So many books, so little time.",
        "A room without books is like a body without a soul.",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "You only live once, but if you do it right, once is enough.",
        "Be the change that you wish to see in the world",
        "In three words I can sum up everything I've learned about life: it goes on.",
        "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        "If you tell the truth, you don't have to remember anything.",
        "A friend is someone who knows all about you and still loves you.",
        "To live is the rarest thing in the world. Most people exist, that is all",
        "Always forgive your enemies; nothing annoys them so much.",
        "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        "We accept the love we think we deserve.",
        "Without music, life would be a mistake.",
        "I am so clever that sometimes I don't understand a single word of what I am saying.",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "It is better to be hated for what you are than to be loved for what you are not.",
      ],
      typedText: "",
      textToType: "",
      timer: undefined,
      elapsedSec: 0,
      wpm: 0,
      started: false,
      timeleft: 180,
    };
  },
  created() {
    var counter = 3;
    var numberofword;
    // var numberofword=0
    var x = setInterval(() => {
      document.getElementById("counter").innerHTML = counter;
      counter--;
      if (counter == -1) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "Type the text below";
        this.start();
      }
    }, 1000);
    setTimeout(() => {
      document.getElementById("typed-text").removeAttribute("disabled");
      document.getElementById("typed-text").focus();
      document.getElementById("text-to-type").style.visibility = "visible";

      this.rand = this.words[Math.floor(Math.random() * this.words.length)];
      this.textToType = this.rand;
      console.log(this.texttype);
      this.timewatch();

      /* document.getElementById("text-to-type").innerHTML = this.rand */

      numberofword = this.textToType.split("").length;
      console.log(numberofword);
    }, 6000);
  },
  computed: {
    parts() {
      const splitTextToType = this.textToType.split("");

      let endIndexMatch = 0;
      for (const [index, s] of splitTextToType.entries()) {
        if (s !== this.typedText[index]) {
          endIndexMatch = index;

          break;
        }
      }
      return {
        matchPart: this.textToType.slice(0, endIndexMatch),
        unmatchPart: this.textToType.slice(endIndexMatch),
        splitTextToType,
      };
    },
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        this.elapsedSec++;
        if (!this.started) {
          this.started = true;
        }
        console.log(this.elapsedSec);
      }, 1000);
    },

    timewatch() {
      const stopint = setInterval(() => {
        this.timeleft--;
        console.log(this.timeleft);
        if (this.timeleft == 0 || this.textToType == this.typedText) {
          if (this.textToType == this.typedText) {
            console.log("success");
            document.getElementById("wpm-calc").style.visibility = "visible";
            document.getElementById();
            clearInterval(stopint);
          } else {
            clearInterval(stopint);
            console.log("lose");
          }
        }
      }, 1000);
    },
  },
  watch: {
    parts(val) {
      if (val.unmatchPart.length === 1) {
        clearInterval(this.timer);
        this.wpm = parseInt(
          this.textToType.split(" ").length / (this.elapsedSec / 60)
        );
      }
    },
  },
};
</script>
<style>
</style>
