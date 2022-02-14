<template>
  <div>
    <v-btn @click="goBack">
      <v-icon>
        mdi-arrow-left
      </v-icon>
      RETOUR
    </v-btn>
    <div v-if="!error">
       <h1>{{ episode.name }}</h1>
      <p>Status: {{ episode.episode }}</p>

    </div>
    <div v-else>
     {{ error }}
    </div>
    
  </div>
</template>

<script>
import { getEpisode } from '../apis/episode'
import { ERROR } from '../router/names';

export default {
  data() {
    return {
      episode: {},
      error: "",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    async getCurrentEpisode() {
      try {
        this.episode = await getEpisode(this.$route.params.id)
      } catch(e) {
        this.$router.push({ name: ERROR, query: { error: e } })
        this.error = e
      }
    }
  },
  async mounted() {
    await this.getCurrentEpisode()
  },
};
</script>