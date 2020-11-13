<template>
    <div>
        <tab-bar>
            <tab-bar-item path='/home' activeColor='blue'>
                <img slot='item-icon' src='~assets/img/tabbar/home2.jpg' alt=''>
                <img slot='item-icon-active' src='~assets/img/tabbar/home1.jpg' alt=''>
                <div slot='item-text'> 首页 </div>
            </tab-bar-item>
            <tab-bar-item path='/class' activeColor='green'>
                <img slot='item-icon' src='../../assets/img/tabbar/class.jpg' alt=''>
                <img slot='item-icon-active' src='../../assets/img/tabbar/home.jpg' alt=''>
                <div slot='item-text'> 分类 </div>
            </tab-bar-item>
            <tab-bar-item path='/shopcart'>
                <img slot='item-icon' src='../../assets/img/tabbar/car.jpg' alt=''>
                <img slot='item-icon-active' src='../../assets/img/tabbar/me.jpg' alt=''>
                <div slot='item-text'> 购物车 </div>
            </tab-bar-item>
            <tab-bar-item path='/profile'>
                <img slot='item-icon' src='../../assets/img/tabbar/me.jpg' alt=''>
                <img slot='item-icon-active' src='../../assets/img/tabbar/car.jpg' alt=''>
                <div slot='item-text'> 我的 </div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>
<script>
import TabBar from './TabBar'
import TabBarItem from './TabBarItem'
export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>