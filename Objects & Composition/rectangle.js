function rectangle(width, height, color) {
    let firstLet = color[0].toLocaleUpperCase();
    color = color.substring(1);
    firstLet+=color;
    let rect = {
        width: Number(width),
        height:Number(height),
        color: firstLet,
        calcArea: function () {
           return  this.width * this.height;
        }
    }
    return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());