const Node = require("./node");

class List {
    constructor(list) {
        this.size = 0;

        if (Array.isArray(list)) {
            this.begin = null;
            list.forEach(element => {
                this.add(element);
            });
        } else if (list === null) {
            this.begin = null;
        } else {
            let element;
            while (list.next != null) {
                element = list.data;
                console.log(element);
                list = list.next;
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
        if (option === 1) this.mergeSort(this, option);
    }

    mergeSort(list, option) {
        if (list !== undefined) {
            if (list.begin.next === undefined || list.begin.next === null) return list;
            console.log("================\n LISTA \n===============\n", list);
            console.log("================\n BEGIN \n===============\n", list.begin);
            console.log("================\n NEXT \n===============\n", list.begin.next);

            let leftPart = list.begin;
            let leftPointer = list.begin;
            let rightPart = null;

            let middle = Math.floor(this.size / 2);
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
        console.log("================\nL\n===============\n", left);
        console.log("================\nR\n===============\n", right);

        if (left !== undefined && right !== undefined) {
            let result = new List(null),
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