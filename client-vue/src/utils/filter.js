export const deptTypeFilter = (value) => {
  if (value === '1') {
    return '省级公司'
  } else if (value === '2') {
    return '市级公司'
  } else if (value === '3') {
    return '部门'
  } else {
    return ''
  }
}
