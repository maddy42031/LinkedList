//  get DOM elements
const insertNode = document.getElementById("insertNode");
const insertFirstNode = document.getElementById("insertFirstNode");
const insertLastNode = document.getElementById("insertLastNode");
const removeNode = document.getElementById("removeNode");
const getSize = document.getElementById("getSize");
const insertLinkedlistElements = document.getElementById(
  "insertLinkedlistElements"
);
const clear = document.getElementById("clear");

// ! CREATING LINKED LIST CLASS
class LinkedList {
  constructor() {
    this.node = [];
  }
  get size() {
    alert(`LINKED LIST SIZE IS ${this.node.length}`);
  }
  insertNode(index, value) {
    let previousNode = this.node[index - 1] ?? null;
    let nextNode = this.node[index] ?? null;
    let node = { value, next: nextNode };
    if (previousNode) {
      previousNode.next = node;
    }
    this.node.splice(index, 0, node);
    this.displayNodes();
  }
  insertAt() {
    let index = prompt("ENTER THE INDEX TO INSERT ") || this.node.length;
    if (isNaN(index)) {
      alert("Sorry characters not accepted");
      return;
    } else {
      let numOfIndex = Number(index);
      let value = prompt(`ENTER THE VALUE OF ${numOfIndex} INDEX`);
      if (value === null || value == "") {
        return;
      }
      this.insertNode(numOfIndex, value);
    }
  }
  insertFirstNode() {
    let value = prompt("ENTER THE VALUE OF 0 INDEX ");
    if (value === null || value == "") {
      return;
    }
    this.insertNode(0, value);
  }
  insertLastNode() {
    let value = prompt(`ENTER THE VALUE OF ${this.node.length} INDEX`);
    if (value === null || value == "") {
      return;
    }
    this.insertNode(this.node.length, value);
  }
  removeAt() {
    let index = prompt("ENTER THE DELETE NODE INDEX");
    if (index === null || index == "" || isNaN(index)) {
      return;
    }
    let previousNode = this.node[index - 1] ?? null;
    let nextNode = this.node[index + 1] ?? null;
    if (previousNode) {
      previousNode.next = nextNode;
    }
    this.node.splice(index, 1);
    this.displayNodes();
  }
  clear() {
    this.node = [];
    this.displayNodes();
  }
  displayNodes() {
    let removepreviousElement =
      insertLinkedlistElements.querySelectorAll(".listDiv");
    let fragment = document.createDocumentFragment();
    if (insertLinkedlistElements.hasChildNodes()) {
      for (let i = 0; i < removepreviousElement.length; i++) {
        removepreviousElement[i].remove();
      }
    }
    for (let i = 0; i < this.node.length; i++) {
      let DIV = document.createElement("div");
      let P1 = document.createElement("p");
      let P2 = document.createElement("p");
      let P3 = document.createElement("p");
      let DIVAttr = document.createAttribute("class");
      let P1Attr = document.createAttribute("class");
      let P2Attr = document.createAttribute("class");
      let P3Attr = document.createAttribute("class");
      DIVAttr.value = "listDiv mt-4 mb-4";
      P1Attr.value = "indexVal";
      P2Attr.value = "currentVal";
      P3Attr.value = "nextVal";
      DIV.setAttributeNode(DIVAttr);
      P1.setAttributeNode(P1Attr);
      P2.setAttributeNode(P2Attr);
      P3.setAttributeNode(P3Attr);
      P1.innerText = `INDEX NO : ${i}`;
      P2.innerText = `CURRENT NODE VALUE : ${this.node[i].value ?? null}`;
      P3.innerText = `NEXT NODE VALUE : ${this.node[i + 1]?.value ?? "null"}`;
      DIV.appendChild(P1);
      DIV.appendChild(P2);
      DIV.appendChild(P3);
      fragment.appendChild(DIV);
    }
    insertLinkedlistElements.appendChild(fragment);
  }
}
let linkedList = new LinkedList();

insertNode.addEventListener("click", () => linkedList.insertAt());
insertFirstNode.addEventListener("click", () => linkedList.insertFirstNode());
insertLastNode.addEventListener("click", () => linkedList.insertLastNode());
removeNode.addEventListener("click", () => linkedList.removeAt());
getSize.addEventListener("click", () => linkedList.size);
clear.addEventListener("click", () => linkedList.clear());
