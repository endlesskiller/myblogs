<template>
  <div>
    <el-row class="main" type="flex" justify="center">
      <el-col :span="16">
        <div id="artcle-info" class="title-top">
          <h2 class="text-center">
            <strong>{{top.title}}</strong>
          </h2>
          <!-- 描述：文章信息 -->
          <div class="text-center timeAndView">
            <span class="article-time">
              <i class="el-icon-time"></i>
              发表于：
              <span>{{top.time}}</span>
            </span>
            &nbsp;|&nbsp;
            <span class="article-views">
              <i class="el-icon-view"></i>
              阅读量：
              <span>{{top.lookView}}</span>万
            </span>
          </div>
          <p class="abstract">{{top.ps}}</p>
        </div>
        <hr />
        <div id="artcle-content">
          <div v-show="top.isShowAddress">
            <p>
              官方地址：
              <a :href="url" rel="nofollow" target="_blank">url</a>
            </p>

            <p>{{top.introducer}}</p>
          </div>

          <p>&nbsp;</p>

          <div v-for="(item,index) in airticleData" :key="index">
            <h3>
              <a name="t8"></a>
              {{index+1}}、{{item.secondTitle}}
            </h3>

            <p>
              {{item.content}}
              一、基本过程
              1、概念：浏览器的内核分为两个核心部分，渲染引擎与js引擎，拿Chrome来说，它的渲染引擎是webkit渲染引擎，js引擎为v8。渲染引擎用来渲染窗口，可以显示html,xml,xhtml,图片等，也可以通过插件渲染其他的文件。例如PDF,在此不做讨论。
              2、请求过程
              在浏览器地址栏输入url地址，按下回车键
              浏览器获取url进行域名解析，首先从本地DNS缓存查找，如果本地没有则去DNS服务器查找，如果都没有找到，则浏览器返回请求失败
              DNS解析出请求地址，浏览器想这个地址发送请求
              进行tcp三次握手建立连接
              tcp/ip连接建立后，浏览器向服务器发送http请求，服务处理请求并返回相应的资源（如果有缓存就在缓存中去）
              客户端下载资源，浏览器将内容展示到窗口
              3、渲染过程
              渲染引擎解析html生成DOM Tree,此时display:none的元素也存在与DOM Tree
              渲染引擎解析css生成CSS Rule Tree(css规则树)
              通过js引擎来解析Javascript脚本，主要是通过DOM API和CSSOM API来操作DOM Tree和CSS Rule Tree.
              DOM Tree 与CSS Rule Tree结合生成Render Tree（渲染树），这时display:none的元素已不存在与render tree中
              然后计算每个DOM节点的位置大小等，根据渲染树来布局，这一过程叫reflow(回流)
              最后调用系统Native GUI API进行绘制（重绘）
              4、渲染过程遇到js文件怎么处理？
              JavaScript的加载、解析与执行会阻塞DOM的构建，也就是说，在构建DOM时，HTML解析器若遇到了JavaScript，那么它会暂停构建DOM，将控制权移交给JavaScript引擎，等JavaScript引擎运行完毕，浏览器再从中断的地方恢复DOM构建。
              也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载 JS 文件，这也是都建议将 script 标签放在 body 标签底部的原因。当然在当下，并不是说 script 标签必须放在底部，因为你可以给 script 标签添加 defer 或者 async 属性（下文会介绍这两者的区别）。
              JS文件不只是阻塞DOM的构建，它会导致CSSOM也阻塞DOM的构建。
              原本DOM和CSSOM的构建是互不影响，井水不犯河水，但是一旦引入了JavaScript，CSSOM也开始阻塞DOM的构建，只有CSSOM构建完毕后，DOM再恢复DOM构建。
            </p>

            <p>&nbsp;</p>
          </div>

          <p>总结：是不是很简单，这里只是简单的展示了方法，它还有更多的注解来描述接口、参数、返回值 。需要学习更多的可以到官网阅读文档。</p>

          <p>希望对大家有所微薄的帮助。</p>

          <p>&nbsp;</p>

          <p>
            <span style="color:#3399ea;">
              <em>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 向上的路并不拥挤，到多数人选择了安逸！--it疯子也</em>
            </span>
          </p>
        </div>
        <div id="statement">
          <div class="item">{{$t('article.author')}}：it疯子也</div>
          <div class="item">
            {{$t('article.originalLink')}}：
            <a href="https://www.fengziy.cn/">https://www.fengziy.cn/</a>
          </div>
          <div class="item">{{$t('article.copyright')}}：本博客所有文章除特别声明外,转载请注明出处!</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Mock from "@/mock/airticle.js";

export default {
  name: "article",
  data() {
    return {
      top: Mock.top,
      airticleData: Mock.result
    };
  }
};
</script>

<style scoped>
#artcle-info {
  padding: 20px;
  background: #f56c6c;
  /*background: radial-gradient(red,orange,yellow,green,cyan,blue,purple);
  -webkit-background-clip: text; /*必需加前缀 -webkit- 才支持这个text值
  -webkit-text-fill-color: transparent; text-fill-color会覆盖color所定义的字体颜色： */

  /* background-image: url(../assets/vue.jpg);
	background-size:100% 100%;
  -moz-background-size:100% 100%;
	background-repeat: no-repeat; */
  margin-bottom: 40px;
}

#artcle-info .abstract {
  color: #ffffff;
  border-left: 3px solid #f56c6c;
  padding: 10px;
  background-color: rgba(126, 129, 135, 0.3);
}

#artcle-info .timeAndView {
  padding: 20px;
  line-height: 30px;
  font-size: 16px;
  color: #ffffff;
}

pre.has {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.8);
}

img.has {
  width: 100%;
}

#statement {
  border-left: 3px solid #f56c6c;
  padding: 20px;
  background-color: #ebeef5;
}
.title-top {
  margin-top: 60px;
}
</style>