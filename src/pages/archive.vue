<template>
	<div class="archive">
		<div class="count">{{this.$route.params.name || $t('header.archive')}}：3{{$t('archive.article')}}</div>
		<el-timeline>
			<el-timeline-item v-for="(activity, index) in activities" :key="index" :color="activity.color" :timestamp="activity.timestamp" placement="top" @mouseenter="hoverLine(activity)">
				<div class="line-item">
					<router-link to="/article" tag="span">{{activity.content}}</router-link>
				</div>
			</el-timeline-item>
		</el-timeline>
	</div>
</template>

<script>
	export default {
		name: 'archive',
		data() {
			return {
				activities: [{
					content: '底部组件修改，title栏修改',
					timestamp: '2019-11-26'
				}, {
					content: 'less引入,顶部组件优化,Eslint错误的修复,修复header头刷新问题',
					timestamp: '2019-11-27'
				}, {
					content: '...',
					timestamp: '2018-04-11'
				}, {
					content: '...',
					timestamp: '2019-11-11'
				}, {
					content: '底部组件修改，title栏修改',
					timestamp: '2019-11-26'
				}, {
					content: 'less引入,顶部组件优化,Eslint错误的修复',
					timestamp: '2019-11-27'
				}, {
					content: '底部组件修改，title栏修改',
					timestamp: '2019-11-26'
				}, {
					content: 'less引入,顶部组件优化,Eslint错误的修复',
					timestamp: '2019-11-27'
				}, {
					content: '...',
					timestamp: '2018-04-11'
				}, {
					content: '...',
					timestamp: '2019-11-11'
				}, {
					content: '底部组件修改，title栏修改',
					timestamp: '2019-11-26'
				}, {
					content: 'less引入,顶部组件优化,Eslint错误的修复',
					timestamp: '2019-11-27'
				},]
			};
		},
		methods: {
			hoverLine(activity) {
				activity.color = "#409eff"
			}
		}
	}
</script>

<style lang="less" scoped>
	.archive {
		overflow-y: auto;
	}
	.line-item {
		display: inline-block;
	}
	
	.line-item:hover {
		cursor: pointer;
		color: #409EFF;
	}
	
	.count {
		margin-bottom: 20px;
		font-size: 20px;
		color: #E6A23C;
	}
</style>