<template>
  <v-container>
    <v-card elevation="20" class="mt-5">
      <v-row>
        <v-col class="d-flex justify-center">
          <v-card-title class="text-center">
            Automação residencial
          </v-card-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="px-8">
          <v-card color="#1c5cac" class="white--text">
            <v-row justify="center" class="pa-0 ma-0">
              <v-card-title>
                Iluminação sala
              </v-card-title>
            </v-row>

            <v-row class="pa-0 ma-0">
              <v-col class="d-flex justify-center">
                <v-btn icon color="success" x-large>
                  <v-icon>mdi-power-standby</v-icon>
                </v-btn>
              </v-col>
              
              
            </v-row>
          </v-card>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="6" class="px-8">
          <v-card color="grey darken-2" class="white--text">
            <v-row justify="center" class="pa-0 ma-0">
              <v-card-title>
                Ventilador quarto
              </v-card-title>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      switch1: true,
    }
  },
}
</script>

<style></style>