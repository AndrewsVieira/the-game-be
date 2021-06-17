const Node = require("./doubleNode");

class List {
    constructor() {
        this.quantity = 0;
        this.begin = null;
        this.end = null;
    }

    insertPosition(element, position) {
        let cursor;

        let node = new Node(element);
        if ((this.quantity / 2) > position) {
            cursos = this.begin;
            for(let i = 1; i < position -1; i++) {
                cursor = cursor.getNext();
            }
        } else {
            cursor = this.end;
            for(let i = this.quantity; i > position -1 ; i--) {
                cursor = cursor.getPrev();
            }
        }
        temp = cursor.getNext();
        node.setPrev(cursor);
        node.setNext(temp);
        cursor.setNext(node);
        cursor.setPrev(node);
        this.quantity++;
    }
}

module.exports = List