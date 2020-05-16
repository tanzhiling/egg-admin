<template>
  <VCard icon="edit-outline" :title="title">
    <el-form ref="form" :rules="rules" :model="form" inline label-width="100px">
      <el-col :span="12">
        <el-form-item label="机构名称" prop="deptName">
          <el-input v-model="form.deptName" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="上级机构" prop="parentId">
          <el-select v-model="form.parentId" style="width:300px">
            <el-option
              class="select-tree"
              :value="last.deptCode"
              :label="last.deptName"
              style="height:200px;overflow:auto;background:#fff"
            >
              <el-tree :data="tree" :props="defaultProps" @node-click="handleNodeClick" />
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="机构编码" prop="deptCode">
          <el-input v-model="form.deptCode" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="机构全称" prop="fullName">
          <el-input v-model="form.fullName" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="排序号" prop="sort">
          <el-input v-model="form.sort" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="机构类型" prop="deptCategory">
          <el-select v-model="form.deptCategory" style="width:300px">
            <el-option
              v-for="item in dictData"
              :key="item.dictValue"
              :value="item.dictValue"
              :label="item.dictLabel"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="备注" prop="remarks">
          <el-input
            v-model="form.remarks"
            style="width:500px"
            :autosize="{ minRows: 3, maxRows: 6}"
            type="textarea"
          />
        </el-form-item>
      </el-col>
      <el-form-item label=" ">
        <el-button :loading="loading" type="primary" icon="el-icon-check" @click="handleSubmit">保存</el-button>
        <el-button @click="handleCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </VCard>
</template>
<script>
import { ApiDeptAdd, ApiDeptUpdate } from "@/api/sys/dept"
import { ApiDictFindList } from "@/api/sys/dict"
export default {
  props: {
    view: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      last: {
        deptCode: "",
        deptName: ""
      },
      form: {
        deptCode: "",
        deptName: "",
        parentId: "",
        fullName: "",
        deptCategory: "",
        status: "",
        remarks: "",
        sort: ""
      },
      rules: {
        deptCode: [
          { required: true, message: '机构代码为必填项', trigger: 'blur' },
        ],
        deptName: [
          { required: true, message: '机构名称为必填项', trigger: 'blur' },
        ],
        fullName: [
          { required: true, message: '机构全称为必填项', trigger: 'blur' },
        ],
        sort: [
          { required: true, message: '排序为必填项', trigger: 'blur' },
        ],
        status: [
          { required: true, message: '状态为必填项', trigger: 'blur' },
        ],
        deptCategory: [
          { required: true, message: '机构类型为必填项', trigger: 'change' },
        ],
      },
      tree: [],
      dictData: [],
      defaultProps: {
        children: 'children',
        label: 'deptName'
      },
      loading: false,
    }
  },
  computed: {
    title: function () {
      return this.view === "add" ? "新增机构" : this.view === "edit" ? "编辑机构" : "查看机构"
    }
  },
  mounted() {
    this.getDictList()
  },
  methods: {
    handleNodeClick(data) {
      this.last = data
      this.form.parentId = data.officeCode
    },
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          if (this.view === 'edit') {
            this.update()
          } else if (this.view === 'add') {
            this.add()
          }
        }
      });
    },
    handleCancel() {
      this.$emit("on-view", 'index')
    },
    add() {
      ApiDeptAdd(this.form).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    update() {
      ApiDeptUpdate(this.form).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    getDictList() {
      ApiDictFindList({ dictType: "sys_office_type" }).then(res => {
        if (res.success) {
          this.dictData = res.data
        }
      })
    },
  }
}
</script>