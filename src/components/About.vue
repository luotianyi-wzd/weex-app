<template>
  <scroller class="about">
  	<slider class="slider" auto-play="true" interval="10000" infinite="true" scrollable="true">
  		<div class="frame" v-for="item in imageList">
  			<image class="image" :src="item.src"></image>
  		</div>
  	</slider>
  	<div class="btn_list">
	  	<div class="btn btn1" @click="hadnleZoom"><text class="btn_text">放大</text></div>
	  	<div class="btn btn2"><text class="btn_text" @click="handleRotate">旋转</text></div>  		
  	</div>
  	<div class="box" ref="box"></div>
  	<div class="box"></div>
	<div class="wrapper">
	    <div class="group">
	      <text class="label">Time: </text>
	      <text class="title">{{value}}</text>
	    </div>
	    <div class="group">
	      <text class="button" @click="pickTime">Pick Time</text>
	    </div>
	  </div>
  </scroller>
</template>

<script>
	const modal = weex.requireModule('modal')
	const animation = weex.requireModule('animation')
	const picker = weex.requireModule('picker')
	export default {
		name: 'about',
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
			hadnleZoom() {
				const box = this.$refs.box
				animation.transition(box, {
					styles: {
						width: '200px',
						height: '300px',
					},
					duration: 800,
					timingFunction: 'ease',
					delay: 0
				}, function () {
					modal.toast({message: '变换完成'})
				})
			},
			handleRotate() {
				const box = this.$refs.box
				animation.transition(box, {
					styles: {
						backgroundColor: '#ff000',
						transform: 'rotate(45)'
					},
					duration: 800,
					timingFunction: 'ease-in-out',
					delay: 0
				}, function () {
					modal.toast({message: '变换完成'})
				})
			},
			pickTime () {
		        picker.pickTime({
		          value: this.value
		        }, event => {
		          if (event.result === 'success') {
		            this.value = event.data
		          }
		        })
		      }
		}
	}
</script>

<style scoped>
	.image {
	    width: 700px;
	    height: 700px;
	}
  	.slider {
	    margin-top: 25px;
	    margin-left: 25px;
	    width: 700px;
	    height: 700px;
	    border-width: 2px;
	    border-style: solid;
	    border-color: #41B883;
  	}
  	.frame {
	    width: 700px;
	    height: 700px;
	    position: relative;
  	}
  	.btn_list{
	  	display: -webkit-flex;
	  	display: -moz-flex;
	  	display: -ms-flex;
	  	display: -o-flex;
	  	display: flex;
	  	flex-wrap: nowrap;
	  	flex-direction: row;
  	}
  	.btn{
	  	width: 100px;
	  	height: 50px;
	  	background-color: #985846;
	  	border-radius: 10px;
	  	margin-top: 10px;
	  	margin-left: 20px;
  	}
  	.btn1{
  		background-color: #254685;
  	}
  	.btn_text{
	  	line-height: 50px;
	  	text-align: center;
	  	color: #fff;
  	}
  	.wrapper{
  		position: relative;
  		top: 0;
  		left: 0;
  	}
  	.box{
	  	width: 100px;	
	  	height: 100px;
	  	background-color: #696854;
		top: 10px;
  	}
  	.wrapper {
    flex-direction: column;
    justify-content: center;
  }
  .group {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 40px;
    align-items: center;
  }
  .label {
    font-size: 40px;
    color: #888888;
  }
  .title {
    font-size: 80px;
    color: #41B883;
  }
  .button {
    font-size: 36px;
    width: 280px;
    color: #41B883;
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .about{
  	padding-bottom: 100px;
  }
</style>