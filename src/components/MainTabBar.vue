<template>
  <tab-bar>
    <tab-bar-item link="/category" :activeColor="activeColor">
      <template #item-icon>
        <img src="@/assets/img/tabbar/category.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="@/assets/img/tabbar/profile.png" alt="">
      </template>
      <template #item-text>
        <div>咨询项目</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/teacher" :activeColor="activeColor">
      <template #item-icon>
        <img src="@/assets/img/tabbar/teacher.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="@/assets/img/tabbar/category.png" alt="">
      </template>
      <template #item-text>
        <div>寻找老师</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link='/cart' :activeColor="activeColor">
      <template #item-icon>
        <img src="@/assets/img/tabbar/shoppingCart.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="@/assets/img/tabbar/teacher.png" alt="">
      </template>
      <template #item-text>
        <div>订单</div>
      </template>
    </tab-bar-item>
    <tab-bar-item link='/profile' :activeColor="activeColor">
      <template #item-icon>
        <img src="@/assets/img/tabbar/profile.png" alt="">
      </template>
      <template #item-icon-active>
        <img src="@/assets/img/tabbar/shoppingCart.png" alt="">
      </template>
      <template #item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  data() {
    return {
      activeColor: 'deepPink'
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}

</script>
<style>
img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>
