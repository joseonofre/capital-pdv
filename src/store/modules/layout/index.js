import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  config: {
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
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
