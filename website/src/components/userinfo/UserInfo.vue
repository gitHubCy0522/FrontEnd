<template>
    <div class="tun">
      <div class="yun1">
	 <template>
  		<div class="tuo"><p>管理员列表</p>
  		</div> 		
   		<div>
   			<form>
   			<p>iD号:&nbsp;<input type="text" style="height:20px;width:100px;"/>&nbsp;&nbsp;
   				时间：<input type="text" style="height:20px;width:100px;"/>
   				至&nbsp;<input type="text" style="height:20px;width:100px;"/>&nbsp;&nbsp;
   				关键字：<input type="text" style="height:20px;width:100px;"/>
   				<button  style="height:25px;width:50px;">查询</button>
   			</p>			
   		</form>
   		<div class="tui" >
   			<div>
   			<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180" >
      </el-table-column>
      <el-table-column
        prop="address"
        label="密码">
      </el-table-column>
     <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </template>
		</div>
   		</div>
   		<div>
   			<div class="block">
  <span class="demonstration"> <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination></span>
 
</div>
</div>
   		</div>

   </template>
    	 </div>
    </div>
</template>

<script>

  export default {
    name: 'UserInfo',
    data () {
      return {
        tableData: [],
      }
    },
    created() {
			let data = {
				PageIndex: 1,
				Limit: 20
			};
			this.queryProjeckList(data).then(res => {
				this.tableData = res.Data
			});
		},
    name: 'WorkOrderList',
    data () {
      return {
      	  tableData: [{
            date: '2016-05-02',
            name: '待你评价',
            address: '财务类',
            ai:'2019-2-19 11:29',
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '测试',
             ai:'2019-2-19 11:29',
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
              ai:'2019-2-19 11:29',
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
              ai:'2019-2-19 11:29',
            ab:'工单已关闭',         
      }]
      }
      }
  }
</script>

<style scoped>
.tuo p{
	height:25px;
	line-height:25px;
	border-left:3px #59AfE4 solid;
	padding-left:10px;
	font-size:18px;
	color:#666;
}
	.tuo{
		width: 100%;height: 40px;border-bottom: 1px solid #858585;
	}
	 .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .tui{
  	height: 300px;
  	border:1px solid #000
  }
  .block{
  	float:right;
  }
.tun{background:url("../../assets/beijing.jpg")}
</style>