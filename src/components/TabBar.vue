<template>
	<div class="wrapper">
		<div class="item" @click="tabTo('home')">
            <text class="bar-txt" :class="[this.isActive('home')]">首页</text>
		</div>
		<div class="item" @click="tabTo('about')">
            <text class="bar-txt" :class="[this.isActive('about')]">关于</text>
		</div>
		<div class="item" @click="tabTo('topic')">
            <text class="bar-txt" :class="[this.isActive('topic')]">专题</text>
		</div>
		<div class="item" @click="tabTo('my')">
            <text class="bar-txt" :class="[this.isActive('my')]">我的</text>
		</div>
	</div>
</template>

<script>
	const modal = weex.requireModule('modal')
	export default {
		name: 'tab-bar',
		data() {
			return {
				currentTab: 'home'
			}
		},
		methods: {
			isActive(type) {
				return this.currentTab == type ? 'bar-active' : ''
			},
			tabTo(type) {
				if (this.currentTab == type) return
				this.currentTab = type;
                this.$emit('tabTo',{
                    status : 'tabTo',
                    data : {
                        type : type
                    }
                })
			}
		}
	}	
</script>

<style scoped>
	.wrapper{
		position: fixed;
		bottom: 0;
		width: 750px;
		height: 100px;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		flex-wrap: nowrap;
		border-top-width: 1px;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
	}
	.item{
        flex: 1;
    }
	.bar-txt{
		color:#666;
        text-align: center;
        line-height: 90px;
	}
	.bar-active{
		color: #b4282d;
	}
</style>