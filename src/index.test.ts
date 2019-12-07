import imperative from './imperative'
import { orderLines } from './mock'

describe('Test imperative way', () => {
  it('should be 25.96', () => {
    const retrieve = imperative.calculateOrderTotal(orderLines)
    expect(retrieve).toBe(25.96)

    const retrieveTwo = imperative.calculateOrderTotalReduce(orderLines)
    expect(retrieveTwo).toBe(25.96)
  })
})
