<template>
  <div>
    <div class="tou">
      <span>
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="选择日期时间">
      </el-date-picker>
      </span>
      <span>
        <el-input v-model="input2" placeholder="请输入关键字查询" style="width: 150px;"></el-input>
         <el-button icon="el-icon-search" circle></el-button>
      </span>
    </div>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="工单列表"
        prop="date"
        width="500%">
        <template slot-scope="scope">
          <span><i class="iconfont icon-bug"/>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="状态"
        prop="name">
        <template slot-scope="scope">
          <el-popover
            v-if="scope.row.name=='新'"
            placement="bottom"
            width="500"
            trigger="click">
            <template>
              <div class="div_left">
                <ul class="div_left_ul">
                  <li><el-button size="small" @click="ok=!ok" round>保持为新</el-button></li>
                  <li><el-button size="small" @click="ok2=!ok2" round>接受/处理</el-button></li>
                  <li><el-button size="small" @click="ok3=!ok3" round>&nbsp;&nbsp;已拒绝&nbsp;&nbsp;</el-button></li>
                </ul>
              </div>
              <div class="div_right" v-if="ok">
                <p>
                  <span>处理人</span><el-input v-model="input" style="width: 260px;" placeholder="请输入内容"></el-input>
                </p>
                <p>
                  <span class="span_pl">评论</span>
                  <el-input class="input_textarea"
                  type="textarea"
                  :rows="2"
                  placeholder="@通知他人,增加评论/处理意见"
                  v-model="textarea"size="mini"style="width: 260px;">
                </el-input>
                </p>
                <p>
                  <em>Aa&nbsp;富文本格式</em>
                </p>
                <p class="p_strn">
                  <el-button type="primary">确定</el-button>
                  <el-button>取消</el-button>
                </p>
              </div>
              <div class="div_right" v-if="!ok2">
                bb
              </div>
              <div class="div_right" v-if="!ok3">
                cc
              </div>
            </template>
            <el-button type="success" size="mini" slot="reference">{{ scope.row.name }}</el-button>
          </el-popover>
          <el-popover
            v-else="scope.row.name=='接受/处理'"
            placement="bottom"
            width="200"
            trigger="click"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-button type="primary" size="mini" slot="reference">{{ scope.row.name }}</el-button>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="优先级"
        prop="address">
        <template slot-scope="scope">
          <el-popover
            v-if="scope.row.address=='中'"
            placement="bottom"
            width="200"
            trigger="click">
            <template>
                <ul class="ul">
                  <li><el-button size="mini">----空-----</el-button></li>
                  <li><el-button size="mini" type="danger">紧急&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-button></li>
                  <li><el-button size="mini" type="danger">高&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-button></li>
                  <li><el-button size="mini" type="success">中&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-button></li>
                  <li><el-button size="mini" type="info">低&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-button></li>
                  <li><el-button size="mini" type="info">无关紧要</el-button></li>
                </ul>
            </template>
            <el-button type="success" size="mini" slot="reference">{{ scope.row.address }}</el-button>
          </el-popover>
          <span v-else>{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="所属项目"
        prop="name2">
      </el-table-column>
      <el-table-column
        label="创建时间"
        prop="name2">
      </el-table-column>
    </el-table>
    <p>
      <span class="fy">
        <el-pagination
          layout="prev, pager, next"
          :total="50">
      </el-pagination>
      </span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'ProjectList',
    data () {
      return {
        ok:'false',
        ok2:'false',
        ok3:'false',
        input:'',
        input2:'',
        textarea: '',
        tableData: [{
          date: '6.数据分析页面，筛选条件做隔离，并不是and的关系',
          name: '新',
          address: '--',
          name2: '--'
        }, {
          date: '6.数据分析页面，筛选条件做隔离，并不是and的关系',
          name: '新',
          address: '--',
          name2: '--'
        }, {
          date: '6.数据分析页面，筛选条件做隔离，并不是and的关系',
          name: '新',
          address: '--',
          name2: '--'
        }, {
          date: '6.数据分析页面，筛选条件做隔离，并不是and的关系',
          name: '接受/处理',
          address: '中',
          name2: '--'
        }],
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }],
        search: '',
        value1: '',
        value2: '',
        value3: ''
      }
    },
    methods: {
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      },
    },
  }
</script>

<style scoped>
  i {
    font-size: 20px;
    position: relative;
    right: 2px;
    color: red;
    top: 1.5px;
  }
  .div_left{
    float: left;
    width: 150px;
    height: 400px;
    background-color: #EAEDF1;
  }
  .div_right{
    float: right;
    width: 350px;
    height: 400px;
  }
  .div_left_ul{
    list-style: none;
    margin: 0px;
    padding: 0px;
    text-align: center;
  }
  .div_left_ul li{
    margin: 20px 0px;
  }
  .div_right span{
    display: inline-block;
    margin-right: 10px;
  }
  .span_pl{
    position: relative;
    bottom: 20px;
  }
  .input_textarea{
    margin-left: 10px;
  }
  em{
    float: right;
    margin-right: 38px;
  }
  .p_strn{
    position: absolute;
    bottom: 10px;
    right: 38px;
  }
  .ul{
    list-style: none;
  }
  .ul li{
    margin: 10px 0px;
  }
  .fy{
    display: inline-block;
    float: right;
  }
  .tou{
    padding-top: 20px;
    padding-left: 770px;
  }
</style>
