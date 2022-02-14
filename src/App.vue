<template>
  <v-app>
    <header width = 100% height = 200px>
      <h1>
        Rick & Morty
      </h1> 
      <ul class="header_menu">
        <li>
          <a class="hearder_menu_item" href="/personnages">Personnages</a>
        </li>
        <li>
          <a class="hearder_menu_item" href="/Episodes">Episodes</a>
        </li>
      </ul>

    </header>  
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
