class Products {
    constructor(name, category, description, price, imgsrc) {
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.imgsrc = imgsrc || '';
    }
}
let prodArr = [];

prodArr.push(new Products('Cyberpunk 2077', ['PC', 'Xbox One', 'PS4'], 'The Witcher, but like in the future.', 59.99, 'images/Cyberpunk2077_XBone.jpg'));
prodArr.push(new Products('Last Of Us: Part II', ['PS4'], 'An action survival game where zombies and humans can be bad', 59.99, 'images/LOU2_PS4.jpg'));
prodArr.push(new Products('Overwatch',['PC', 'Xbox One', 'PS4'], 'THE class based shooter', 19.99, 'images/OW_PC.jpg'));
prodArr.push(new Products('Jet Set Radio Future',['Xbox'], 'An old game about roller skating and graffiti', 32.99, 'images/JSRF_Xbox.jpg'));
prodArr.push(new Products('E.T', ['Atari'], 'The game was put in the landfill for a reason', 17.99, 'images/ET_2600.jpg'));
prodArr.push(new Products('Resident Evil',['PC', 'Xbox One', 'PS4'], 'A classic remastered with new features and better graphics', 19.99,'images/RE_PS4.jpg'));
prodArr.push(new Products('Starcraft', ['PC'], 'Screw your zerg rush', 9.99, 'images/Starcraft_PC.jpg'));
prodArr.push(new Products('Superman 64', ['Nintendo 64'], 'It\'s really bad and really expensive', 399.94, 'images/Superman64.jpg'));
prodArr.push(new Products('Valorant', ['PC'], 'Class based shooter in the style of CS:GO', 19.99, 'images/Valorant_PC.png'));
prodArr.push(new Products('Give us money',['N/A'], 'There is no product, we just want your money. Feel free to buy this more than once. :)', 5, 'images/Gib_Money.png'));

const cart = document.getElementById('cart')
const shelf = document.getElementById('game-container')


for (let i = 0; i < prodArr.length; i++) {
    let unit = document.createElement("div");
    unit.price = prodArr[i].price;
    let name = document.createElement("h1");
    let description = document.createElement("p");
    let price = document.createElement("p");
    let art = document.createElement("img");
    let add = document.createElement("button");

    add.addEventListener("click", ()=>{
        if (inCart.length >= 10) {
            alert("The cart is limited to 10 items.")
        } else {
            inCart.push(unit.id);
            let selected = unit.cloneNode(true);
            cart.appendChild(selected);
            subtotal += unit.price;
            let cost = subtotal.toFixed(2);
            console.log(cost);
        }
    })

    unit.setAttribute("id", `product ${i}`)
    art.src = prodArr[i].imgsrc;
    add.textContent = "Add to cart";
    name.textContent = prodArr[i].name;
    description.textContent = prodArr[i].description;
    price.textContent = "$" + prodArr[i].price;

    shelf.appendChild(unit);
    unit.appendChild(name);
    unit.appendChild(art);
    unit.appendChild(description);
    unit.appendChild(price);
    unit.appendChild(add);
}





let subtotal = 0;
let inCart = [];
let total = subtotal * 1.06;


// psuedo code until later
// printReceipt = () => {
//     for (element of cart) {
//         element.name printed;
//         element.price printed;
//     }
//     print total cost
// }