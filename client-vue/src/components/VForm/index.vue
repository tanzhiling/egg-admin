<template>
  <el-form ref="form" :model="model" :label-width="labelWidth+'px'" :inline="inline">
    <template v-for="(item,index) in data">
      <el-form-item :key="index" :label="item.label" :prop="item.field" :rules="item.rules">
        <el-input
          v-if="item.component==='Input'"
          v-model="model[item.field]"
          clearable
          :type="item.type || 'text'"
          :style="{'width':item.width?item.width:contentWidth+'px'}"
        />
        <el-select
          v-else-if="item.component==='Select'"
          v-model="model[item.field]"
          clearable
          :style="{'width':item.width?item.width:contentWidth+'px'}"
        >
          <el-option
            v-for="(select,selectIndex) in item.options"
            :key="selectIndex"
            :value="select.value"
          >{{ select.label }}</el-option>
        </el-select>
      </el-form-item>
    </template>
    <el-form-item v-if="data.length>0" label=" ">
      <el-button
        :loading="loading"
        :icon="okText==='查询'?'el-icon-search':''"
        type="primary"
        @click="handleOk"
      >{{ okText }}</el-button>
      <el-button v-if="cancelText" class="margin-left-10" @click="handleCancel">{{ cancelText }}</el-button>
      <el-button v-else icon="el-icon-refresh" class="margin-left-10" @click="handleReset">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "VForm",
  props: {
    model: {
      type: Object,
      default: () => { }
    },
    data: {
      type: Array,
      default: () => []
    },
    inline: {
      type: Boolean,
      default: true
    },
    labelWidth: {
      type: Number,
      default: 100
    },
    contentWidth: {
      type: Number,
      default: 200
    },
    okText: {
      type: String,
      default: "查询"
    },
    cancelText: {
      type: String,
      default: ""
    },
    loading: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    // 查询
    handleOk() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('on-ok', this.model)
        } else {
          this.$message.error('请输入必填项!');
        }
      })
    },
    //重置
    handleReset() {
      this.$refs.form.resetFields();
    },
    handleCancel() {
      this.$emit("on-cancel", true)
    },
  }
}
</script>
