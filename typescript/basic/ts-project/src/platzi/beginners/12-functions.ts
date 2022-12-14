function person(name: string, lastname: string, address: string, dateNow: Date) {
    return {
        name,
        lastname,
        address,
        dateNow
    }

}

const personObj = person('edwin', 'zamora', 'ejercitoo', new Date())
console.log('personObj', personObj);

const personObjArrow = (name: string, lastname: string, address: string, dateNow?: Date) => {
    return {
        name,
        lastname,
        address,
        dateNow
    }
}

console.log('personObjArrow', personObjArrow('edwin', 'zamora', 'ejercitoo'));

