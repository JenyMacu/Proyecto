<template>
  <v-navigation-drawer v-model="drawer" app color="cyan lighten-2">
    <v-img src="https://w7.pngwing.com/pngs/241/309/png-transparent-simple-atmospheric-texture-blue-geometric-background-poster-geometry-polygon-flow-thumbnail.png" class="pa-4">
      <div class="text-center">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img aspect-ratio="30"
            src="https://w7.pngwing.com/pngs/178/419/png-transparent-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-face-thumbnail.png" />
        </v-avatar>

        <div>john@vuetifyjs.com</div>
      </div>
    </v-img>
    <v-sheet color="grey lighten-4" class="pa-4">

    </v-sheet>

    <v-divider></v-divider>

    <v-layout mt-4 column align-center>
      </v-layout>
      <v-layout column>
        <v-flex mx-3>
          <v-btn block large class="white--text mt-3" v-for="(item,index) in rutas" :key="index" text
            @click="insertarRuta(item.ruta)">
            <span class="mr-2">{{item.nombre}}</span>
          </v-btn>
        </v-flex>
      </v-layout>
  </v-navigation-drawer>
</template>
  
<script>
export default {
  name: "Sidebar",
  props: ["drawer"],
  data() {
    return {
      drawer: true,
      rutas: [
      { nombre:  'Login', ruta: '/' },
        { nombre:  'Inicial', ruta: '/inicial' },
        { nombre: 'Clientes', ruta: '/clientes' },
        { nombre: 'Productos', ruta: '/productos' },
        { nombre: 'Ventas', ruta: '/ventas' }
      ],
    }
  },
  methods:{
  insertarRuta(ruta){
    this.$router.push(ruta);
    }
  }
};
</script>
  
<style scoped>

</style>
