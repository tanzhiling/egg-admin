import { getStorage } from '@/utils/storage'
// 通用属性
const getters = {
  userInfo: () => getStorage('userInfo') ? getStorage('userInfo') : ''
}
export default getters
