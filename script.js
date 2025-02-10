// let student ={
//     "name":'Gulu'
// };
// // console.log(student);
// function getKeys(obj_name) {
//     return Object.keys(obj_name);
// }

let student = {
  name: "Gulu",
  age: 21,
  getKeys: function() {
    return Object.keys(this);
  }
};
console.log(myObj.getKeys()); 
