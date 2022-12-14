const entries = [
  {
    index: 1,
    parent: 0
  },
  {
    index: 2,
    parent: 1,
  },
  {
    index: 3,
    parent: 3,
  },
  {
    index: 3,
    parent: 0,
  },
];
const arrayToTree = (arr, parent ) =>
  arr
    .filter((item) => item.parent === parent)
    .map((child) => ({ ...child, children: arrayToTree(arr, child.index) }));

console.log(JSON.stringify(arrayToTree(entries), 6 ));
