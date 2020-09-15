export function getPersonCount(num, k = 1) {
  return `${(num/k/10000).toFixed(0)}万`
}