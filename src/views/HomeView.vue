<template>
  <div class="home">
    <NavBar />
    <CoverComponent />
    <b-container>
      <div class="step-content">
        <h2><b>No Coding</b></h2>
        <h3 class="text-gradient"><b>Start your campaign in 3 steps</b></h3>
        <p class="text-color-primary mb-0">
          Blockchain development is known for complicated system, high-cost and
          time-consuming.
        </p>
        <p class="text-color-primary">
          With build3, anyone can launch a web3 or blockchain application in
          just a minute & start building for free.
        </p>
        <b-row class="mt-5">
          <b-col v-for="(step, index) in steps" :key="index"
            ><CardComponent :item="step"
          /></b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/nav-bar.vue";
import CoverComponent from "@/components/cover-component.vue";
import CardComponent from "@/components/card-component.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    CoverComponent,
    CardComponent,
  },
  data() {
    return {
      steps: [
        {
          img: "https://www.build3.tech/img/nocode_1.73118dab.png",
          title: "Choose Campaign",
          desciption:
            "Promote your marketing campaign with Token or NFT rewards for powerful traffic & lead generation.",
        },
        {
          img: "https://www.build3.tech/img/nocode_2.86ad67a7.png",
          title: "Customize Your Branding",
          desciption:
            "Empower your brand with exclusive NFT collection to promote user-engagement and ownership.",
        },
        {
          img: "https://www.build3.tech/img/nocode_3.61ae272f.png",
          title: "Smooth Launching",
          desciption:
            "Digitize your product design & in-game item into NFT to generate more revenue channel & validate the market demand.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
$text-color-primary: #51646b;
.step-content {
  padding: 1em;
  background-color: white;
  box-shadow: 0px 0px 18px 5px #0000002e;
  border-radius: 15px;
  padding: 1em;
  width: 100%;
  text-align: center;
  position: relative;
  top: -55px;
  h3.text-gradient {
    background: -webkit-linear-gradient(40deg, #2867eb, #6ae3b3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .text-color-primary {
    color: $text-color-primary;
  }
}
</style>
