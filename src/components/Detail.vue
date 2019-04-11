<template>
  <scroller class="wrapper">
  		Detail
  </scroller>
</template>

<script>
	const modal = weex.requireModule('modal')
	const navigator = weex.requireModule('navigator')
	const animation = weex.requireModule('animation')
	const picker = weex.requireModule('picker')
	export default {
		name: 'detail',
		data() {
			return {
				isLoading: false,
				isRefresh: false,
				imageList: [
		          	{ src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
		          	{ src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
		          	{ src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
		        ],
		        value: ''
			}
		},
		methods: {
			jump(event) {
				navigator.push({
					url: 'htt',
					animated: 'true'
				}, event => {
					modal.toast({message: 'jump', duration: 1})
				})
			}
		}
	}
</script>

<style scoped>
	.topic{
		padding-bottom: 100px;
	}

	.wrapper{
		justify-content: center;
		flex-direction: column;
	}
	.button{
		width: 450px;
		border-width: 2px;
		border-style: solid;
		font-size: 30px;
		margin-left: 150px;
		border-color: #dddddd;
		text-align: center;
		padding-top: 25px;
    	padding-bottom: 25px;
	}
</style>