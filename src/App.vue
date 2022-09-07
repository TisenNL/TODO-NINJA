<template>
  <v-app>
    <navbar-component />
    <v-main class="grey lighten-4">
      <router-view class="pa-6" />
    </v-main>
  </v-app>
</template>

<script>
  import NavbarComponent from '@/components/NavbarComponent';

export default {
  name: 'App',
  components: { NavbarComponent },

  data: () => ({
    //
  }),
};
</script>
