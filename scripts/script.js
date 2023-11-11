// Data has been added here for items
let items = [
    {
        id:1,
        name: "Dumbell 10 KG",
        price: "$19.99",
        imageUrl: "images/dumbellBackground.png",
        rating:"5.0/5.0",
        description:"A dumbbell is a type of free weight used in weight training. It consists of a short bar with a weight attached to each end. Dumbbells come in various shapes, sizes, and materials, with the most common materials being metal, rubber, or plastic for the weights and a metal or rubber handle for gripping.",
        reserved:false,
    },
    {
        id:2,
        name: "Kettlebell 8 KG",
        price: "$15.99",
        imageUrl: "images/kettlebellBackground.png",
        rating:"4.9/5.0",
        description:"A kettlebell is a type of exercise equipment that looks like a cast-iron ball with a handle attached to the top. This design allows for a variety of functional and dynamic exercises. Kettlebells originated in Russia and were used in traditional Russian training methods.",
        reserved:false,
    },
    {
        id:3,
        name: "Lat Pull Down",
        price: "$59.99",
        imageUrl: "images/LatPullDown.png",
        rating:"4.6/5.0",
        description:"The lat pulldown is a popular strength training exercise that primarily targets the latissimus dorsi muscles, commonly known as the lats. This exercise is performed using a cable machine, and it's effective for developing upper back strength and muscle definition.",
        reserved:false,
    },
    {
        id:4,
        name: "Leg Press",
        price: "$159.99",
        imageUrl: "images/LegPress.png",
        rating:"4.1/5.0",
        description:"The leg press is a popular strength training exercise that targets the muscles of the lower body, primarily the quadriceps, hamstrings, and glutes. It's performed on a leg press machine, which can vary in design, but generally involves pushing a weighted platform away from the body using the legs.",
        reserved:false,
    },
    {
        id:5,
        name: "Pull Up Bars",
        price: "$14.99",
        imageUrl: "images/PullUpBars.jpg",
        rating:"3.5/5.0",
        description:"Pull-up bars are simple yet effective pieces of exercise equipment designed for upper body strength training. They allow you to perform a variety of exercises that primarily target the muscles in your back, shoulders, and arms. Pull-up bars are commonly installed in doorframes or mounted on walls.",
        reserved:false,
    },
    {
        id:6,
        name: "Rowing Machine",
        price: "$99.99",
        imageUrl: "images/RowingMachine.png",
        rating:"3.8/5.0",
        description:"A rowing machine, also known as an ergometer or rower, is a piece of exercise equipment designed to simulate the action of rowing a boat. It provides a low-impact, full-body workout and is popular for cardiovascular training, strength building, and overall fitness improvement.",
        reserved:false,
    },
    {
        id:7,
        name: "Chest Press",
        price: "$24.99",
        imageUrl: "images/ChestPress.png",
        rating:"3.3/5.0",
        description:"The chest press is a common strength training exercise that primarily targets the muscles of the chest, shoulders, and triceps. There are various types of chest presses, and the equipment used can include barbells, dumbbells, machines, or even body weight.",
        reserved:false,
    },
    {
        id:8,
        name: "Barbell",
        price: "$29.99",
        imageUrl: "images/Barbell.jpg",
        rating:"3.8/5.0",
        description:"A barbell is a type of free weight used in weight training, resistance training, and powerlifting. It is a long metal bar with evenly distributed weight plates attached to each end. The barbell is designed to be grasped with both hands, and it allows for a wide range of exercises to target various muscle groups.",
        reserved:false,
    },
    {
        id:9,
        name: "Leg Extension",
        price: "$99.99",
        imageUrl: "images/LegExtension.png",
        rating:"4.4/5.0",
        description:"The leg extension is a strength training exercise that targets the quadriceps muscles in the front of the thigh. It's commonly performed using a leg extension machine, which is found in many gyms.",
        reserved:false,
    },
    {
        id:10,
        name: "Treadmill",
        price: "$199.99",
        imageUrl: "images/Treadmill.jpeg",
        rating:"3.2/5.0",
        description:"A treadmill is a popular exercise machine designed for walking, jogging, or running indoors. It consists of a moving platform that is powered by an electric motor. Users can adjust the speed and incline to simulate different levels of intensity and terrain. Treadmills are widely used for cardiovascular exercise, endurance training, and weight loss.",
        reserved:false,
    },
    {
        id:11,
        name: "Weights",
        price: "$6.99",
        imageUrl: "images/Weight.png",
        rating:"4.3/5.0",
        description:"Weights in the context of gym equipment typically refer to free weights or resistance training equipment used for strength training. There are various types of weights used in gyms, each serving a specific purpose in helping individuals build strength and muscle.",
        reserved:false,
    },
    {
        id:12,
        name: "Dip Station",
        price: "$5.99",
        imageUrl: "images/DipStation.png",
        rating:"4.0/5.0",
        description:"A dip station, also known as a dip bar or dip stand, is a piece of fitness equipment designed for performing dips, a bodyweight exercise that targets the muscles of the upper body, particularly the chest, shoulders, and triceps. Dip stations typically consist of two parallel bars that are set at shoulder width or slightly wider. They can be standalone structures or integrated into larger workout stations.",
        reserved:false,
    }
];

// Function to load all data to home page
function loadData(){
    items.forEach(createItem)
}

// Function to create item and place inside the items container
function createItem(item){
    var el = 
    `<div class="item">
        <img class="itemImage" src="${item.imageUrl}" alt="Product Image">
        <div class="itemDescription">
            <h3 class="itemName">${item.name}</h3>
            <h1 class="itemPrice">${item.price}</h1>
            <button class="itemButton" onClick="viewDescription(${item.id})">View Details</button>
        </div>
    </div>`
document.querySelector('.items').innerHTML+=el
}

// Function to search the required product
function search(){
    var searchString = event.target.value
    document.querySelectorAll('.items .item').forEach((item)=>{
        item.classList.remove('displayNone')
        if(item.innerText.toLowerCase().indexOf(searchString.toLowerCase()) == -1){
            item.classList.add('displayNone')
        }
    })
}

// Function to view the description of the particular item
function viewDescription(itemId){
    const selectedItem = items.find(item => item.id === itemId)
    console.log(selectedItem) 
    let reserveValue = "Reserve";
    if(viewDescription.caller.name == "onclick"){
        document.querySelector('.items').classList.add('displayNone')
    }
    if(selectedItem.reserved){
        reserveValue="Reserved"
    }  
    var el =
    `<div class="wrapper">
        <div class="product-img">
            <img src="images/dumbellBackground.png" height="100%" width="100%">
        </div>
        <div class="product-info">
            <div class="product-text">
                <h1>${selectedItem.name}</h1>
                <h2>Rating ${selectedItem.rating}</h2>
                <p>${selectedItem.description}</p>
            </div>
        <div class="product-price-btn">
            <p><span>${selectedItem.price}</span></p>
            <button class="itemButton" id="referenceCancelButton" onclick="goBack()">Go Back</button>
            <button class="itemButton" onclick="reserveItem(${selectedItem.id})">${reserveValue}</button>
        </div>
    </div>`
    document.querySelector('.content').innerHTML=el
}

// Function to open the reserve form for the particular item
function reserveItem(itemId){
    const selectedItem = items.find(item => item.id === itemId)
    if(selectedItem.reserved){
        return
    }
    document.querySelector('.wrapper').classList.add('displayNone')
    var el =
    `<div class="reserveForm">
        <div class="formContainer">
            <h1>Fill the details</h1>
            <form action="#" method="post" onsubmit="return submitReserve(${selectedItem.id});">
                <div class="inputField">
                    <label for="fname">Full Name:</label>
                    <input type="text" id="fname" name="fname" required>
                </div>
                <div class="inputField">
                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" title="Please enter a 10-digit mobile number" required>
                </div>
                <div class="inputField">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="inputField">
                    <label for="address">Address:</label>
                    <textarea id="address" name="address"></textarea>
                </div>
                <div class="inputField" id="referenceButtonContainer">
                    <input type="submit" class="itemButton" id="referenceSubmitButton" value="Submit">
                    <input onclick="cancelReserve(${selectedItem.id})" type="submit" class="itemButton" id="referenceCancelButton" value="Cancel">
                </div>
            </form>
        </div>
    </div>`
    document.querySelector('.content').innerHTML=el
                                 
}

// Function to go back to home page
function goBack(){
    document.querySelector('.wrapper').classList.add('displayNone')
    const itemDiv = document.createElement('div')
    itemDiv.className='items'
    document.querySelector('.content').appendChild(itemDiv)
    loadData();
}

// Fucntion to submit the form and make the item reserved
function submitReserve(itemId){
    const selectedIndex = items.findIndex(item => item.id === itemId)
    items[selectedIndex].reserved = true
    document.querySelector('.reserveForm').classList.add('displayNone')
    viewDescription(items[selectedIndex].id)
}

// Function to cancel the reserve form and go back to product description page
function cancelReserve(itemId){
    const selectedItem = items.find(item => item.id === itemId)
    document.querySelector('.reserveForm').classList.add('displayNone')
    viewDescription(selectedItem.id)
}
