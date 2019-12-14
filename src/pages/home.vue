<template>
	<div class="home">
		<el-row id="artList" type="flex" justify="space-around">
			<el-col :span="16">
				<el-row class="art-item" v-for="(item,index) in home" :key="index">
					<!-- 卡片组件 -->
					<el-card shadow="hover" class="card_">
						<h5><router-link to="/article" tag="span" class="art-title">{{item.title}}</router-link></h5>
						<el-row class="art-info d-flex align-items-center justify-content-start">
							<div class="art-time"><i class="el-icon-time"></i>{{item.time}}</div>
							<div class="d-flex align-items-center"><img class="tag" src="../assets/tag.png" />：
								<el-tag size="mini">{{item.mark}}</el-tag>
							</div>
						</el-row>
						<el-row class="art-body">
							<div class="side-img hidden-sm-and-down"><img class="art-banner" src="../assets/vue.jpg"></div>
							<div class="side-abstract">
								<div class="art-abstract">
									{{item.intro}}
								</div>
								<div class="art-more">
									<router-link to="/article" tag="span">
										<el-button plain>{{$t('home.readMore')}}</el-button>
									</router-link>
									<div class="view"><i class="el-icon-view"></i>{{$filter.filter(item.lookView)}}</div>
								</div>
							</div>
						</el-row>
					</el-card>
					<img v-show="false" class="star" src="../assets/star.png" />
				</el-row>
				<div class="block pagination">
					<el-pagination  layout="prev, pager, next" :total="total">
					</el-pagination>
				</div>
			</el-col>
			<el-col :span="6" class="hidden-sm-and-down" id="side">
				<div class="item">
					<tag></tag>
				</div>
				<div class="item">
					<friend></friend>
				</div>
			</el-col>
		</el-row>

	</div>
</template>

<script>
	import friend from '../components/friend'
	import tag from '../components/tag'


	// 引入mock数据
const mockData  =  require('@/mock/home');
	export default {
		name: 'home',
		components: {
			friend,
			tag
		},
		data() {
			return {
				home: mockData.default,
				total: 100 || mockData.default.length,
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../assets/css/varibale";


	#side .item {
		margin-bottom: 30px;
	}
	
	.art-item {
		margin-bottom: 30px;
		position: relative;
	}
	
	.art-item .star {
		width: 60px;
		height: 60px;
		position: absolute;
		top: 0;
		right: 0;
	}
	
	img.tag {
		width: 16px;
		height: 16px;
	}
	
	.art-title {
		border-left: 3px solid #F56C6C;
		padding-left: 5px;
		cursor: pointer;
	}
	
	.art-title:hover {
		padding-left: 10px;
		color: #409EFF;
	}
	
	.art-time {
		margin-right: 20px;
	}
	
	.art-body {
		display: flex;
		padding: 10px 0;
	}
	
	.side-img {
		height: 150px;
		width: 270px;
		overflow: hidden;
		margin-right: 10px;
	}
	
	img.art-banner {
		width: 100%;
		height: 100%;
		transition: all 0.6s;
	}
	
	img.art-banner:hover {
		transform: scale(1.4);
	}
	
	.side-abstract {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.art-abstract {
		flex: 1;
		color: #aaa;
	}
	
	.art-more {
		height: 40px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	
	.art-more .view {
		color: #aaa;
	}
	h5{
		font-size: 18px;
	}
	.pagination {
		background-color: #F9F9F9;
	}
</style>