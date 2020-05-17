import { ApiDictFindList } from "@/api/sys/dict"
export default {
  data(){
    return{
      dictData:[]
    }
  },
  methods:{
    getDict(dictType){
      ApiDictFindList({ dictType }).then(res => {
        if (res.success) {
          this.dictData = res.data
        }
      })
    }
  }
}