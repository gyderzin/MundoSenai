<template>
  <v-app >
    <v-app-bar app color="#0763af" dark height="95px">
      <v-row>
        <v-col cols="12">
          <div class="d-flex align-center justify-center mt-11">
            <v-img alt="Vuetify Logo" class="shrink mr-2 mt-"  src="../public/Logo3.png" transition="scale-transition"
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
          <v-btn v-for="icon in icons" :key="icon.icon" class="mx-4 white--text" icon @click="redirect(icon.link)">
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
                
        <v-card-text class="white--text pt-0 text-justify">
          Projeto de automação residencial desenvolvido para o evento acadêmico Mundo Senai 2023, pela equipe Thunder Monkey composta pelos alunos Djeniffer Fernanda, Gyderlan Matos, Lucas Augusto, Matheus Esteves e Kauan Ueilley, e com mentoria do professor Wilson Silva.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Senai CETEM</strong> <br>
          <span class="caption"> Desenvolvido por: @gyderzin </span>
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
        {icon: 'mdi-instagram',
         link:  'https://instagram.com/senai_rondonia?igshid=MzRlODBiNWFlZA=='
        },
        {icon: 'mdi-facebook',
         link:  'https://www.facebook.com/senaidrro/?locale=pt_BR'
        },     
      ],
    }
  },
  methods: {
    redirect(link) {      
      window.location.href= link
    }
  }
};
</script>
