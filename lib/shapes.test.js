const Shapes = require('./shapes.js');


const shape = new Circle();
shape.setShape("sphere");
expect(shape.render()).toEqual();

const shapei = new Square();
const shapeii = new Rectangle();
const shapeiii = new Polygon();
const shapeiv = new Triagle();
const shapev = new Oval();


// describe('Shapes', () => {
//     test('show an error if render() is something like', () => {
//       const shape = new Circle();
//       shape.setShape("sphere");
//       expect(shape.render()).toEqual();

//       const shapei = new Square();
//       const shapeii = new Rectangle();
//       const shapeiii = new Polygon();
//       const shapeiv = new Triagle();
//       const shapev = new Oval();

//       const error = new Error('Shapes class should have a render() method.');
//       expect(shapes.render).toThrow(error);
//     });
// })