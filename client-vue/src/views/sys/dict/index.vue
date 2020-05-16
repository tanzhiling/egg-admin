<template>
  <VCard icon="s-promotion" mode="table" title="字典管理" @on-table-height-change="handleTableHeight">
    <template slot="extra">
      <el-button type="success" icon="el-icon-plus" @click="handleVisible(true,'新增')">新增</el-button>
    </template>
    <VForm slot="form" :data="vForm.data" :model="vForm.model" @on-ok="handleSearch" />
    <el-table ref="table" :height="height" :data="data.list" border>
      <el-table-column type="index" width="50" align="center" />
      <el-table-column prop="dictName" label="字典名称" />
      <el-table-column prop="dictType" label="字典类型" />
      <el-table-column prop="updateTime" label="更新时间" />
      <el-table-column prop="remarks" label="备注信息" />
      <el-table-column prop="status" label="状态" width="100" />
      <el-table-column label="操作" align="center" width="200">
        <template slot-scope="{row}">
          <el-button type="text" icon="el-icon-view" size="small" @click="handleView(row)">查看</el-button>
          <el-button
            type="text"
            icon="el-icon-edit"
            size="small"
            @click="handleVisible(true,'编辑',row.id)"
          >编辑</el-button>
          <el-button
            type="text"
            icon="el-icon-delete"
            size="small"
            @click="dictTypeDelete(row.id)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <VPage class="margin-top-10" :total="data.total" :current="data.current" :size="data.size" />
    <!-- 弹框新增/编辑 -->
    <el-dialog :title="title" :visible.sync="visible" @close="handleClose">
      <el-form ref="form" style="width:90%" :rules="rules" :model="form" label-width="100px">
        <el-form-item label="字典名称" prop="dictName">
          <el-input v-model="form.dictName" />
        </el-form-item>
        <el-form-item label="字典类型" prop="dictType">
          <el-input v-model="form.dictType" />
        </el-form-item>
        <el-form-item label="备注" prop="remarks">
          <el-input v-model="form.remarks" :autosize="{ minRows: 3, maxRows: 6}" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" type="primary" icon="el-icon-check" @click="handleSubmit">保存</el-button>
          <el-button @click="handleVisible(false)">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </VCard>
</template>
<script>
import { ApiGetDictTypeList, ApiDictTypeAdd, ApiGetDictTypeDetail, ApiDictTypeUpdate, ApiDictTypeDelete } from "@/api/sys/dict"
export default {
  data() {
    return {
      height: 0,
      vForm: {
        model: {
          dictName: "",
          dictType: ""
        },
        data: [
          {
            component: "Input",
            label: "字典名称",
            field: "dictName"
          },
          {
            component: "Input",
            label: "字典类型",
            field: "dictType"
          },
        ],
      },
      data: {
        list: [],
        size: 10,
        current: 1,
        total: 0,
      },
      form: {
        dictName: "",
        dictType: "",
        remarks: '',
        id: ""
      },
      rules: {
        dictName: [
          { required: true, message: '字典名称为必填项', trigger: 'blur' }
        ],
        dictType: [
          { required: true, message: '字典类型为必填项', trigger: 'blur' }
        ],
        isSys: [
          { required: true, message: '系统字典为必填项', trigger: 'change' }
        ],
      },
      loading: false,
      visible: false,
      title: "",
    }
  },
  mounted() {
    this.getDictTypeList()
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          if (this.title === "新增") {
            this.dictTypeAdd(this.form)
          } else {
            this.dictTypeUpdate(this.form)
          }
        }
      });
    },
    handleClose() {
      this.$refs.form.resetFields()
    },
    handleVisible(visible, title, id) {
      if (id) {
        this.getDictTypeDetail(id)
      }
      if (title) {
        this.title = title
      }
      this.visible = visible
    },
    handleView(row) {
      this.$router.push({ name: 'sysDictDataList', query: { id: row.id, dictName: row.dictName, dictType: row.dictType } })
    },
    handleTableHeight(height) {
      this.$nextTick(() => {
        this.height = height
      })
    },
    handleSearch(payload) {
      this.getDictTypeList(payload)
    },
    dictTypeAdd(payload) {
      ApiDictTypeAdd(payload).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
          this.visible = false
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    dictTypeUpdate(payload) {
      ApiDictTypeUpdate(payload).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
          this.visible = false
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    dictTypeDelete(id) {
      this.$confirm('确定将选择数据删除?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        ApiDictTypeDelete({ id }).then(res => {
          if (res.success) {
            this.$message.success(res.msg)
          } else {
            this.$message.error(res.msg)
          }
        })
      })
    },
    getDictTypeDetail(id) {
      ApiGetDictTypeDetail({ id }).then(res => {
        if (res.success) {
          const { dictName, dictType, remarks } = res.data
          this.form = { dictName, dictType, remarks, id }
        }
      })
    },
    getDictTypeList(payload) {
      ApiGetDictTypeList(payload).then(res => {
        if (res.success) {
          this.data = res.data
        }
      })
    }
  }
}
</script>