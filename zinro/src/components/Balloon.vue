<template>
  <div class="conversation-balloon" :class="speaker">
    <div class="avatar">
      <img v-if="user" :src="test.img">
      <p class="name">{{ name }}</p>
    </div>
    <p class="message">{{ message }}</p>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    },
    speaker: {
      type: String,
      required: true,
      validator: value => {
        return value === "my" || value === "other";
      }
    },
    message: {
      type: String,
      required: true
    }
  }
});
</script>


<style lang="scss" scoped>
$my-balloon-color: #85ff49;
$other-balloon-color: #ffffff;

.conversation-balloon {
  &.my {
    text-align: right;
    > .avatar {
      float: right;
    }
    > .message {
      margin-right: 20px;
      background-color: $my-balloon-color;
      text-align: left;

      &::before {
        right: -20px;
        transform: rotate(-25deg);
        border-left: 18px solid $my-balloon-color;
      }
    }
  }
}
</style>