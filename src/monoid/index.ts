import { add } from 'ramda'
import { IOrderLine } from '../mock'

const addLineSemi: ISemiGroup<IOrderLine> = (orderLine1, orderLine2) => ({
  productCode: 'TOTAL',
  qty: add(orderLine1.qty, orderLine2.qty),
  total: add(orderLine1.total, orderLine2.total)
})

const addLine: ISemiGroup<IOrderLine> = (orderLine1, orderLine2) => ({
  productCode: 'TOTAL',
  qty: add(orderLine1.qty, orderLine2.qty),
  total: add(orderLine1.total, orderLine2.total)
})

export default {
  addLineSemi,
  addLine
}

type ISemiGroup<T> = (j: T, k: T) => T
