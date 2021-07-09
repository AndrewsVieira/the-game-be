class List {
    constructor() {
        this.elements = [];
    }

    inserting(element) {
        this.elements.push(element);
    }

    sort(option) {
        if (option === 1) {
            this.sortByPoints();
        } else if (option === 2) {
            this.sortByName();
        }
    }

    sortByPoints() {
        let swaped;
        do {
            swaped = false;
            for (let i = 0; i < (this.elements.length - 1); i++) {
                if (this.elements[i].points < this.elements[i + 1].points) {
                    this.swap(i, i + 1);
                    swaped = true;
                }
            }
        } while (swaped);
    }

    sortByName() {
        let swaped;
        do {
            swaped = false;
            for (let i = 0; i < (this.elements.length - 1); i++) {
                if (this.elements[i].user.name < this.elements[i + 1].user.name) {
                    this.swap(i, i + 1);
                    swaped = true;
                }
            }
        } while (swaped);
    }

    swap(a, b) {
        let temp = this.elements[a];
        this.elements[a] = this.elements[b];
        this.elements[b] = temp;
    }
}

module.exports = List