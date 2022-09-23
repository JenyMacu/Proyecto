<template>
  <v-app id="inspire">

  <Topbar @handeDrawer="drawer = !drawer"/>
  <Sidebar :drawer="drawer"/>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
<router-view />
      </v-container>
    </v-main>
    
  </v-app>
</template>

<script>
import Topbar from './components/Topbar.vue';
import Sidebar from './components/Sidebar.vue';
  export default {
    data: () => ({
        cards: ["Today", "Yesterday"],
        drawer: null,
        links: [
            ["mdi-inbox-arrow-down", "Dashboard"],
            ["mdi-send", "Send"],
            ["mdi-delete", "Trash"],
            ["mdi-alert-octagon", "Spam"],
        ],
    }),
    components: { Topbar, Sidebar }
}
</script>

