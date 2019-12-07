import imperative from './imperative'
import monoid from './monoid'
import { IOrderLine, orderLines } from './mock'

const emptyOrderLine: IOrderLine = {
  productCode: '',
  qty: 0,
  total: 0
}

describe('Test imperative way', () => {
  it('should be 25.96', () => {
    const retrieve = imperative.calculateOrderTotal(orderLines)
    expect(retrieve).toBe(25.96)

    const retrieveTwo = imperative.calculateOrderTotalReduce(orderLines)
    expect(retrieveTwo).toBe(25.96)
  })
})

describe('Test monoid way', () => {
  it('should test orderLine unit', () => {
    const [orderLine1, orderLine2] = orderLines
    const retrieve = monoid.addLineSemi(orderLine1, orderLine2)
    expect(retrieve.qty).toBe(3)
    expect(retrieve.total).toBe(21.97)
    expect(retrieve.productCode).toBe('TOTAL')
  })

  it('should reduce orderLines', () => {
    const { productCode, qty, total } = orderLines.reduce(
      monoid.addLineSemi,
      emptyOrderLine
    )
    expect(productCode).toBe('TOTAL')
    expect(qty).toBe(6)
    expect(total).toBe(25.96)
  })

  it('should compose orderLines', () => {
    const subTotal = orderLines.reduce(monoid.addLineSemi, emptyOrderLine)

    const newLine: IOrderLine = { productCode: 'DDD', qty: 1, total: 29.98 }
    const { productCode, qty, total } = monoid.addLineSemi(newLine, subTotal)

    expect(productCode).toBe('TOTAL')
    expect(qty).toBe(7)
    expect(total).toBe(55.94)
  })

  // it('should test', () => {
  //   const [orderLine] = orderLines
  //   const retrieve = monoid.addLine(undefined, undefined)
  // })
})
