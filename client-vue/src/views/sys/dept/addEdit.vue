<style lang="scss">
.select-tree {
  font-weight: normal !important;
  padding: 0;
}
</style>
<template>
  <VCard class="office-add-edit" icon="edit-outline" :title="title">
    <el-form ref="form" :rules="rules" :model="form" inline label-width="100px">
      <el-col :span="12">
        <el-form-item label="机构名称" prop="officeName">
          <el-input v-model="form.officeName" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="上级机构" prop="parentId">
          <el-select v-model="form.parentId" style="width:300px">
            <el-option
              class="select-tree"
              :value="last.officeCode"
              :label="last.officeName"
              style="height:200px;overflow:auto;background:#fff"
            >
              <el-tree :data="tree" :props="defaultProps" @node-click="handleNodeClick" />
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="机构代码" prop="officeCode">
          <el-input v-model="form.officeCode" style="width:300px" />
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
        <el-form-item label="机构类型" prop="officeType">
          <el-select v-model="form.officeType" style="width:300px">
            <el-option
              v-for="item in dictData"
              :key="item.dictValue"
              :value="item.dictValue"
              :label="item.dictLabel"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="负责人" prop="leader">
          <el-input v-model="form.leader" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="办公电话" prop="phone">
          <el-input v-model="form.phone" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="联系地址" prop="address">
          <el-input v-model="form.address" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="邮政编码" prop="zipCode">
          <el-input v-model="form.zipCode" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="form.email" style="width:300px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="form.status">
            <el-radio label="0">启用</el-radio>
            <el-radio label="2">停用</el-radio>
          </el-radio-group>
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
        <el-button @click="$router.back()">取消</el-button>
      </el-form-item>
    </el-form>
  </VCard>
</template>
<script>
import { ApiOfficeAdd, ApiOfficeUpdate, ApiGetOfficeTree, ApiGetOfficeDetail } from "@/api/sys/office"
import { ApiDictFindList } from "@/api/sys/dict"
export default {
  data() {
    return {
      last: {
        officeCode: "",
        officeName: ""
      },
      form: {
        id: "",
        officeCode: "",
        parentId: "",
        officeName: "",
        fullName: "",
        officeType: "",
        leader: "",
        phone: "",
        address: "",
        zipCode: "",
        email: "",
        status: "",
        remarks: "",
        sort: ""
      },
      title: "新增机构",
      rules: {
        officeCode: [
          { required: true, message: '机构代码为必填项', trigger: 'blur' },
        ],
        officeName: [
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
        officeType: [
          { required: true, message: '机构类型为必填项', trigger: 'change' },
        ],
      },
      tree: [],
      dictData: [],
      defaultProps: {
        children: 'children',
        label: 'officeName'
      },
      loading: false,
    }
  },
  mounted() {
    const { id } = this.$route.query
    if (id) {
      this.title = "编辑机构"
      this.getDetail(id)
    }
    this.getTree()
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
          if (this.form.id) {
            this.update()
          } else {
            this.add()
          }
        }
      });
    },
    add() {
      ApiOfficeAdd(this.form).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    update() {
      ApiOfficeUpdate(this.form).then(res => {
        this.loading = false
        if (res.success) {
          this.$message.success(res.msg)
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    getTree() {
      ApiGetOfficeTree().then(res => {
        if (res.success) {
          this.tree = res.data
        }
      })
    },
    getDetail(id) {
      ApiGetOfficeDetail({ id }).then(res => {
        if (res.success) {
          const { officeCode, parentId, sort, officeName, fullName, officeType, leader, phone, address, zipCode, email, status, remarks } = res.data
          this.form = { id, officeCode, parentId, sort, officeName, fullName, officeType, leader, phone, address, zipCode, email, status, remarks }
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
    }
  }
}
</script>