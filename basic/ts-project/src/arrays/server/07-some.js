const numbers = [1, 2, 3, 4];

const result = numbers.some((item) => item % 2 === 0);

console.log("result", result);

const orders = [
  {
    customer: "Edwin",
    total: 22,
    delivvered: true,
  },
  {
    customer: "Jose",
    total: 22,
    delivvered: true,
  },
  {
    customer: "Manuel",
    total: 22,
    delivvered: false,
  },
  {
    customer: "Pedro",
    total: 22,
    delivvered: true,
  },
];

const someOrder = orders.some((item) => item.delivvered);
console.log("someOrder", someOrder);

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  // My try

const obj1 = {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
}

const obj2 = {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 13),
    title: "Cita de trabajo",
}

const datesOverlap = (start1, end1, start2, end2) => {
    if (start1 <= end2 && start2 <= end1) return true
    else return false;
}



