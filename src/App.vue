<template>
  <v-app>
    <v-app-bar app color="#0763af" dark height="95px">
      <v-row>
        <v-col cols="12">
          <div class="d-flex align-center justify-center mt-10">
            <v-img alt="Vuetify Logo" class="shrink mr-2 mt-"  src="../public/Logo2.png" transition="scale-transition"
              width="250" />
          </div>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer dark padless>
      <v-card flat tile class="white--text text-center" color="#0763af" width="100%">
      
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
                
        <v-card-text class="white--text pt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nobis reiciendis doloremque nihil culpa debitis illum voluptates aspernatur, fugit illo, dignissimos dolorem officia, explicabo assumenda eligendi facilis eius amet impedit.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Senai CETEM</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  </v-app>
</template>

<script>

export default {
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  }
};
</script>
