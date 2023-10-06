const {Triangle, Circle, Square} = require('./shapes.js');


describe('Triangle', () => {
    test('runs correctly, as it should.', () => {
      const shape = new Triangle();
      var color = ('gold')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<polygon height= "100%" width= "100%" points= "0, 100 200, 100 100,0" fill= "${color}">`);
    });
});

describe('Circle', () => {
    test('runs correctly, as it should.', () => {
      const shape = new Circle();
      var color =('red')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="50" height="100%" width="100%" fill="${color}">`);
    });
});

describe('Square', () => {
    test('runs correctly, as it should.', () => {
      const shape = new Square();
      var color =('green')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<rect x="30" height="150" width="150" fill="${color}">`);
    });
});

//       const error = new Error('Shapes class should have a render() method.');
//       expect(shapes.render).toThrow(error);