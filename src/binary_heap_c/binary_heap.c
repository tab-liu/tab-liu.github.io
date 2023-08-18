#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include <binary_heap.h>

#define swap(a, b) \
    ({             \
        int c;     \
        c = a;     \
        a = b;     \
        b = c;     \
    })

static void shift_up(struct my_heap *heap, int index) {
    int parent_idx = (index - 1) / 2;
    while (index > 0 && heap->data[index] > heap->data[parent_idx]) {
        swap(heap->data[index], heap->data[parent_idx]);
        index = parent_idx;
        parent_idx = (index - 1) / 2;
    }
    return;
}

static void shift_up1(struct my_heap *heap, int index) {
    int parent;
    for (int i = index; i > 0; i--) {
        parent = (i - 1) / 2;
        if (heap->data[i] <= heap->data[parent]) {
            return;
        }
        swap(heap->data[i], heap->data[parent]);
        i = parent;
    }
    return;
}

static void shift_down(struct my_heap *heap, int index) {
    int left, right;
    int tmp = index;
    while (left < heap->size) {
        left = 2 * index + 1;
        right = 2 * index + 2;
        if (heap->data[left] > heap->data[index]) {
            tmp = left;
        }
        if (right < heap->size && heap->data[right] > heap->data[tmp]) {
            tmp = right;
        }
        if (tmp == index) {
            break;
        }
        swap(heap->data[index], heap->data[tmp]);
        index = tmp;
    }
}

static void shift_down1(struct my_heap *heap, int index) {
    int left, right, tmp;
    for (int i = index; 2 * i + 1 < heap->size; i++) {
        tmp = i;
        left = 2 * i + 1;
        right = 2 * i + 2;

        if (heap->data[left] > heap->data[i]) {
            tmp = left;
        }
        if (right < heap->size && heap->data[right] > heap->data[i]) {
            tmp = right;
        }
        if (tmp == i) {
            break;
        }
        swap(heap->data[i], heap->data[tmp]);
        i = tmp;
    }
    return;
}

struct my_heap *heap_new(int cap) {
    struct my_heap *heap = malloc(sizeof(struct my_heap));
    heap->data = malloc(sizeof(int) * cap);
    heap->capacity = cap;
    heap->size = 0;
    return heap;
}

void heapify(struct my_heap *heap) {
    for (int i = heap->size / 2 - 1; i >= 0; i--) {
        shift_down(heap, i);
    }
    return;
}

bool push(struct my_heap *heap, int val) {
    return true;
}

bool pop(struct my_heap *heap, int *val) {
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
