<template>
  <h1 class="mt-5 text-center text-light">Your Score</h1>
  <MDBTable class="align-middle mb-0 bg-white mt-5">
    <thead style="background-color: rgba(158, 162, 234, 0.27)">
      <tr>
        <th>Name</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <div class="ms-3">
              <p class="fw-bold mb-1">John Doe</p>
            </div>
          </div>
        </td>
        <td>
          <p class="fw-normal mb-1">25wpm</p>
        </td>
      </tr>
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <div class="ms-3">
              <p class="fw-bold mb-1">Alex Ray</p>
            </div>
          </div>
        </td>
        <td>
          <p class="fw-normal mb-1">23wpm</p>
        </td>
      </tr>
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <div class="ms-3">
              <p class="fw-bold mb-1">Kate Hunington</p>
            </div>
          </div>
        </td>
        <td>
          <p class="fw-normal mb-1">25wpm</p>
        </td>
      </tr>
    </tbody>
  </MDBTable>
</template>
<script>
import { MDBTable } from "mdb-vue-ui-kit";

export default {
  components: {
    MDBTable,
  },
  data() {
    return {
      texttype: "",
      timeleft: 20,
      counter: 10,
      star: "",
      input: document.getElementById("input"),
      btn: document.getElementById("btn"),
      parag: document.getElementById("paragraph1"),
      rand: "",
      words: [
        "wellcome to test that compute your speed ",
        "hi to your account",
        "welcome to sudan",
      ],
      players: [
        { name: "ahmed", score: 0 },
        { name: "mohamed", score: 0 },
      ],
    };
  },
  methods: {
    start() {
      this.rand = this.words[Math.floor(Math.random() * this.words.length)];
      console.log(this.texttype);

      return {
        text1: document.getElementById("paragraph1"),
        text: (document.getElementById("paragraph1").style.display = "block"),
        tex: (document.getElementById("paragraph1").innerHTML = this.rand),

        star: setInterval(() => {
          document.getElementById("timelef").innerHTML = this.timeleft;

          console.log(this.timeleft);
          if (this.timeleft <= 0) {
            if (this.rand.toLowerCase() == this.texttype.toLocaleLowerCase()) {
              alert("congrats");
            }
            alert("loser");
          }
          clearInterval(this.star);
          this.timeleft--;
        }, 1000),
      };
    },
    mov() {
      document.getElementById("mov").style.marginLeft = this.counter + "px";
      if (this.counter <= 610) {
        this.counter += 10;
      } else {
        this.counter;
      }
    },
  },
};
</script>
<style></style>
