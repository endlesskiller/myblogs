<template>
	<div class="friend">
		<el-card class="box-card">
		  <div slot="header" class="d-flex align-items-center">
		  	<img class="card-icon" src="../assets/lianjie.png"/>
		    <span>{{$t('friend.friend')}}</span>
		    <el-button class="ml-auto" style="padding: 3px 0" type="text">
		    	<router-link to="/apply" tag="span">{{$t('friend.exchange')}}</router-link>
		    </el-button>
		  </div>
		  <div class="text item"><a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html">flex布局</a></div>
		  <div class="text item"><a href="http://www.ruanyifeng.com/home.html">阮一峰的博客</a></div>
			<div class="text item"><a href="https://www.liaoxuefeng.com/">廖雪峰的博客</a></div>
		</el-card>
	</div>
</template>

<script>
export default {
  name: 'friend'
}
</script>

<style scoped>
.box-card .item a{
	text-decoration: none;
	/*color: #F56C6C;*/
}
.box-card span{
	font-weight: bold;
}
.card-icon{
	width: 20px;
	height: 20px;
	margin-right: 10px;
}
</style>