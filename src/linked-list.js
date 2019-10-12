const Node = require('./node');

class LinkedList {
    constructor() {
        this.arrList = [],
        this.length = 0;
        this.head
        this.tail
    }

    append(data) {
        this.head
        this.arrList.push(data)
    }

    head() {
        return this.arrList[0];
    }

    tail() {
        return this.arrList[this.arrList.length - 1];
    }

    at(index) {
        return this.arrList[index];
    }

    insertAt(index, data) {
        this.arrList.splice(index, 0, data);
    }

    isEmpty() {
        if (!this.arrList.length) return true;
        return false;
    }

    clear() {
        this.arrList = [];
    }

    deleteAt(index) {
        this.arrList.splice(index, 1)
    }

    reverse() {
        this.arrList.reverse();
    }

    indexOf(data) {
        let flag = -1;
        this.arrList.forEach((el, i) => {
            if (el === data) flag = i;
        })
        return flag;
    }
}

module.exports = LinkedList;
