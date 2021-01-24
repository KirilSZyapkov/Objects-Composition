function createSortedList() {

    let obj = {
        collection: [],
        size: 0,

        add: function (x) {
            this.collection.push(x);
            this.collection.sort((a, b) => a - b);
            this.size = this.collection.length;
        },
        get: function (y) {
            if (y > this.collection.length - 1 || y < 0) return;
            let index = y;
            return this.collection[index];
        },
        remove: function (z) {

            if (z > this.collection.length - 1 || z < 0) return;
            let index = z;
            this.collection.splice(index, 1);
            this.collection.sort((a, b) => a - b);
            this.size = this.collection.length;
            return this.collection;
        },

    }

    return obj
}

let list = createSortedList();
list.add(7);
list.add(4);
list.add(8);
console.log(list.get(-2));
list.remove(1);
console.log(list.get(1));