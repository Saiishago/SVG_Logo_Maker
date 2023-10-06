const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes.js');

const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword or HEX code:",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword or HEX code:",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Choose an image you would like?",
        choices: ["Triangle", "Circle", "Square"],
    },
];

class SVG{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="100">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="100" y="70" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
};

function writeToFile(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Welldone, now you have svglogo.svg!");
    });
};

async function init() {
    console.log("Let's go");
	var svgString = "";
	var svgFile = "SVGlogo.svg";

    const answers = await inquirer.prompt(questions);
    var yourText = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        yourText = answers.text;
    } else {
        console.log("Wait wait! Please enter JUST three letters/characters, not less.");
        return;
    }
    console.log("Your text: [" + yourText + "]");

    yourTextColor = answers["text-color"];
    console.log("Your text color: [" + yourTextColor + "]");

    yourShapeColor = answers.shape;
    console.log("Your shape color: [" + yourShapeColor + "]");

    yourShapeType = answers["pixel-image"];
    console.log("Your entered shape = [" + yourShapeType + "]");

    let yourShape;
    if (yourShapeType === "Triangle" || yourShapeType === "triangle") {
        yourShape = new Triangle();
		console.log("You selected a Triangle!");
    }
    else if (yourShapeType === "Circle" || yourShapeType === "circle") {
        yourShape = new Circle();
		console.log("You selected a Circle!");
    }
    else if (yourShapeType === "Square" || yourShapeType === "square") {
        yourShape = new Square();
		console.log("You selected a Square!");
    }
    else {
        console.log("No, choose from the list");
    }
    yourShape.setColor(yourShapeColor);

    var svg = new SVG();
    svg.setTextElement(yourText, yourTextColor);
    svg.setShapeElement(yourShape);
    svgString = svg.render();

    console.log("Showing:\n" + svgString);
    console.log("Shape, done!");
    console.log("Processing, wait...");
    writeToFile(svgFile, svgString);
}
init()