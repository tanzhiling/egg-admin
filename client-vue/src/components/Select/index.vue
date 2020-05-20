<template>
  <el-select :value="value" style="width:300px" @change="$emit('change',$event)">
    <el-option
      v-for="item in dictData"
      :key="item.dictValue"
      :value="item.dictValue"
      :label="item.dictLabel"
    />
  </el-select>
</template>
<script>
import { ApiDictFindList } from "@/api/sys/dict"
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    dictType: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dictData: []
    }
  },
  mounted() {
    this.getDict(this.dictType)
  },
  methods: {
    getDict(dictType) {
      ApiDictFindList({ dictType }).then(res => {
        if (res.success) {
          this.dictData = res.data
        }
      })
    }
  }
}
</script>