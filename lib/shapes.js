class Shape {
    constructor() {
        this.color = ""
    }
    setColor(color){
        this.color = (color);
    }
}

class Pentagon extends Shape {
    render(){
        return `<polygon height= "80%" width= "80%" points= "150 200, 150 200, 150 200, 150 200, 150 200" fill= "${this.color}">`
    }
};

class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="80" height="80%" width="80%" fill="${this.color}">`
    }
};

class Square extends Shape{
    render(){
        return `<rect x="50" height="150" width="150" fill="${this.color}">`
    }
};

module.exports = {Pentagon, Circle, Square}