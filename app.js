import Tree from "./bts.js"

let tree = new Tree()

tree.insert("ahmed")
tree.insert("hamo")
tree.insert("hady")
tree.insert("ali")
tree.insert("mohamed")


let r = tree.search('moha')
console.log(tree.min());
// console.log(r.right);
// console.log(r.right.right);
// console.log(r.right.right.right);