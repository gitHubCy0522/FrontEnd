<template>
  <div>
    <div class="tou">
      <i class="iconfont icon-bug"/><span>【ID1002364】修改截图中的文字,增加1栏特点介绍</span><em
      class="iconfont icon-shoucang-copy"/>
      <span class="tou_right">
        <el-button size="mini" type="primary" plain>编辑</el-button>
        <el-select v-model="value" placeholder="更多" size="mini" style="width: 70px;">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
        <span>|</span><b class="iconfont icon-lianjie"/>
      </span>
    </div>
    <div class="center_left">
      <el-tabs v-model="activeName" @tab-click="handleClick" value="0">
        <el-tab-pane label="详细信息" name="first">
          <span class="tb">
            <strong class="iconfont icon-xiugai"/>
            <strong class="iconfont icon-quanping"/>
          </span>
        </el-tab-pane>
      </el-tabs>
      <div class="ul3">
        <ul>修改替换的文字如下</ul>
        <li>小白式操作，网络营销轻松落地</li>
        <li>内置7个营销页面保证页面营销力</li>
        <li>自助式营销工具组合，为您节省时间成本</li>
        <li>快速启动方案，性价比高，为您节省经济成本</li>
        <li>网站一键发布上线，快速简单</li>
      </div>
      <div class="ul4">
        <ul>增加1栏，变成左右可切换的效果，增加一栏的文字如下</ul>
        <li style="font-weight: bold">设计合理</li>
        <li>多种营销工具集成，更实用</li>
        <li>流量、客服一站集成，更智能</li>
        <li>一键更换方案配色，更方便</li>
      </div>
      <div>
        <p class="fj">
          <span>附件</span>
          <span class="fj_tj"><q class="iconfont icon-hao"/>添加</span>
        </p>
        <p class="fj">
          <span>评论</span>
          <span class="fj_tj">
            <q class="iconfont icon-hao"/>添加
          </span>
        </p>
      </div>
      <div class="div_di">
        <div class="div_yuan">
          剑飞
        </div>
        <div class="div_di_right">
          <p>
            <span>
              李剑飞
            </span>
            <span>
              在状态[重新打开]添加
            </span>
            <span>
              2019-03-15&nbsp;17:06
            </span>
          </p>
          <p class="p_jz">
            请搞定，建站平台之前也遇到这个问题，已经让他解决了
          </p>
        </div>
      </div>
      <div class="div_di">
        <div class="div_yuan">
          剑飞
        </div>
        <div class="div_di_right">
          <p>
            <span>
              李剑飞
            </span>
            <span>
              在状态[重新打开]添加
            </span>
            <span>
              2019-03-15&nbsp;17:06
            </span>
          </p>
          <p class="p_jz">
            请搞定，建站平台之前也遇到这个问题，已经让他解决了
          </p>
        </div>
      </div>
      <div class="div_di">
        <div class="div_yuan">
          剑飞
        </div>
        <div class="div_di_right">
          <p>
            <span>
              李剑飞
            </span>
            <span>
              在状态[重新打开]添加
            </span>
            <span>
              2019-03-15&nbsp;17:06
            </span>
          </p>
          <p class="p_jz">
            请搞定，建站平台之前也遇到这个问题，已经让他解决了
          </p>
        </div>
      </div>
      <div class="div_di">
        <div class="div_yuan">
          剑飞
        </div>
        <div class="div_di_right">
          <p>
            <span>
              李剑飞
            </span>
            <span>
              在状态[重新打开]添加
            </span>
            <span>
              2019-03-15&nbsp;17:06
            </span>
          </p>
          <p class="p_jz">
            请搞定，建站平台之前也遇到这个问题，已经让他解决了
          </p>
        </div>
      </div>
    </div>
    <div class="center_right">
      <p class="jbxx">基本信息</p>
      <div class="ul1">
        <ul>
          <li>状态</li>
          <li>模块</li>
          <li>优先级</li>
          <li>处理人</li>
          <li>缺陷类型</li>
          <li>创建人</li>
          <li>创建时间</li>
          <li>修复人</li>
          <li>解决方法</li>
        </ul>
      </div>
      <div class="ul2">
        <ul>
          <li><el-button round size="mini" style="color: blue;">接受/处理</el-button></li>
          <li>---</li>
          <li>---</li>
          <li>曹操</li>
          <li>---</li>
          <li>曹丕</li>
          <li>2019-03-0215:15:31</li>
          <li>---</li>
          <li>---</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WorkOrderDetail',
    data () {
      return {
        activeName: 'first',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    watch: {},
    components: {},
    computed: {},

    beforeCreate () {
    },
    created () {
    },
    mounted () {
    },
    destroyed () {
    }
  }
</script>

<style scoped>
  .tou {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #999999;
  }

  i {
    font-size: 20px;
    color: red;
    margin-right: 20px;
    position: relative;
    top: 2px;
  }
  em {
    font-size: 30px;
    position: relative;
    left: 5px;
    top: 5px;
  }
  .tou .tou_right{
    display: inline-block;
    float: right;
  }
  b{
    font-size: 18px;
    position: relative;
    top: 2px;
    left: 2px;
  }
  .center_left{
    float: left;
    width: 70%;
    height: 100%;
    padding-left: 20px;
  }
  .center_left:after{
    content: "";
    position: absolute;
    width: 5px;
    height: 136%;
    background-color: #999999;
    top: 50px;
    right: 380px;
  }
  .center_right{
    float: right;
    width: 25%;
    height: 100%;
  }
  .ul1{
    width: 35%;
    height: 100%;
    float: left;
  }
  .ul1 li{
    margin: 23px 0px;
    color: #999999;
  }
  .ul1 ul{
    list-style: none;
    padding: 0px;
  }
  .ul2{
    height: 100%;
    width: 65%;
    float: right;
  }
  .ul2 ul{
    padding: 0px;
    height: 100%;
    list-style: none;
    width: 100%;
  }
  .ul2 li{
    margin: 23px 0px;
  }
  p{
    font-weight: bold;
    padding: 0px;
    margin: 0px;
    margin-top: 10px;
  }
  .tb{
    display: inline-block;
    float: right;
  }
  strong{
    font-size: 12px;
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
  }
  .ul3{
    margin: 0px;
    padding: 0px;
  }
  .ul3 ul{
    margin: 0px;
    padding: 0px;
  }
  .ul3 li{
    list-style: decimal;
  }
  .ul4{
    margin-top: 80px;
    border-bottom: 1px solid #999999;
    padding-bottom: 50px;
  }
  .ul4 ul{
    margin: 0px;
    padding: 0px;
  }
  .ul4 li{
    list-style: none;
  }
  .fj{
    font-weight: normal;
  }
  .fj span{
    display: inline-block;
    margin-right: 20px;
  }
  .fj_tj{
    color: #999999;
  }
  q{
    position: relative;
    right: 2px;
  }
  .div_di{
    margin-top: 20px;
    height: 100px;
  }
  .div_yuan{
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: #999999;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
    color: white;
    float: left;
  }
  .div_di_right span{
    font-weight: normal;
    color: #999999;
    display: inline-block;
    margin: 0px 10px;
  }
  .p_jz{
    font-weight: normal;
    display: inline-block;
    margin-left: 20px;
  }
</style>
