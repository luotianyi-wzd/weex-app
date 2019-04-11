<template>
  <list class="list" @loadmore="loadMore" loadmoreoffset="20">
  	<refresh @refresh="onrefresh" :display="isRefresh ? 'show' : 'hide'">
  		<text class="refresh">refresh...</text>
  	</refresh>
    <cell class="cell" v-for="num in lists">
      <div class="panel">
        <text class="text">{{num}}</text>
      </div>
    </cell>
    <cell v-if="isLoading" class="item-loading">
    	<div :style="loadingDisplay" class="loadingDisplay">
            <text class="indicator-text">Loading ...</text>
        </div>
    </cell>
    <!-- <loading :display="isLoading ? 'show' : 'hide'">
    	<div class="">
    		<text class="loading">loading...</text>
    	</div>
  	</loading> -->
  </list>
</template>

<script>
	const modal = weex.requireModule('modal')
	export default {
		name: 'test',
		data() {
			return {
				isLoading: false,
				isRefresh: false,
				lists: [1,2,3,4,5]
			}
		},
		methods: {
			loadMore(event) {
				modal.toast({ message: 'loading...', duration: 1 })
				this.isLoading = true
		        setTimeout(() => {
		          const length = this.lists.length
		          for (let i = length; i < length + 4; ++i) {
		            this.lists.push(i + 1)
		          }
					this.isLoading = false

		        }, 1800)
			},
			onrefresh(event) {
				this.isRefresh = true
				setTimeout(()=> {
					this.isRefresh = false
				}, 1000)
				this.lists = [1,2,3,4,5]
			}
		}
	}
</script>

<style scoped>
	.input {
	    font-size: 60px;
	    height: 80px;
	    width: 750px;
	}
	.button {
	    font-size: 36;
	    width: 200;
	    color: #41B883;
	    text-align: center;
	    padding-top: 10;
	    padding-bottom: 10;
	    border-width: 2;
	    border-style: solid;
	    margin-right: 20;
	    border-color: rgb(162, 217, 192);
	    background-color: rgba(162, 217, 192, 0.2);
	}
	.list{
		padding-bottom: 100px;
	}
	.panel {
	    width: 600px;
	    height: 250px;
	    margin-left: 75px;
	    margin-top: 35px;
	    margin-bottom: 35px;
	    flex-direction: column;
	    justify-content: center;
	    border-width: 2px;
	    border-style: solid;
	    border-color: rgb(162, 217, 192);
	    background-color: rgba(162, 217, 192, 0.2);
	}
	.item-loading{
		
	}
	.loadingDisplay{
		width: 750px;
		padding-top: 120px;
		padding-bottom: 120px;
	}
	.indicator-text{
		text-align: center;
	}
  	.text {
		font-size: 50px;
		text-align: center;
		color: #41B883;
	}
	.loading {
		font: 30px;
		text-align: center;
	}
	.refresh{
		text-align: center;
	}
</style>