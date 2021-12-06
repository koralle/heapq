import { Heap } from './heap'

//const arr = [-4, -1, -3, -2, -16, -9, -10, -14, -8, -7]
const arr = new Array(100).fill(-5)

const heap = new Heap(arr)

console.log(heap)
console.log(heap.isHeap())
