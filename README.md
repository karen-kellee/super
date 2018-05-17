# [Super](https://www.npmjs.com/package/@clarketm/super)

**Data Structures** with superpowers! 💪😎

> <sub>implemented in **JavaScript**.</sub>

[![hero](https://github.com/clarketm/super/blob/master/resources/hero.png)](https://github.com/clarketm/super)

> _"The data structures in JavaScript that you wish you had!"_ - Mark Twain

## Installation

### Yarn

```bash
$ yarn add @clarketm/super
```

### Npm

```bash
$ npm install @clarketm/super --save
```

## Usage

```js
// 1. import `each` module `independently`
import { Array, Map, Queue, Trie, ... } from "@clarketm/super";

let array = new Array([1, 2]);
...

// 2. import `all` modules under a `namespace`
import Super from "@clarketm/super";

let array = new Super.Array([1, 2]);
...
```

## Data Structures

### [Array](https://github.com/clarketm/super/tree/master/packages/Array#readme)

```js
import { Array } from "@clarketm/super";

let array = new Array([0, 1, 2, 3]); // [0, 1, 2, 3]

// Use any built-in Array methods:
array.push(4); // [0, 1, 2, 3, 4]

// Use custom methods (e.g. `flatten`):
let array = new Array([[[1]], [[2]], [[3]]]);
array.flatten(2); // [1, 2, 3]
```

<br>

### [BinaryTree](https://github.com/clarketm/super/tree/master/packages/BinaryTree#readme)

```js
import { BinaryTree } from "@clarketm/super";

let tree = new BinaryTree([5, 3, 7, 2, 8, 4, 6, 1]);

//              5  -> root
//            /   \
//           3     7
//         /  \   /  \
//        2   4  6    8
//       /
//      1

tree.root; // BinaryTreeNode { _value: 5, ... }
tree.height; // 1

tree.insert(9);

//              5  -> root
//            /   \
//           3     7
//         /  \   /  \
//        2   4  6    8
//       /             \
//      1               9  -> node inserted
//

tree.search(3); // BinaryTreeNode { _value: 3, ... }

tree.remove(9);

//              5  -> root
//            /   \
//           3     7
//         /  \   /  \
//        2   4  6    8
//       /
//      1                -> node removed
//
```

<br>

### [LinkedList](https://github.com/clarketm/super/tree/master/packages/LinkedList#readme)

```js
import { LinkedList } from "@clarketm/super";

let list = new LinkedList([1, 3, 5, 7]);

//    1    <->    3    <->    5    <->    7

list.size; // 4
list.head; // ListNode { _value: 1, ... }
list.tail; // ListNode { _value: 7, ... }

list.insert(1, 100);

//         node inserted at pos: 1
//                 ^
//    1    <->    100    <->    3    <->    5    <->    7

list.append(99);

//                                                          node inserted at tail
//                                                                   ^
//    1    <->    100    <->    3    <->    5    <->    7    <->    99

list.remove(-1);

//                                                          node removed from tail
//                                                                   ^
//    1    <->    100    <->    3    <->    5    <->    7

list.toArray(); // [ 1, 100, 3, 5, 7 ]
```

<br>

### [Map](https://github.com/clarketm/super/tree/master/packages/Map#readme)

```js
import { Map } from "@clarketm/super";

let map = new Map([["a", 1], ["b", 2], ["c", 3]]); // Map { 'a' => 1, 'b' => 2, 'c' => 3 }

// Use any built-in Map methods:
map.get("c"); // 3

// Use custom methods (e.g. `setDefault`):
// note: `setDefault` is similar to get(), but will set key to a defaultValue if the key is not in Map.

let item = map.setDefault("c", 3);
item; // 3
map; // Map { 'a' => 1, 'b' => 2, 'c' => 3 }

let item = map.setDefault("d", 4);
item; // 4
map; // Map { 'a' => 1, 'b' => 2, 'c' => 3 'd' => 4 }
```

<br>

### [Object](https://github.com/clarketm/super/tree/master/packages/Object#readme)

```js
import { Object } from "@clarketm/super";

let object = new Object({ a: 1, b: true, c: 4 }); // Object { a: 1, b: true, c: 4 }

// Use any built-in Object methods:
Object.keys(object); // [ 'a', 'b', 'c' ]

// Use custom methods (e.g. `clone`):
// note: `clone` will create a deep copy of the object.

let clone = object.clone(); // Object { a: 1, b: true, c: 4 }
Object.is(object, clone); // false
```

<br>

### [PriorityQueue](https://github.com/clarketm/super/tree/master/packages/PriorityQueue#readme)

```js
import { PriorityQueue } from "@clarketm/super";

// note: a PriorityQueue can be constructed from either a Map, Array of Arrays, Array of Objects, or Array w/ custom comparator.

// Map
let pq = new PriorityQueue(new Map([[100, "high"], [0, "low"]]));

// Array of Arrays
let pq = new PriorityQueue([[100, "high"], [0, "low"]]);

// Array of Objects
let pq = new PriorityQueue([{value: "high", priority: 100}, {value: "low", priority: 0}]);

// Array w/ custom comparator
let pq = new PriorityQueue(["high", "low"], (a, b) => a.length > b.length);


let pq = new PriorityQueue([[100, "high"], [50, "medium"], [0, "low"]]);

//    highest priority              lowest priority
//          ^                             ^
//   |    "high"    |   "medium"   |    "low"    |
//   |    (100)     |     (50)     |     (0)     |
//

pq.size;      // 3
pq.high;      // QueueNode { _value: 'super high', _priority: 1000, ... }
pq.low;       // QueueNode { _value: 'low', _priority: 0, ... }

pq.isEmpty(); // false

pq.insert("super high", 1000);  // 4 : new size

//       highest priority                                lowest priority
//             ^                                               ^
//   |    "super high"    |    "high"    |   "medium"   |    "low"    |
//   |       (1000)       |    (100)     |     (50)     |     (0)     |
//

pq.deleteHigh();  // QueueNode { _value: 'super high', _priority: 1000, ... }

//   highest priority               lowest priority
//          ^                             ^
//   |    "high"    |   "medium"   |    "low"    |
//   |    (100)     |     (50)     |     (0)     |
//

pq.deleteLow();   // QueueNode { _value: 'low', _priority: 0, ... }

//  highest priority   lowest priority
//          ^               ^
//   |    "high"    |   "medium"   |
//   |    (100)     |     (50)     |
//

pq.clear();
pq.size; // 0
```

<br>

### [Queue](https://github.com/clarketm/super/tree/master/packages/Queue#readme)

```js
import { Queue } from "@clarketm/super";

let queue = new Queue([2, 4, 6, 8]);

//   front              rear
//     ^                 ^
//  |  2  |  4  |  6  |  8  |

queue.size; // 4
queue.front; // 2
queue.rear; // 8

queue.isEmpty(); // false

queue.enqueue(10); // 5 : new size

//   front                   rear
//     ^                      ^
//  |  2  |  4  |  6  |  8  | 10 |

queue.dequeue(); // 2  : dequeued item

//   front              rear
//     ^                 ^
//  |  4  |  6  |  8  | 10 |

queue.clear();
queue.size; // 0
```

<br>

### [Set](https://github.com/clarketm/super/tree/master/packages/Set#readme)

```js
import { Set } from "@clarketm/super";

let setA = new Set([1, 2, 3]); // Set { 1, 2, 3 }
let setB = new Set([2, 3, 4]); // Set { 2, 3, 4 }

// Use any built-in Set methods:
setA.has(1); // true

// Use custom methods:

// `isSubset`
setA.isSubset(setB); // false

// `isSuperset`
setA.isSuperset(setB); // false

// `union`
setA.union(setB); // Set { 1, 2, 3, 4 }

// `intersection`
setA.intersection(setB); // Set { 2, 3 }

// `difference`
setA.difference(setB); // Set { 1 }

// `symmetricDifference`
setA.symmetricDifference(setB); // Set { 1, 4 }
```

<br>

### [Trie](https://github.com/clarketm/super/tree/master/packages/Trie#readme)

```js
import { Trie } from "@clarketm/super";

let trie = new Trie(["me", "men", "go"]);

//               root
//              /   \
//            'm'    'g'
//           /         \
//    $ <- 'e'         'o' -> $
//         /
//  $ <- 'n'
//
// $: denotes a complete word
//

trie.root; // TrieNode { _char: √, ... }

trie.insert("met");

//               root
//              /   \
//            'm'    'g'
//           /         \
//    $ <- 'e'         'o' -> $
//         /  \
//  $ <- 'n'   't' -> $
//
// $: denotes a complete word
//

// `word` search w/ `contains`
trie.contains("me"); // true

// `prefix` search w/ `startsWith`
trie.startsWith("m"); // true

// Return a full Match object w/ `search`
trie.search("men");

// Match object
// {
//  query: 'men',
//  matchedChars: 3,
//  isMatch: true,
//  isCompleteWord: true,
//  node: TrieNode { ... }
// }

trie.remove("go");

//               root
//              /
//            'm'
//           /
//    $ <- 'e'
//         /  \
//  $ <- 'n'   't' -> $
//
// $: denotes a complete word
//
```

<br>

## Data Types

* [Number](https://github.com/clarketm/super/tree/master/packages/Number#readme)
* [Math](https://github.com/clarketm/super/tree/master/packages/Math#readme)
* [String](https://github.com/clarketm/super/tree/master/packages/String#readme)

## Credits

* Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
