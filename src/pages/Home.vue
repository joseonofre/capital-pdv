<template>
    <layout-logged>
      <router-view/>
    </layout-logged>
</template>

<script>
  import LayoutLogged from '@/components/LayoutLogged'
  export default {
    name: 'Home',
    components: {
      LayoutLogged
    }
  }
</script>