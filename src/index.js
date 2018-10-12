let stack = [];

let name = "racecar";

let rname = "";
console.clear();

for (let i = 0; i < name.length; i++) {
  stack.push(name[i]);
}

for (let i = 0; i < name.length; i++) {
  rname += stack.pop();
}

if (name === rname) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}
