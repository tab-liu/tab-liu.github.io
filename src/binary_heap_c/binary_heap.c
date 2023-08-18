#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "binary_heap.h"

#define swap(a, b) \
    ({             \
        int c;     \
        c = a;     \
        a = b;     \
        b = c;     \
    })

static void shift_up(struct my_heap *heap, int index) {
    while (index > 0 && heap->data[index] > heap->data[(index - 1) / 2]) {
        swap(heap->data[index], heap->data[(index - 1) / 2]);
        index = (index - 1) / 2;
    }
    return;
}

static void shift_down(struct my_heap *heap, int index) {
    int largest = index;
    int left = 2 * index + 1;
    int right = 2 * index + 2;

    if (left < heap->size && heap->data[left] > heap->data[largest]) {
        largest = left;
    }
    if (right < heap->size && heap->data[right] > heap->data[largest]) {
        largest = right;
    }
    if (largest != index) {
        swap(heap->data[index], heap->data[largest]);
        shift_down(heap, largest);
    }
}

void heapify(struct my_heap *heap) {
    for (int i = heap->size / 2 - 1; i >= 0; i--) {
        shift_down(heap, i);
    }
    return;
}

void heap_sort(struct my_heap *heap) {
    heapify(heap);
    for (int i = heap->size - 1; i > 0; i--) {
        swap(heap->data[i], heap->data[0]);
        heap->size--;
        shift_down(heap, 0);
    }
}

bool push(struct my_heap *heap, int val) {
    if (heap->size == heap->capacity) {
        return false;
    }
    heap->data[heap->size] = val;
    heap->size++;
    shift_up(heap, heap->size - 1);
    return true;
}

bool pop(struct my_heap *heap, int *val) {
    if (heap->size == 0) {
        return false;
    }
    *val = heap->data[0];
    heap->data[0] = heap->data[heap->size - 1];
    heap->size--;
    shift_down(heap, 0);
    return true;
}

bool peek(struct my_heap *heap, int *val) {
    if (heap->size > 0) {
        *val = heap->data[0];
        return true;
    }
    return false;
}

void heap_show(struct my_heap *heap) {
    printf("capacity: %d, size: %d\n[", heap->capacity, heap->size);
    for (int i = 0; i < heap->size; i++) {
        printf("%d, ", heap->data[i]);
    }
    printf("]\n");
}
