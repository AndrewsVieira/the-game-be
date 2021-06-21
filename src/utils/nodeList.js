const Node = require("./node");

class List {
    constructor(data) {
        this.size = 0;
        
        if (Array.isArray(data)) {
            this.begin = null;
            data.forEach(element => {
                this.add(element);
            });
        } else {
            let element;
            while (data.next != null) {
                element = data.data;
                console.log(element);
                data = data.next;
            }
        }
    }

    insert(node, data) {
        let newNode = new Node(data);

        if (node == null) {
            newNode.next = this.begin;
            this.begin = newNode;
        }
        else {
            let next = node.next;
            node.next = newNode;
            node.next.next = next;
        }

        this.size = this.size + 1;
        return node;
    }

    add(value) {
        this.insert(this.begin, value);
    }

    sort(option) {
        if (option === 1) this.mergeSort(this.begin, option);
    }

    mergeSort(list, option) {

        // console.log("================\n list\n===============\n", list);

        if (list !== undefined) {

            if (list.next === null) return list;

            let leftPart = list;
            let leftPointer = list;
            let rightPart = null;

            let middle = Math.floor(this.size / 2)
            let count2 = 0;

            // separar em duas lista, a da esquerda e a da direita
            while (count2 < middle) {
                count2++;
                leftPointer = leftPointer.next;
            }

            rightPart = new List(leftPointer.next);
            leftPointer.next = null;
            if (option === 1) return this.mergeByPoints(this.mergeSort(leftPart, option), this.mergeSort(rightPart.head, option));
        }
    }

    mergeByPoints(left, right) {
        // console.log("================\nL\n===============\n", left);
        // console.log("================\nR\n===============\n", right);

        if (left !== undefined && right !== undefined) {
            let result = new List(),
                pivot = result.begin,
                leftPoints = left.data.points,
                rightPoints = right.data.points;


            while (left, right) {
                let tmp = null;

                if (leftPoints > rightPoints) {
                    tmp = rightPoints;
                    right = right.next;
                } else {
                    tmp = leftPoints
                    left = left.next;
                }

                if (result.begin === null) {
                    result.begin = new Node(tmp);
                    pivot = result.begin;
                } else {
                    result.begin.next = new Node(tmp);
                    pivot = pivot.next;
                }
            }

            pivot.next = left;
            while (pivot.next) pivot = pivot.next;

            pivot.next = right;

            return result.begin;
        }
    }

    sortByName(list) { }

}

module.exports = List