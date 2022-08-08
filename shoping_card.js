

/// declare object

const item = [
    { name: 'shirt', price: 500, quantity: 5 },
    { name: 'pant', price: 800, quantity: 5 },
    { name: 'shoe', price: 900, quantity: 2 },
    { name: 'punjabi', price: 1200, quantity: 1 }
];

function shopping_card(items) {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        let card = items[i];

        sum = sum + card.price * card.quantity;


    }

    return sum;
}


console.log('Total shoping cost is : ', (shopping_card(item)));