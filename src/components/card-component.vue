<template>
  <div class="step-card">
    <b-img center :src="item.img" alt="Center image"></b-img>
    <div class="content py-3 px-4">
      <h5>{{ item.title }}</h5>
      <p class="text-color-primary">{{ item.desciption }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss">
$text-color-primary: #51646b;
.step-card {
  border: unset;
}
.text-color-primary {
  color: $text-color-primary;
}
</style>
