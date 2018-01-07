<template>
  <v-app>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile 
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action v-if="!item.children">
            <v-tooltip right>
              <v-btn flat icon color="primary" slot="activator" @click="goTo(item.to)" :key="item.title"><v-icon v-html="item.icon" color="primary"></v-icon></v-btn>
              <span>{{item.title}}</span>
            </v-tooltip>
          </v-list-tile-action>
          <v-list-tile-action v-else>
            <v-tooltip right>
              <!-- <v-btn flat icon color="primary" slot="activator"><v-icon v-html="item.icon" color="primary"></v-icon></v-btn> -->
              <v-menu bottom left open-on-hover slot="activator">
                <v-btn icon slot="activator">
                  <v-icon color="primary">more_horiz</v-icon>
                </v-btn>
                <v-list>
                  <v-list-tile v-for="child in item.children" :key="child.title" @click="">
                    <v-list-tile-title @click="goTo(child.to)">{{ child.title }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <span>{{item.title}}</span>
            </v-tooltip>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <slot></slot>
            <!-- <img src="/public/v.png" alt="Vuetify.js" class="mb-5" />
            <blockquote>
              &#8220;First, solve the problem. Then, write the code.&#8221;
              <v-tooltip right>
                <v-btn dark color="primary" slot="activator">Right</v-btn>
                <span>Right tooltip</span>
              </v-tooltip>
              <footer>
                <small>
                  <em>&mdash;John Johnson</em>
                </small>
              </footer>
            </blockquote> -->
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'home', title: 'Página inicial', to: '/' },
          { icon: 'desktop_mac', title: 'Balcão', to: '/balcao' },
          { icon: 'motorcycle', title: 'Delivery', to: '/delivery' },
          { icon: 'view_carousel', title: 'Mesa', to: '/mesas' },
          { icon: 'format_list_bulleted', title: 'Pedidos', to: '/pedidos' },
          {
            icon: 'more_horiz',
            title: 'Outros',
            children: [
              { icon: 'format_list_bulleted', title: 'Produtos', to: '/produtos' },
              { icon: 'format_list_bulleted', title: 'Categorias', to: '/categorias' },
              { icon: 'format_list_bulleted', title: 'Abrir/Fechar Caixa', to: '/caixa' }
            ]
          }
        ],
        miniVariant: true,
        right: true,
        rightDrawer: false,
        title: 'Capital PDV'
      }
    },
    methods: {
      goTo (page) {
        this.$router.push(page)
      }
    }
  }
</script>