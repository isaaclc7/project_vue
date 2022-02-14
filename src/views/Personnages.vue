<template>
  <div>
    <div v-if="!error">
          <v-card v-for="personnage in personnages.results" :key="personnage.id" class="mx-auto" max-width="344">
            <v-img
                :src="personnage.image"
                height="200px"
            ></v-img>  

            <v-card-title>
            {{ personnage.name }}
            </v-card-title>

            <v-card-subtitle>
            {{ personnage.species }}
            </v-card-subtitle>

            <v-card-actions>
            <v-btn
            color="orange lighten-2"
            text
            >
            <router-link :to="{ name: personnageRoute, params: { id: personnage.id }}">
            
            Explore
            </router-link>
            </v-btn>

            </v-card-actions>

            <v-expand-transition>
            <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
            {{ personnage.origin }}
            </v-card-text>
            </div>
            </v-expand-transition>
        </v-card>
    </div>
    <div v-else>
      {{ error }}
    </div>

    <div class="text-center">
        <v-pagination></v-pagination>
    </div>

  </div>
  
</template>

<script>
import { PERSONNAGE } from '../router/names'
import { getAllPersonnage } from "../apis/personnage";


export default {
  data() {
    return {
      personnageRoute: PERSONNAGE,
      personnages: [],
      error: "",
    };
  },
  methods: {
    async getPersonnages() {
      try {
        this.personnages = await getAllPersonnage();
      } catch (e) {
        this.error = e;
      }
    },
  },
  async mounted() {
    await this.getPersonnages();
  },
};
</script>