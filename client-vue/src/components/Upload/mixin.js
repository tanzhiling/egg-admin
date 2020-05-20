import { getCookie } from '@/utils/cookie'
export default {
  data() {
    return {
      headers: {
        Authorization: 'Basic c3dvcmQ6c3dvcmRfc2VjcmV0',
        'blade-auth': getCookie('token'),
      },
    }
  },
}
