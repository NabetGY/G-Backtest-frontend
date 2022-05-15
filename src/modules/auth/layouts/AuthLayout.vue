<template>
  <v-container class="height-app">
      <v-overlay :model-value="isLoading" class="align-center justify-center">
        <v-progress-circular
          color="purple"
          indeterminate
          width="7"
          size="70"
        ></v-progress-circular>
      </v-overlay>

    <router-view />
    
  </v-container>

</template>

<script>
import { computed } from "vue";
import { useStore } from 'vuex';

export default {
  components: {
    
  },

  setup(){
    const store = useStore()

    return {
      isLoading: computed( () => store.state.backtest.isLoading )
    }
  }
};
</script>

<style scoped>

  .loading-position{
      position: absolute;
      top: 40%;
      right: 50%;
      left: 50%;
  }
</style>