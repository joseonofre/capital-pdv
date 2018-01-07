<template>
  <div style="width: 100%;">
    <v-layout row>
      <v-flex xs12 sm12>
        <v-btn
          color="green darken-4"
          dark
          block
          @click="goTo()"
        >
          <v-icon>add</v-icon> Adicionar
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm12>
        <v-card>
          <v-list two-line subheader>
            <template v-for="(item, i) in items">
              <v-list-tile @click="">
                <v-list-tile-content>
                  <v-list-tile-title>{{item.title}}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn flat icon color="primary" slot="activator">
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn flat icon color="red darken-4" slot="activator">
                    <v-icon>delete</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-list>
          <v-divider></v-divider>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'Categorias',
    data () {
      return {
        items: [
          { title: 'Sanduíches' },
          { title: 'Sanduíches > Trio' },
          { title: 'Bebidas' },
          { title: 'Bebidas > Suco' },
          { title: 'Bebidas > Refrigerante' }
        ]
      }
    },
    methods: {
      goTo() {
        this.$router.push('categorias/novo');
      }
    }
  }
</script>