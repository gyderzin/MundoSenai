<template>
  <v-container>
    <v-card elevation="20" class="mt-5 mb-5">
      <v-row>
        <v-col class="d-flex justify-center">
          <v-card-title class="text-center">
            Automação Residencial
          </v-card-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="px-8" v-for="circuito in circuitos" :key="circuito.id">
          <v-card :color="circuito.estado == 1 ? '#1c5cac' : 'grey darken-2'" class="white--text">
              <span class="caption ml-3">
                {{ circuito.estado == 1 ? 'ON' : 'OFF' }}
              </span>
            <v-row justify="center" class="pa-0 ma-0">
              <v-card-title>
                {{ circuito.circuito }}
              </v-card-title>
            </v-row>

            <v-row class="pa-0 ma-0">
              <v-col class="d-flex justify-center">
                <v-btn icon :color="circuito.estado == 1 ? 'success' : 'error'" x-large @click="changeCircuito(circuito)">
                  <v-icon>mdi-power-standby</v-icon>
                </v-btn>
              </v-col>


            </v-row>
          </v-card>
        </v-col>

        <v-spacer></v-spacer>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('getCircuitos')    
  },
  methods: {
    corCard(state) {
      let corCard = state == 1 ? '#1c5cac' : 'grey darken-2'
      return corCard
    },
    changeCircuito(circuito) {
      this.$store.dispatch('changeCircuito', {
        id: circuito.id,
        estado: !circuito.estado,
      })
    }
  },
  computed: {
    circuitos() {
      return this.$store.getters.circuitos
    },
  }
}
</script>

<style></style>