<template>
  <b-nav class="nav-bar">
    <b-container>
      <b-row align-h="between" align-v="center">
        <b-col class="text-left">
          <router-link @click.native="home" to="/"
            ><button type="button" class="logo mx-2">
              <h3>build3</h3>
            </button></router-link
          >
        </b-col>
        <b-col class="text-right">
          <router-link @click.native="campaign" to="/campaign"
            ><button type="button" class="text-btn mx-2">
              Campaign
            </button></router-link
          >
          <router-link @click.native="pricing" to="/pricing"
            ><button type="button" class="text-btn mx-2">
              Pricing
            </button></router-link
          >
          <router-link @click.native="talkwithus" to="/talkwithus"
            ><button type="button" class="text-btn mx-2">
              Talk to us
            </button></router-link
          >
          <router-link @click.native="started" to="/started"
            ><button type="button" class="primary-btn mx-2">
              Get started
            </button></router-link
          >
        </b-col>
      </b-row>
    </b-container>
  </b-nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
$primary-color: linear-gradient(45deg, #2867eb 10%, #6ae3b3 150%);
$text-color-primary: #51646b;
$text-color-sky-blue: #0dcaf0;
.nav-bar {
  background-color: white;
  height: 100px;
  align-content: center;
}
.text-right {
  text-align: right;
}
.text-left {
  text-align: left;
}
.text-btn {
  color: $text-color-primary;
  background-color: white;
  border: none;
  &:hover {
    color: $text-color-sky-blue;
  }
}
.primary-btn {
  color: white;
  background-image: $primary-color;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  width: 120px;
  &:hover {
    background-image: linear-gradient(40deg, #2867eb -40%, #6ae3b3 85%);
  }
}
.logo {
  color: black;
  font-weight: bold;
  background-color: white;
  border: none;
}
</style>
