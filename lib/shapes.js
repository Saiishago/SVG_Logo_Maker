class Shape {
    constructor() {
        this.color = ""
    }
    setColor(color){
        this.color = (color);
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon height= "100%" width= "100%" points= "0, 100 200, 100 100,0" fill= "${this.color}">`
    }
};

class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="50" height="100%" width="100%" fill="${this.color}">`
    }
};

class Square extends Shape{
    render(){
        return `<rect x="30" height="150" width="150" fill="${this.color}">`
    }
};

module.exports = {Triangle, Circle, Square}