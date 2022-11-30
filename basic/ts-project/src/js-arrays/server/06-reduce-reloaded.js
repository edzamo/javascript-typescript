const items = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8];

const result = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1
  }
  return obj;
}, {});


console.log('result', result);

const data = [{
    name: 'Edwin',
    level: 'low'
  }, {
    name: 'Edwin',
    level: 'medium'
  },
  {
    name: 'Edwin',
    level: 'low'
  },
  {
    name: 'Edwin',
    level: 'medium'
  }, {
    name: 'Edwin',
    level: 'hight'
  }, {
    name: 'Edwin',
    level: 'low'
  },
]

const reduceData = data.map(data => data.level)
  .reduce((obj, level) => {
    if (obj[level]) {
      obj[level] = obj[level] + 1
    } else {
      obj[level] = 1
    }
    return obj;
  }, {})

console
  .log('reduceData', reduceData);




const numberItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numberItems.filter

numberItems.reduce((obj, item) => {
  if (obj[item] <= 5) {
    obj[item] = obj[item] + 1;
  } else {
    obj[item] = 1;
  }
  return obj;
},{})
