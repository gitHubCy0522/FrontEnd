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
    <div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="date"
          label="工单列表"
          width="520">
          <template slot-scope="scope"><router-link :to="{name:'WorkOrderDetail'}"><i class="iconfont icon-bug"/>{{ scope.row.date }}</router-link></template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="所属项目"
          align="center"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="严重程度"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <span v-if="scope.row.address=='提示'"><i class="iconfont icon-dian" style="color: green"/>{{scope.row.address}}</span>
            <span v-else-if="scope.row.address=='一般'"><i class="iconfont icon-dian" style="color: green"/>{{scope.row.address}}</span>
            <span v-else="scope.row.address=='严重'" style="color: red;"><i class="iconfont icon-dian"/>{{scope.row.address}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="youxianji"
          label="优先级"
          align="center"
          show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button v-if="scope.row.youxianji=='中'" size="mini" type="success">{{scope.row.youxianji}}</el-button>
            <span v-else>-----</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="zhuangtai"
          label="状态"
          align="center"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="chuliren"
          label="处理人"
          align="center"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="chuangzaoshijian"
          label="创造时间"
          align="center"
          show-overflow-tooltip>
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
  </div>
</template>

<script>
  export default {
    name: 'WorkOrderList',
    data () {
      return {
        tableData: [{
          date: '[导航宽度]一个有8个导航,第八个导航被隐藏了',
          name: '渠道版',
          address: '提示',
          youxianji: '中',
          zhuangtai: '已关闭',
          chuliren: '------',
          chuangzaoshijian: '2018-08-02',
        }, {
          date: '[导航宽度]一个有8个导航,第八个导航被隐藏了',
          name: '',
          address: '一般',
          youxianji: '-----',
          zhuangtai: '已关闭',
          chuliren: '------',
          chuangzaoshijian: '2018-08-02',
        }, {
          date: '[导航宽度]一个有8个导航,第八个导航被隐藏了',
          name: '渠道版',
          address: '严重',
          youxianji: '中',
          zhuangtai: '已关闭',
          chuliren: '------',
          chuangzaoshijian: '2018-08-02',
        }, {
          date: '[导航宽度]一个有8个导航,第八个导航被隐藏了',
          name: '',
          address: '一般',
          youxianji: '-----',
          zhuangtai: '已关闭',
          chuliren: '------',
          chuangzaoshijian: '2018-08-02',
        }, {
          date: '[导航宽度]一个有8个导航,第八个导航被隐藏了',
          name: '渠道版',
          address: '提示',
          youxianji: '中',
          zhuangtai: '已关闭',
          chuliren: '------',
          chuangzaoshijian: '2018-08-02',
        }, {
          date: '[导航宽度]一个有8个导航,第八个导航被隐藏了',
          name: '',
          address: '一般',
          youxianji: '-----',
          zhuangtai: '已关闭',
          chuliren: '------',
          chuangzaoshijian: '2018-08-02',
        }, {
          date: '[导航宽度]一个有8个导航,第八个导航被隐藏了',
          name: '渠道版',
          address: '提示',
          youxianji: '中',
          zhuangtai: '已关闭',
          chuliren: '------',
          chuangzaoshijian: '2018-08-02',
        }],
        multipleSelection: [],
        input2: '',
        value1: '',
        value2: '',
        value3: '',
        input: '',
      }
    },

    methods: {
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      }
    }
  }
</script>

<style scoped>
  .tou {
    padding-top: 20px;
    padding-left: 770px;
  }

  i {
    font-size: 20px;
    position: relative;
    right: 2px;
    color: red;
    top: 3px;
  }
  .fy{
    display: inline-block;
    float: right;
  }
  a{
    text-decoration: none;
    color: black;
  }
</style>
