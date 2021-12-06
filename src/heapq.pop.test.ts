import { Heap } from './heap'

describe('Heapqのpushのテスト', () => {
  describe('最小ヒープのテスト', () => {
    const arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]
    const minHeap = new Heap(arr)

    while (!minHeap.isEmpty()) {
      minHeap.pop()

      test('最小ヒープ条件を満たす', () => {
        expect(minHeap.isHeap()).toBeTruthy()
      })
    }
  })

  describe('最大ヒープのテスト', () => {
    const arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]
    const maxHeap = new Heap<number>(arr, (a, b) => a >= b)

    while (!maxHeap.isEmpty()) {
      maxHeap.pop()

      test('最大ヒープ条件を満たす', () => {
        expect(maxHeap.isHeap()).toBeTruthy()
      })
    }
  })
})
