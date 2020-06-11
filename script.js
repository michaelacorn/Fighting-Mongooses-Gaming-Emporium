class Products {
    constructor(name, category, description, price) {
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
    }
}
let prodArr = [];

prodArr.push(new Products('Cyberpunk 2077', ['PC', 'Xbox One', 'PS4'], 'The Witcher, but like in the future.', 59.99));
prodArr.push(new Products('Last Of Us: Part II', ['PS4'], 'An action survival game where zombies and humans can be bad', 59.99));
prodArr.push(new Products('Overwatch',['PC', 'Xbox One', 'PS4'], 'THE class based shooter', 19.99));
prodArr.push(new Products('Jet Set Radio Future',['Xbox'], 'An old game about roller skating and graffiti', 32.99));
prodArr.push(new Products('E.T', ['Atari'], 'The game was put in the landfill for a reason', 17.99));
prodArr.push(new Products('Resident Evil',['PC', 'Xbox One', 'PS4'], 'A classic remastered with new features and better graphics', 19.99));
prodArr.push(new Products('Starcraft', ['PC'], 'Screw your zerg rush', 9.99));
prodArr.push(new Products('Superman 64', ['Nintendo 64'], 'It\'s really bad and really expensive', 399.94));
prodArr.push(new Products('Valorant', ['PC'], 'Class based shooter in the style of CS:GO', 19.99));
prodArr.push(new Products('Give us money',['N/A'], 'There is no product, we just want your money. Feel free to buy this more than once. :)', 5));

console.log(prodArr)

let subtotal, total;
let cart = [];
let salestax = total * 1.06;


// psuedo code until later
// printReceipt = () => {
//     for (element of cart) {
//         element.name printed;
//         element.price printed;
//     }
//     print total cost
// }