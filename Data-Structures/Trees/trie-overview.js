/*

TRIEs OVERVIEW

- A trie is a special tree usually used for searching text

- Note a trie is NOT a binary tree

- Each node in a trie is typically a letter

- The entire parent-child relationship of several nodes may form a word

- This allows one to quickly do lookups and establish whether a word exists in a body of text because you can just traverse down the trie as long as you find matching letters but terminate when you can no longer find a child node with a matching letter

- Tries can usually outperform BSTs, hash tables and most other data structures when it comes to textual searches

- The Big-O of a trie is O(length of word)

*/