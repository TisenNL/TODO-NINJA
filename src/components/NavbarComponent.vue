<template>
    <v-app>
        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-app-bar-title>
            <v-spacer />
            <v-btn plain color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="indigo">
            <p>test</p>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
export default {
    data(){
        return {
            drawer: false,
        }
    }
    
}
</script>