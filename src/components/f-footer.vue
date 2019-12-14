<template>
  <div class="f-footer">
    <el-main class="main">
      <el-row>
        <!--<el-col :span="8" class="item-col">
				<div class="title">常用工具</div>
				<div class="item"><a href="#" class="out-link">aaa</a></div>
				<div class="item"><a href="#" class="out-link">aa</a></div>
        </el-col>-->
        <el-col :span="8" class="item-col">
          <div class="title">{{$t('footer.expressLane')}}</div>
          <div class>
            <a href="#" class="out-link">{{$t('footer.gitee')}}</a>
          </div>
          <div class>
            <a href="#" class="out-link">lujunan</a>
          </div>
          <div class>
            <a href="#" class="out-link">{{$t('footer.admin')}}</a>
          </div>
        </el-col>
        <el-col :span="8" class="item-col weside">
          <div class="item">
            <i class="el-icon-caret-right"></i>
            本站已经运行了  {{Dvalue}}
          </div>
          <div class="item">
            <i class="el-icon-caret-right"></i>
            2833847025%40qq.com(需要解密)
          </div>
          <div class="item">
            <i class="el-icon-caret-right"></i>
            © lew-博客 |
            <a
              target="_blank"
              href="http://www.beian.miit.gov.cn/"
            >粤ICP备19146602号</a>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
export default {
	name: "Footer",
	data() {
		return {
			Dvalue: "",
		};
	},
  mounted() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      let timestamp = new Date().getTime();
			let value = timestamp - 1574758800000;
			this.Dvalue = this.formatDuring(value);
		},
		// 时间戳转YY-MM-DD HH:MM:SS
    format(val) {
			var date = new Date(val);
			let Y=0,M=0,D=0,h=0,m=0,s=0;
      Y = date.getFullYear() + "-";
      M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      D = date.getDate() + " ";
      h = date.getHours() + ":";
      m = date.getMinutes() + ":";
      s = date.getSeconds();
      return (Y + M + D + h + m + s);
		},
		// 时间戳转天：时：分:秒
		formatDuring(mss){
     var days = parseInt(mss / (1000 * 60 * 60 * 24));
     var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    //  var seconds = (mss % (1000 * 60)) / 1000;
     return days + " 天 " + hours + " 小时 " + minutes + " 分钟 ";
}
  }
};
</script>

<style scoped>
.f-footer {
  padding: 20px;
  text-align: center;
  color: #fff;
  background-color: #555;
}
.main {
  width: 70%;
  margin: 0 auto;
  color: #ccc;
}
.out-link {
  text-decoration: none;
  color: #ccc;
}
.out-link:hover {
  color: #ffffff;
}
.item-col {
  text-align: left;
}
.item-col.weside {
  font-size: 14px;
}
.item-col .title {
  color: #ddd;
  margin-bottom: 10px;
}
.item span {
  margin-right: 5px;
}
.item a {
  color: #ddd;
  text-decoration: none;
}
</style>