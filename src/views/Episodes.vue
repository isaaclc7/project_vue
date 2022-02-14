<template>
  <div>
    <div v-if="!error">
          <v-card v-for="episode in episodes.results" :key="episode.id" class="mx-auto" max-width="344">
            
            <v-card-title>
            {{ episode.name }}
            </v-card-title>

            <v-card-subtitle>
            {{ episode.episode }}
            </v-card-subtitle>

            <v-card-actions>
            <v-btn
            color="orange lighten-2"
            text
            >
            <router-link :to="{ name: episodeRoute, params: { id: episode.id }}">
            
            Explore
            </router-link>
            </v-btn>

            </v-card-actions>

            <v-expand-transition>
            <div v-show="show">
            <v-divider></v-divider>

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
import { EPISODE } from '../router/names'
import { getAllEpisode } from "../apis/episode";


export default {
  data() {
    return {
      episodeRoute: EPISODE,
      episodes: [],
      error: "",
    };
  },
  methods: {
    async getEpisodes() {
      try {
        this.episodes = await getAllEpisode();
      } catch (e) {
        this.error = e;
      }
    },
  },
  async mounted() {
    await this.getEpisodes();
  },
};
</script>