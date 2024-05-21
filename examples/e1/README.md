# Levenshtein distance (Iterative with full matrix & dynamic programming)
> - [The Algorithm Behind Spell Checkers](https://www.youtube.com/watch?v=d-Eq6x1yssU&t=3s)

## Introduction 
> - [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance)

In this blog, the edit distance is the core concept. Levenshtein distance is one kind of the edit distances, and supports three string-operations:
    1. Deletion
    2. Insertion
    3. Substitution
In a specific step, only one edit operation can be chosen, which means "1" edit distance. When one step has been done, the function should feed the changed string into next steps. The whole distance is an accumulation for all of the steps' distances. 



You could find more details in the wikipedia page, and we should dive into the implimation part.

## Implimation 

