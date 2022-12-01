(() => {
  console.clear();
  const entries = [
    {
      index: 1,
      parent: 0,
    },
    {
      index: 2,
      parent: 1,
    },
    {
      index: 3,
      parent: 2,
    },
  ];
  console.log(entries);

  console.log(arrayToTree(entries), null);
})();



function arrayToTree(entries: { index: number; parent: number; }[]): any {
  
  entries
  .filter(item=> item.parent === parent)
}

