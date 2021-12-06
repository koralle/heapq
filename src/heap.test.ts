import { Heap } from './heap'

describe('最小ヒープが正常に動作する', () => {
  describe('要素が全て自然数', () => {
    const arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]
    const min = Math.min(...arr)
    const minHeap = new Heap(arr)

    test('ヒープ条件を満たしている', () => {
      expect(minHeap.isHeap()).toBeTruthy()
    })

    test('ヒープの根が最小値になっている', () => {
      expect(minHeap.top()).toBe(min)
    })
  })

  describe('要素が全て負の数', () => {
    const arr = [-4, -1, -3, -2, -16, -9, -10, -14, -8, -7]
    const min = Math.min(...arr)
    const minHeap = new Heap(arr)

    test('ヒープ条件を満たしている', () => {
      expect(minHeap.isHeap()).toBeTruthy()
    })

    test('ヒープの根が最小値になっている', () => {
      expect(minHeap.top()).toBe(min)
    })
  })

  describe('要素が自然数と0', () => {
    const arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7, 0]
    const min = Math.min(...arr)
    const minHeap = new Heap(arr)

    test('ヒープ条件を満たしている', () => {
      expect(minHeap.isHeap()).toBeTruthy()
    })

    test('ヒープの根が最小値になっている', () => {
      expect(minHeap.top()).toBe(min)
    })
  })

  describe('要素が負の数と0', () => {
    const arr = [-4, -1, -3, -2, -16, -9, -10, -14, -8, -7, 0]
    const min = Math.min(...arr)
    const minHeap = new Heap(arr)

    test('ヒープ条件を満たしている', () => {
      expect(minHeap.isHeap()).toBeTruthy()
    })

    test('ヒープの根が最小値になっている', () => {
      expect(minHeap.top()).toBe(min)
    })
  })

  describe('要素が自然数、0、負の数', () => {
    const arr = [4, 1, 3, -2, 16, -9, 10, -14, 8, -7, 0]
    const min = Math.min(...arr)
    const minHeap = new Heap(arr)

    test('ヒープ条件を満たしている', () => {
      expect(minHeap.isHeap()).toBeTruthy()
    })

    test('ヒープの根が最小値になっている', () => {
      expect(minHeap.top()).toBe(min)
    })
  })
})

describe('最大ヒープが正常に動作する', () => {
  describe('要素が全て自然数', () => {
    const arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]
    const max = Math.max(...arr)

    const maxHeap = new Heap(arr, (a, b) => a >= b)

    test('ヒープ条件を満たしている', () => {
      expect(maxHeap.isHeap()).toBeTruthy()
    })

    test('ヒープの根が最大値になっている', () => {
      expect(maxHeap.top()).toBe(max)
    })
  })

  describe('要素が全て負の数', () => {
    const arr = [-4, -1, -3, -2, -16, -9, -10, -14, -8, -7]
    const max = Math.max(...arr)

    const maxHeap = new Heap(arr, (a, b) => a >= b)

    test('ヒープ条件を満たしている', () => {
      expect(maxHeap.isHeap()).toBeTruthy()
    })

    test('ヒープの根が最大値になっている', () => {
      expect(maxHeap.top()).toBe(max)
    })
  })

  describe('要素が自然数と0', () => {
    const arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7, 0]
    const max = Math.max(...arr)
    const maxHeap = new Heap(arr, (a, b) => a >= b)

    test('ヒープ条件を満たしている', () => {
      expect(maxHeap.isHeap()).toBeTruthy()
    })

    test('ヒープの根が最大値になっている', () => {
      expect(maxHeap.top()).toBe(max)
    })
  })

  describe('要素が負の数と0', () => {
    const arr = [-4, -1, -3, -2, -16, -9, -10, -14, -8, -7, 0]
    const max = Math.max(...arr)
    const maxHeap = new Heap(arr, (a, b) => a >= b)

    test('ヒープ条件を満たしている', () => {
      expect(maxHeap.isHeap()).toBeTruthy()
    })

    test('ヒープの根が最大値になっている', () => {
      expect(maxHeap.top()).toBe(max)
    })
  })

  describe('要素が自然数、0、負の数', () => {
    const arr = [4, 1, 3, -2, 16, -9, 10, -14, 8, -7, 0]
    const max = Math.max(...arr)
    const maxHeap = new Heap(arr, (a, b) => a >= b)

    test('ヒープ条件を満たしている', () => {
      expect(maxHeap.isHeap()).toBeTruthy()
    })

    test('ヒープの根が最大値になっている', () => {
      expect(maxHeap.top()).toBe(max)
    })
  })
})

describe('配列の全部の値が同じ場合', () => {
  describe('配列の要素が全て自然数', () => {
    const arr = new Array(100).fill(5)
    const minHeap = new Heap(arr)

    test('最小ヒープ条件を満たしている', () => {
      expect(minHeap.isHeap()).toBeTruthy()
    })
  })

  describe('配列の要素が全て0', () => {
    const arr = new Array(100).fill(0)
    const minHeap = new Heap(arr)

    test('最小ヒープ条件を満たしている', () => {
      expect(minHeap.isHeap()).toBeTruthy()
    })
  })

  describe('配列の要素が全て負の値', () => {
    const arr = new Array(10).fill(-5)
    const minHeap = new Heap(arr)

    test('最小ヒープ条件を満たしている', () => {
      expect(minHeap.isHeap()).toBeTruthy()
    })
  })
})
