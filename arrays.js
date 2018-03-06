var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  if(!element) {
    var element = 'foo';
  }
  [element, ...array];
}
