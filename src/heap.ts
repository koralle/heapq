export class Heap<T = number> {
  protected _heap: T[]
  private _cmp: Heap.ComparisonFunctionType<T>

  constructor(seq: T[] = [], cmp: Heap.ComparisonFunctionType<T> = (a, b) => a <= b) {
    this._heap = seq
    this._cmp = cmp
    this._build()
  }

  isEmpty = () => this.length() === 0
  top = () => (this.isEmpty() ? null : this._heap[0])
  length = () => this._heap.length

  // ヒープ条件を満たすかどうかのチェック
  isHeap = () => this._heap.every((_, index) => this._cmp(this._heap[this._parent(index)], this._heap[index]))

  private _swap = (index: number) => {
    if (index === 0) return

    if (!this._cmp(this._heap[this._parent(index)], this._heap[index])) {
      ;[this._heap[this._parent(index)], this._heap[index]] = [this._heap[index], this._heap[this._parent(index)]]
    }

    this._swap(this._parent(index))
  }

  // ヒープ内のある要素の親要素
  private _parent = (index: number) => (index > 0 ? Math.floor((index - 1) / 2) : 0)

  // ヒープ内のある要素の左の子
  private _left = (index: number) => (2 * index + 1 < this.length() ? 2 * index + 1 : null)

  // ヒープ内のある要素の右の子
  private _right = (index: number) => (2 * index + 2 < this.length() ? 2 * index + 2 : null)

  private _build = () => {
    for (let index = Math.floor(this.length() / 2); index >= 0; index--) {
      this._heapfy(index)
    }
  }

  protected _heapfy(index: number) {
    const left = this._left(index)
    const right = this._right(index)

    let smallest = index

    if (left !== null) {
      if (this._cmp(this._heap[left], this._heap[index])) {
        smallest = left
      }
    }

    if (right !== null) {
      if (this._cmp(this._heap[right], this._heap[smallest])) {
        smallest = right
      }
    }

    if (smallest !== index) {
      ;[this._heap[index], this._heap[smallest]] = [this._heap[smallest], this._heap[index]]
      this._heapfy(smallest)
    }
  }

  pop = (): T | undefined => {
    if (this.length() < 1) return undefined

    const popped = this._heap[0]
    this._heap = this._heap.slice(1)
    this._heapfy(0)
    return popped
  }

  push = (item: T) => {
    this._heap = [...this._heap, item]

    this._swap(this.length() - 1)
  }
}

export namespace Heap {
  export type ComparisonFunctionType<T> = (a: T, b: T) => boolean
}
