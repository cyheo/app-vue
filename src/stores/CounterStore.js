import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    actions: {
        increaseCounter() {
            this.count++;
        },
        decreaseCounter() {
            this.count--;
        }
    },
    getters: {
        countStatus: (state) => {
            if ( state.count === 0 ) {
                return 'Out of stock';
            } else if ( state.count < 5 ) {
                return 'Low Stock';
            } else {
                return 'In Stock';
            }
        },
    },
});