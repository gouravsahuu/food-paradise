let newsImages = [{
    id : "1",
    image : "/Images/index/news-1.jpg",
    description : "Sick Baby Cow Headbutts His Bffs All Day Now", 
},{
    id : "2",
    image : "/Images/index/news-2.jpg",
    description : "The Best Air Fryer Recipe", 
},{
    id : "3",
    image : "/Images/index/news-3.jpg",
    description : "Sea Turtle Stuck In Plastic Gets Help At Just The", 
},{
    id : "4",
    image : "/Images/index/news-4.jpg",
    description : "Cow Who Thinks She''s A Dog Follows Her New Dad", 
},{
    id : "5",
    image : "/Images/index/news-5.jpg",
    description : "Caesar Salad", 
}];

let momentsImages = [{
    id : "1",
    image : "/Images/index/moments-1.jpg",
    title : "Pine 3 Vegetarian Restaurent",
    user : "VyVian"
},{
    id : "2",
    image : "/Images/index/moments-2.jpg",
    title : "Pure Heart Vegetarian",
    user : "William21"
},{
    id : "3",
    image : "/Images/index/moments-3.jpg",
    title : "MyTOWN Shopping Centre",
    user : "FatJedi"
},{
    id : "4",
    image : "/Images/index/moments-4.jpg",
    title : "Food In The Woods",
    user : "VyVian"
},{
    id : "5",
    image : "/Images/index/moments-5.jpg",
    title : "Pure Heart Vegetarian",
    user : "William21"
}];

let restaurantImages = [{
    id : "1",
    image : "/Images/index/restaurants-1.jpg",
    description : "Savory Pies", 
},{
    id : "2",
    image : "/Images/index/restaurants-2.jpg",
    description : "B03 NANYANG CURRY", 
},{
    id : "3",
    image : "/Images/index/restaurants-3.jpg",
    description : "Cakes", 
},{
    id : "4",
    image : "/Images/index/restaurants-4.jpg",
    description : "Aglio e Olio with Beyond Sausage", 
},{
    id : "5",
    image : "/Images/index/restaurants-5.jpg",
    description : "Nasi Lemak", 
}];

let heroesImages = [{
    id : "1",
    image : "/Images/index/superheroes-1.jpg",
    user : "JeffLim1", 
},{
    id : "2",
    image : "/Images/index/superheroes-2.jpg",
    user : "BeekuanTan", 
},{
    id : "3",
    image : "/Images/index/superheroes-3.jpg",
    user : "ChenHou", 
},{
    id : "4",
    image : "/Images/index/superheroes-4.jpg",
    user : "KatrinaTang", 
},{
    id : "5",
    image : "/Images/index/superheroes-5.jpg",
    user : "FoodLover423", 
}];

let news = document.getElementById("news-cards");
let moments = document.getElementById("moments-cards");
let restaurants = document.getElementById("restaurants-cards");
let superheroes = document.getElementById("superheroes-cards");

newsImages.forEach((element) => {
    let main = document.createElement("div");
    
    let image = document.createElement("img");
    image.setAttribute("src",element.image);
    let desc = document.createElement("p");
    desc.innerText = element.description;

    main.append(image,desc);
    news.append(main);
});

restaurantImages.forEach((element) => {
    let main = document.createElement("div");
    
    let image = document.createElement("img");
    image.setAttribute("src",element.image);
    let desc = document.createElement("p");
    desc.innerText = element.description;

    main.append(image,desc);
    restaurants.append(main);
});

heroesImages.forEach((element) => {
    let main = document.createElement("div");
    
    let image = document.createElement("img");
    image.setAttribute("src",element.image);
    let user = document.createElement("p");
    user.innerText = element.user;

    main.append(image,user);
    superheroes.append(main);
});

momentsImages.forEach((element) => {
    let main = document.createElement("div");
    
    let image = document.createElement("img");
    image.setAttribute("src",element.image);
    let title = document.createElement("h3");
    title.innerText = element.title;
    let user = document.createElement("p");
    user.innerText = element.user;

    main.append(image,user);
    moments.append(main);
});