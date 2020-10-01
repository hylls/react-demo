import n from 'moment'
export function getPersonCount(num, k = 1) {
  return `${(num/k/10000).toFixed(0)}万`
}

//一维数组转成二维数组
export function oneToTwoArr(num, arr) {
  const newArr = []
  for (let i = 0; i < Math.ceil(arr.length / num); i++) {
    const arrTemp = []
    for (let j = 0; j < num; j++) {
      if (arr[j + (num * i)]) {
        arrTemp.push(arr[j + (num * i)])
      }
    }
    newArr.push(arrTemp)
  }
  return newArr
}
// 把时间戳转换成 歌手时间
export function timeStapToTime(num) {
  return n(num).format('mm:ss')
}

export function numToTime(num, value) {
  if (!value || !num) {
    return '00:00'
  } else {
    return n(num*value/100).format('mm:ss')
  }
}