function change(vector, position1, position2) {
    let temp = vector[position1];
    vector[position1] = vector[position2];
    vector[position2] = temp;
}

function smallestElement(vector, length, pivot) {
    let position = pivot;
    for(pivot; pivot < length; pivot++) {
        if(vector[pivot] < vector[position]) {
            position = pivot;
        }
    }
}

const sort = (vector, length) => {
    if (length > 0) {
        let position;
        for(let i = 0; i < length -1; i++) {
            position = smallestElement(vector, length, i);
            change(vector, i, position);
        }
    }
}

module.exports = sort;