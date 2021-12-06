import { Heap } from './heap'

describe('Heapqのpushのテスト', () => {
  const arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]

  const minHeap = new Heap(arr)
  minHeap.push(0)

  test('最小ヒープ条件を満たす', () => {
    expect(minHeap.isHeap()).toBeTruthy()
  })

  test('最小ヒープの根が0', () => {
    expect(minHeap.top()).toBe(0)
  })
})
