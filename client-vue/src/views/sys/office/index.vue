<template>
  <VCard icon="s-promotion" mode="table" title="机构管理" @on-table-height-change="handleTableHeight">
    <template slot="extra">
      <el-button type="success" icon="el-icon-plus" @click="handleRouter('sysOfficeAdd')">新增</el-button>
    </template>
    <VForm slot="form" :data="form.data" :model="form.model" @on-ok="handleSearch" />
    <el-table ref="table" :height="height" :data="data.list" border>
      <el-table-column prop="officeName" label="机构名称" />
      <el-table-column prop="officeCode" label="机构编码" />
      <el-table-column prop="fullName" label="机构全称" />
      <el-table-column prop="sort" label="排序号" />
      <el-table-column prop="officeType" label="机构类型" width="100">
        <template slot-scope="{row}">{{ row.officeType|officeTypeFilter }}</template>
      </el-table-column>
      <el-table-column prop="updateDate" label="更新时间" width="140" />
      <el-table-column prop="status" label="状态" width="100" align="center">
        <template slot-scope="{row}">
          <el-tag v-if="row.status==='0'" type="success" effect="dark">启用</el-tag>
          <el-tag v-else type="danger" effect="dark">停用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="220">
        <template slot-scope="{row}">
          <el-button type="text" icon="el-icon-view" size="small">查看</el-button>
          <el-button
            type="text"
            icon="el-icon-edit"
            size="small"
            @click="handleRouter('sysOfficeEdit',row.id)"
          >编辑</el-button>
          <el-button type="text" icon="el-icon-delete" size="small" @click="handleDelete(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <VPage class="margin-top-10" :total="data.total" :current="data.current" :size="data.size" />
  </VCard>
</template>
<script>
import { ApiGetOfficeList, ApiOfficeDelete } from "@/api/sys/office"
export default {
  data() {
    return {
      height: 0,
      form: {
        model: {
          officeName: "",
          officeCode: ""
        },
        data: [
          {
            component: "Input",
            label: "机构名称",
            field: "officeName"
          },
          {
            component: "Input",
            label: "机构编码",
            field: "officeCode"
          },
        ],
      },
      data: {
        list: [],
        size: 10,
        current: 1,
        total: 0,
      },
    }
  },
  mounted() {
    this.getOfficeList()
  },
  methods: {
    handleRouter(name, id) {
      this.$router.push({ name, query: { id } })
    },
    handleTableHeight(height) {
      this.$nextTick(() => {
        this.height = height
      })
    },
    handleSearch(payload) {
      this.getOfficeList(payload)
    },
    handleDelete(id) {
      this.$confirm('确定将选择数据删除?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        ApiOfficeDelete({ id }).then(res => {
          if (res.success) {
            this.$message.success(res.msg)
          } else {
            this.$message.error(res.msg)
          }
        })
      })
    },
    getOfficeList(payload) {
      ApiGetOfficeList(payload).then(res => {
        if (res.success) {
          this.data = res.data
        }
      })
    }
  }
}
</script>