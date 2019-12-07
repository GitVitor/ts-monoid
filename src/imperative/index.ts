import { IOrderLine } from '../mock'

function calculateOrderTotal(lines: IOrderLine[]) {
  let total = 0
  for (const orderLine of lines) {
    total += orderLine.total
  }
  return total
}

function calculateOrderTotalReduce(lines: IOrderLine[]) {
  return lines.reduce((acc, cur) => (acc += cur.total), 0)
}

export default {
  calculateOrderTotal,
  calculateOrderTotalReduce
}
