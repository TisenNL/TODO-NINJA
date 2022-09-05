<template>
  <v-app class="grey lighten-4">
    <navbar-component />
    <v-main class="mx-4 mb-4">
      <router-view />
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
