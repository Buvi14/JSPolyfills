var s = "val1&$val2 val3";
// Split() function
function defaultSplit() {
  let result = s.split("");
  console.log("-------------Split()---------------");
  console.log(result);
  alert("See the Results in Console");
}

String.prototype.customSplit = function (args) {
  const output = [];
  const split_value_length = args.length;
  const value = this;
  var output_string = "";
  let j;
  // This will be for "" test case
  if (args.length === 0) {
    for (let i = 0; i < value.length; i++) {
      output.push(value[i]);
    }
    return output;
  }
  // This will be for other than above case
  for (let i = 0; i < value.length; i++) {
    if (value[i] == args[0]) {
      for (j = 1; j < split_value_length; j++) {
        if (value[j] === args[j]) {
          continue;
        }
      }
      if (j === split_value_length) {
        i += split_value_length;
        output.push(output_string);
        output_string = "";
      }
    }
    output_string += value[i];
  }
  // Pushing the final string to output array and return that array
  output.push(output_string);
  return output;
};

// ownSplitfunction()
function ownSplit() {
  let ownResult = s.customSplit("");
  console.log("-------------Own Split()---------------");
  console.log(ownResult);
  alert("See the Results in Console");
}

// Reverse()
let arr = ["hello", "world", "welcome", "kind", "cool"];
function reverse() {
  console.log("-------------Reverse()---------------");
  console.log(arr.reverse());
  alert("See the Results in Console");
}

// Own reverse()

Array.prototype.ownReverse = function () {
  let output = [];
  for (let i = this.length - 1; i >= 0; i--) {
    output.push(this[i]);
  }
  return output;
};
function ownReverse() {
  console.log("-------------Own Reverse()---------------");
  arr = ["hello", "world", "welcome", "kind", "cool"];
  console.log(arr.ownReverse());
  alert("See the Results in Console");
}

// join() default function
function join() {
  let result = [
    "v",
    "a",
    "l",
    "1",
    "&",
    "$",
    "v",
    "a",
    "l",
    "2",
    " ",
    "v",
    "a",
    "l",
    "3",
  ];
  console.log("-------------Join()---------------");
  console.log(result.join(""));
  alert("See the Results in Console");
}

// OwnJoin()
Array.prototype.ownJoin = function (args) {
  let str = "";
  for (let i = 0; i < this.length; i++) {
    str += this[i];
  }
  return str;
};

function ownJoin() {
  let ownResult = [
    "v",
    "a",
    "l",
    "1",
    "&",
    "$",
    "v",
    "a",
    "l",
    "2",
    " ",
    "v",
    "a",
    "l",
    "3",
  ];
  console.log("-------------Own Join()---------------");
  console.log(ownResult.ownJoin());
  alert("See the Results in Console");
}
