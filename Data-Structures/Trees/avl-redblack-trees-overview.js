/*

AVL AND RED-BLACK TREES OVERVIEW

- In practice, we would usually use an AVL or a red-black tree

- This is because a normal binary search tree does not re-balance itself. This is problematic because if the tree becomes too unbalanced, operations may no longer run in O(log N) time

- The two most popular variations of BSTs to ensure the tree remains balanced are AVL trees and red-black trees

- Essentially the underlying concept between these two variations is that if it is detected the tree has become unbalanced, either through an insertion or a deletion, then a rotation occurs which re-balances the tree

*/