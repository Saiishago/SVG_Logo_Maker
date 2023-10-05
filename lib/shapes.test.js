const {Pentagon, Circle, Square} = require('./shapes.js');


describe('Pentagon', () => {
    test('runs correctly, as it should.', () => {
      const shape = new Pentagon();
      var color = ('gold')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<polygon height= "80%" width= "80%" points= "150 200, 150 200, 150 200, 150 200, 150 200" fill= "${color}">`);
    });
});

describe('Circle', () => {
    test('runs correctly, as it should.', () => {
      const shape = new Circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="80" height="80%" width="80%" fill="${color}">`);
    });
});

describe('Square', () => {
    test('runs correctly, as it should.', () => {
      const shape = new Square();
      var color =('green')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<rect x="50" height="150" width="150" fill="${color}">`);
    });
});

//       const error = new Error('Shapes class should have a render() method.');
//       expect(shapes.render).toThrow(error);