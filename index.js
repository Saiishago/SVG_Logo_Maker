const inquirer = require('inquirer');
const Shapes = require('./lib/shapes.js');

const shapes = new Shapes();
const colors = new Colors();
const fonts = new Fonts();

shapes.run();

colors.run();

fonts.run();