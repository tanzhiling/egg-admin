<template>
  <VCard icon="s-promotion" mode="table" :title="cardTitle">
    <template slot="extra">
      <el-button type="success" icon="el-icon-plus" @click="handleVisible(true,'新增')">新增</el-button>
    </template>
    <el-table ref="table" :data="data" border>
      <el-table-column prop="dictLabel" label="字典标签" />
      <el-table-column prop="dictValue" label="字典键值" />
      <el-table-column prop="sort" label="排序号" />
      <el-table-column prop="isSys" label="系统内置" />
      <el-table-column prop="updateDate" label="更新时间" />
      <el-table-column prop="remarks" label="备注信息" />
      <el-table-column prop="status" label="状态" width="100" />
      <el-table-column label="操作" align="center" width="200">
        <template slot-scope="{row}">
          <el-button type="text" icon="el-icon-view" size="small" @click="handleView(row)">查看</el-button>
          <el-button type="text" icon="el-icon-edit" size="small">编辑</el-button>
          <el-button type="text" icon="el-icon-delete" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹框新增/编辑 -->
    <el-dialog :title="title" :visible.sync="visible" @close="handleClose">
      <el-form ref="form" :rules="rules" :model="form" label-width="100px">
        <el-form-item label="字典标签" prop="dictLabel">
          <el-input v-model="form.dictLabel" />
        </el-form-item>
        <el-form-item label="字典键值" prop="dictValue">
          <el-input v-model="form.dictValue" />
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input v-model="form.sort" />
        </el-form-item>
        <el-form-item label="系统字典" prop="isSys">
          <el-radio-group v-model="form.isSys">
            <el-radio label="1">是</el-radio>
            <el-radio label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="form.status">
            <el-radio label="0">启用</el-radio>
            <el-radio label="2">停用</el-radio>
          </el-radio-group>
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
import { ApiDictDataAdd, ApiGetDictDataList } from "@/api/sys/dict"
export default {
  data() {
    return {
      form: {
        dictLabel: "",
        dictValue: "",
        sort: "",
        isSys: "",
        status: "",
        remarks: ""
      },
      rules: {
        dictLabel: [
          { required: true, message: '字典标签为必填项', trigger: 'blur' }
        ],
        dictValue: [
          { required: true, message: '字典键值为必填项', trigger: 'blur' }
        ],
        isSys: [
          { required: true, message: '系统字典为必填项', trigger: 'change' }
        ],
        sort: [
          { required: true, message: '排序为必填项', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '排序为必填项', trigger: 'blur' }
        ],
      },
      data: [],
      loading: false,
      visible: false,
      dictType: "",
      cardTitle: "",
      title: ""
    }
  },
  mounted() {
    const { dictName, dictType } = this.$route.query
    this.dictType = dictType
    this.cardTitle = dictName + '(' + dictType + ')'
    this.getDictDataList()
  },
  methods: {
    handleVisible(visible, title) {
      if (title) {
        this.title = title
      }
      this.visible = visible
    },
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          if (this.title === "新增") {
            this.dictDataAdd()
          }
        }
      });
    },
    handleClose() {
      this.$refs.form.resetFields()
    },
    dictDataAdd() {
      let payload = Object.assign({}, this.form, { dictType: this.dictType })
      ApiDictDataAdd(payload).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
          this.visible = false
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    getDictDataList() {
      let payload = { dictType: this.dictType }
      ApiGetDictDataList(payload).then(res => {
        if (res.success) {
          this.data = res.data
        }
      })
    }
  }
}
</script>