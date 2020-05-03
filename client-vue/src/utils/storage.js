// 数据存储 需在client 环境调用

export const setStorage = (key, data, session) => {
  let content = {
    // dataType: typeof data,
    data: data,
    session: session,
  }
  if (session) {
    window.sessionStorage.setItem(key, JSON.stringify(content))
  } else {
    window.localStorage.setItem(key, JSON.stringify(content))
  }
}

// 获取
export const getStorage = (key, session) => {
  let content = {}
  let contentStr = ''
  if (session) {
    contentStr = window.sessionStorage.getItem(key)
  } else {
    contentStr = window.localStorage.getItem(key)
  }
  if (!contentStr) return
  content = JSON.parse(contentStr)
  return content.data
}

// 清空指定字段存储
export const removeStorage = (key, session) => {
  if (session) {
    window.sessionStorage.removeItem(key)
  } else {
    window.localStorage.removeItem(key)
  }
}

// 清空所有存储
export const clearStorage = (session) => {
  if (session) {
    window.sessionStorage.clear()
  } else {
    window.localStorage.clear()
  }
}
