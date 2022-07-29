<template>
  <div class="cover-component">
    <p class="title">
      <b> Build web3 campaign for your business </b>
    </p>
    <p class="my-3">
      Easy & Affordable way to start your campaign with no-coding required.
    </p>
    <router-link @click.native="started" to="/started"
      ><button type="button" class="primary-btn">
        Start Building — it’s free
      </button></router-link
    >
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
$primary-color: linear-gradient(45deg, #2867eb 10%, #6ae3b3 150%);
.cover-component {
  background-color: black;
  color: white;
  text-align: center;
  height: 65vh;
  align-content: center;
  display: grid;
  .title {
    font-size: 48px;
    font-weight: bold;
    width: 450px;
    justify-self: center;
    line-height: 1.2;
  }
  .primary-btn {
    color: white;
    background-image: $primary-color;
    border: unset;
    border-radius: 5px;
    padding: 10px;
    justify-self: center;
    width: 200px;
    margin: 20px;
    &:hover {
      background-image: linear-gradient(40deg, #2867eb -40%, #6ae3b3 85%);
    }
  }
}
</style>
