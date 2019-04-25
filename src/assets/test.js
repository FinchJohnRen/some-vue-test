// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

import _ from 'lodash'
function extend2(Child, Parent) {

  var p = Parent.prototype;

  var c = Child.prototype;

  for (var i in p) {
    c[i] = p[i];

  }

  c.uber = p;

}

function Animal() { }
Animal.prototype.species = "动物";


function Cat() {
}
Cat.prototype.name = 'CAT'

var a = _.upperFirst('fred')
console.log(a);