const items = [
    {
        name: "Dumbell 10 KG",
        price: "$19.99",
        imageUrl: "images/dumbellBackground.png",
    },
    {
        name: "kettlebell 8 KG",
        price: "$9.99",
        imageUrl: "images/kettlebellBackground.png",
    },
    {
        name: "Dumbell 10 KG",
        price: "$19.99",
        imageUrl: "images/dumbellBackground.png",
    },
    {
        name: "kettlebell 8 KG",
        price: "$9.99",
        imageUrl: "images/kettlebellBackground.png",
    }
];


function loadData(){
    items.forEach(createItem)
}
function createItem(item){
    var el = `
    <div class="item">
        <img class="itemImage" src="${item.imageUrl}" alt="Product Image">
        <div class="itemDescription">
            <h3 class="itemName">${item.name}</h3>
            <h1 class="itemPrice">${item.price}</h1>
            <button class="itemButton">View Description</button>
        </div>
    </div>
`;
document.querySelector('.items').innerHTML+=el
}
function search(){
    var searchString = event.target.value
    document.querySelectorAll('.items .item').forEach((item)=>{
        item.classList.remove('displayNone')
        if(item.innerText.toLowerCase().indexOf(searchString.toLowerCase()) == -1){
            item.classList.add('displayNone')
        }
    })
}