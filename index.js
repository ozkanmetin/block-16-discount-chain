const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

function calculateFinalAmount(person) {
    let amount = person.refills * person.pricePerRefill;

    if(person.subscription) {
        amount -= amount*0.25;
    }

    if(person.coupon) {
        amount -= 10;
    }

    return `Your grand total is $${amount}`;
}

console.log(calculateFinalAmount(timmy));
console.log(calculateFinalAmount(sarah));
console.log(calculateFinalAmount(rocky));