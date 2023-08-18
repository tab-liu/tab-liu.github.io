#ifndef __MY_HEAP_H__
#define __MY_HEAP_H__

#include <stdbool.h>

struct my_heap {
    int *data;
    int size;
    int capacity;
};

void heapify(struct my_heap *heap);
bool push(struct my_heap *heap, int val);
bool pop(struct my_heap *heap, int *val);
bool peek(struct my_heap *heap, int *val);
void heap_show(struct my_heap *heap);
void heap_sort(struct my_heap *heap);

#endif /* __MY_HEAP_H__ */
