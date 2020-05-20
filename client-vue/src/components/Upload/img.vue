<template>
  <el-upload
    class="upload"
    :action="action"
    :headers="headers"
    :disabled="disabled"
    :file-list="fileList"
    accept=".jpg, .jpeg, .png, .gif"
    :show-file-list="false"
    :on-success="handleSuccess"
    :before-upload="handleBeforeUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template> 
<script>
import Mixin from "./mixin"
export default {
  mixins: [Mixin],
  props: {
    action: {
      type: String,
      default: ""
    },
    fileList: {
      type: Array,
      default: () => []
    },
    defaultImg: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      imageUrl: ''
    };
  },
  watch: {
    defaultImg(value) {
      if (value) {
        this.imageUrl = this.$IMAGE_DOMAIN + value
      }
    },
    disabled(value) {
      console.log(value)
    }
  },
  methods: {
    handleSuccess(res, file) {
      if (res.success) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.$emit('on-change', res.data)
      }
    },
    handleBeforeUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>
<style>
.upload .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.upload .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>