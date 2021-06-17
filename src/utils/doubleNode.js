class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }

    getNext() {
        return this.next;
    }

    setNext(nodeNext) {
        this.next = nodeNext;
    }

    getPrev() {
        return this.prev;
    }

    setPrev(nodePrev) {
        this.prev = nodePrev;
    }

    getData() {
        return this.data;
    }
} // fim da classe Node

module.exports = Node;