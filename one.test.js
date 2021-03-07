const _ =require('lodash')
const one =require('./one.js')


test('Add Object Without Rest should have length of 69', () => {
    let newTotal =one.addedWithoutSpread()
    expect(newTotal.length).toBe(69);
    expect(_.last(newTotal).added).toBe(true);
  });




// test('last object should have property value added:True', () => {
//     let newTotal =addWithSpread()
//     expect(_.last(newTotal).added).toBe(true);
//   });

// test('last object should have property value added:True', () => {
//     let newTotal =mapAndAddProperty()
//     expect(_.head(newTotal).added).toBe(true);
//     expect(_.last(newTotal).added).toBe(true);
//   });


