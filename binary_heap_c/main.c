#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "binary_heap.h"

int heap_sort_test() {
    printf("----------------heap_sort_test-----------------------\n");
    int arr[] = {3, 4, 5, 2, 1, 8, 9, 6, 7};
    struct my_heap heap = {0};
    heap.capacity = sizeof(arr) / sizeof(arr[0]);
    heap.size = heap.capacity;
    heap.data = arr;

    heap_sort(&heap);

    for (int i = 0; i < heap.capacity; i++) {
        printf("%d ", heap.data[i]);
    }
    printf("\n");
    printf("----------------heap_sort_test-----------------------\n");
    return 0;
}

int main() {
    heap_sort_test();
    // test binary heap
    struct my_heap heap = {0};
    heap.capacity = 10;
    heap.size = 0;
    heap.data = (int *)malloc(sizeof(int) * heap.capacity);

    push(&heap, 10);
    push(&heap, 20);
    push(&heap, 30);
    push(&heap, 40);
    push(&heap, 50);

    heap_show(&heap);

    int *val;
    pop(&heap, val);
    printf("%d\n", *val);

    heap_show(&heap);

    pop(&heap, val);
    printf("%d\n", *val);

    heap_show(&heap);

    pop(&heap, val);
    printf("%d\n", *val);

    heap_show(&heap);

    pop(&heap, val);
    printf("%d\n", *val);

    heap_show(&heap);

    return 0;
}
