<template>
  <div>
    <v-btn @click="goBack">
      <v-icon>
        mdi-arrow-left
      </v-icon>
      RETOUR
    </v-btn>
    <div v-if="!error">
       <h1>{{ personnage.name }}</h1>
      <v-img
                :src="personnage.image"
                height="200px"
            ></v-img>
      <p>Status: {{ personnage.status }}</p>
      <p>Spicies: {{ personnage.species }}</p>
      <p>Gender: {{ personnage.gender }}</p>
      <p>Orinin: {{ personnage.origin.name }}</p>
      <p>Location: {{ personnage.location.name }}</p>
    </div>
    <div v-else>
     {{ error }}
    </div>
    
  </div>
</template>

<script>
import { getPersonnage } from '../apis/personnage'
import { ERROR } from '../router/names';

export default {
  data() {
    return {
      personnage: {},
      error: "",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    async getCurrentPersonnage() {
      try {
        this.personnage = await getPersonnage(this.$route.params.id)
      } catch(e) {
        this.$router.push({ name: ERROR, query: { error: e } })
        this.error = e
      }
    }
  },
  async mounted() {
    await this.getCurrentPersonnage()
  },
};
</script>