import { Heap } from './heap'

describe('Heapqのpushのテスト', () => {
  describe('最小ヒープのテスト', () => {
    const minHeap = new Heap()

    minHeap.push(4)
    minHeap.push(3)
    minHeap.push(14)
    minHeap.push(8)
    minHeap.push(4)
    minHeap.push(-4)
    minHeap.push(0)
    minHeap.push(-21)
    minHeap.push(14)
    minHeap.push(5)

    test('最小ヒープ条件を満たす', () => {
      expect(minHeap.isHeap()).toBeTruthy()
    })

    test('最小ヒープの根が最小値', () => {
      expect(minHeap.top()).toBe(-21)
    })
  })

  describe('最大ヒープのテスト', () => {
    const maxHeap = new Heap<number>([], (a, b) => a >= b)

    maxHeap.push(4)
    maxHeap.push(3)
    maxHeap.push(14)
    maxHeap.push(8)
    maxHeap.push(4)
    maxHeap.push(-4)
    maxHeap.push(0)
    maxHeap.push(-21)
    maxHeap.push(14)
    maxHeap.push(5)

    test('最大ヒープ条件を満たす', () => {
      expect(maxHeap.isHeap()).toBeTruthy()
    })

    test('最小ヒープの根が最小値', () => {
      expect(maxHeap.top()).toBe(14)
    })
  })
})
