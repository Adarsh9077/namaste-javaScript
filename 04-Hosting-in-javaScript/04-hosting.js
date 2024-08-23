console.log(x);
var x = 108;
getName();
getName3();
getName2();

function getName() {
  console.log((x + 9) * 2, " --> namaste-JavaScript Normal function");
}

var getName2 = () => {
  console.log(`${x} --> this is in arrow function and it is template literals`); //
  console.log(
    (x + 2) * 9 +
      " --> this is in arrow function and it is using conatination operator(+)"
  );
};
var getName3 = function () {
  console.log("this is variable type function");
};
console.log(typeof (2 + 3, 5 + 6));
