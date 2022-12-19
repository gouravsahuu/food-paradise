let cards1 = [{
    userImage : "./Images/recipes/user-1.jpg",
    userName : "KindMealChef",
    image : "./Images/recipes/main-1.jpg",
    description : "Mu Shu Veggie Wraps",
    time : "25 Mins",
    likes : "5",
    comments : "3",
    clock : "./Images/recipes/timer.png",
    likeImg : "./Images/recipes/like.png",
    category : "beverages",
    commentImg : "./Images/recipes/comment.png"
  },{
      userImage : "./Images/recipes/user-2.jpg",
      userName : "MayNg",
      image : "./Images/recipes/main-2.jpg",
      description : "Vegetarian VFC",
      time : "1 Hr",
      likes : "3",
      comments : "2",
      clock : "./Images/recipes/timer.png",
      likeImg : "./Images/recipes/like.png",
      category : "beverages",
      commentImg : "./Images/recipes/comment.png"
  },{
      userImage : "./Images/recipes/user-1.jpg",
      userName : "KindMealChef",
      image : "./Images/recipes/main-3.jpg",
      description : "Mexican Ice-Cream",
      time : "15 Mins",
      likes : "8",
      comments : "3",
      clock : "./Images/recipes/timer.png",
      likeImg : "./Images/recipes/like.png",
      category : "breakfast",
      commentImg : "./Images/recipes/comment.png"
  },{
      userImage : "./Images/recipes/user-4.jpg",
      userName : "EvnadhamEvnadham",
      image : "./Images/recipes/main-4.jpg",
      description : "Easy 10 Minute Dinner Recipes",
      time : "11 Mins",
      likes : "5",
      comments : "2",
      clock : "./Images/recipes/timer.png",
      likeImg : "./Images/recipes/like.png",
      category : "snacks",
      commentImg : "./Images/recipes/comment.png"
    },{
      userImage : "./Images/recipes/user-5.jpg",
      userName : "MyWeekendPlan",
      image : "./Images/recipes/main-5.jpg",
      description : "Chocolate Cake",
      time : "40 Mins",
      likes : "6",
      comments : "4",
      clock : "./Images/recipes/timer.png",
      likeImg : "./Images/recipes/like.png",
      category : "desserts",
      commentImg : "./Images/recipes/comment.png"
    },{
      userImage : "./Images/recipes/user-6.jpg",
      userName : "FoodLover398",
      image : "./Images/recipes/main-6.jpg",
      description : "How To Make One Pan Egg Toast",
      time : "3 Mins",
      likes : "8",
      comments : "3",
      clock : "./Images/recipes/timer.png",
      likeImg : "./Images/recipes/like.png",
      category : "snacks",
      commentImg : "./Images/recipes/comment.png"
    }];
  
    let cards2 =[{
      userImage : "./Images/recipes/user-11.jpg",
      userName : "shamanth",
      image : "./Images/recipes/main-11.jpg",
      description : "Veg Fried Noodles",
      time : "30 Mins",
      likes : "6",
      comments : "2",
      clock : "./Images/recipes/timer.png",
      likeImg : "./Images/recipes/like.png",
      category : "snacks",
      commentImg : "./Images/recipes/comment.png"
    },{
      userImage : "./Images/recipes/user-22.jpg",
      userName : "buzztowns",
      image : "./Images/recipes/main-22.jpg",
      description : "Khaman Dhokla Recipe",
      time : "1 Hr",
      likes : "12",
      comments : "8",
      clock : "./Images/recipes/timer.png",
      likeImg : "./Images/recipes/like.png",
      category : "breakfast",
      commentImg : "./Images/recipes/comment.png"
    },{
      userImage : "./Images/recipes/user-33.jpg",
      userName : "BluePenguin",
      image : "./Images/recipes/main-33.jpg",
      description : "Curry Tomato Sauce",
      time : "30 Mins",
      likes : "5",
      comments : "2",
      clock : "./Images/recipes/timer.png",
      likeImg : "./Images/recipes/like.png",
      category : "breakfast",
      commentImg : "./Images/recipes/comment.png"
    },{
      userImage : "./Images/recipes/user-22.jpg",
      userName : "MyWeekendPlan",
      image : "./Images/recipes/main-44.jpg",
      description : "Hokkaido Cheese Tart",
      time : "4 Hrs",
      likes : "10",
      comments : "6",
      clock : "./Images/recipes/timer.png",
      likeImg : "./Images/recipes/like.png",
      category : "desserts",
      commentImg : "./Images/recipes/comment.png"
    },{
      userImage : "./Images/recipes/user-5.jpg",
      userName : "BinayKumar",
      image : "./Images/recipes/main-55.jpg",
      description : "Salad Recipe",
      time : "15 Mins",
      likes : "9",
      comments : "5",
      clock : "./Images/recipes/timer.png",
      likeImg : "./Images/recipes/like.png",
      category : "snacks",
      commentImg : "./Images/recipes/comment.png"
    },{
      userImage : "./Images/recipes/user-5.jpg",
      userName : "MyWeekendPlan",
      image : "./Images/recipes/main-66.jpg",
      description : "Peanut Butter Cups",
      time : "1 Hr",
      likes : "9",
      comments : "6",
      clock : "./Images/recipes/timer.png",
      likeImg : "./Images/recipes/like.png",
      category : "desserts",
      commentImg : "./Images/recipes/comment.png"
    }];
   
     let cardsOne = document.getElementById("cards-one");
     let cardsTwo = document.getElementById("cards-two");

     let filtering = document.getElementById("filter-food");
  
  filtering.addEventListener("change", () => {
    let filteredData = cards1.filter((element) => {
       if(element.category == filtering.value){
         return true;
       }
       else if(filtering.value == ""){
         return true;
       }
       else{
         return false;
       }
    })
    showData1(filteredData);
    cardsTwo.innerHTML = "";
  })
  

  function showData1(cards1){
    cardsOne.innerHTML = "";
    
    cards1.forEach((element) => {
        let mainDiv = document.createElement("div")
        mainDiv.setAttribute("class","mainDiv");
  
        let topDiv = document.createElement("div");
        topDiv.setAttribute("class","topDiv");
        let userImg = document.createElement("img");
        userImg.setAttribute("src",element.userImage);
        let userName = document.createElement("p");
        userName.innerText = element.userName;
        let vButton = document.createElement("button");
        vButton.innerText = "View";
        topDiv.append(userImg,userName,vButton);
  
        let midDiv = document.createElement("div");
        midDiv.setAttribute("class","midDiv");
        let image = document.createElement("img");
        image.setAttribute("src",element.image);
        let description = document.createElement("p");
        description.innerText = element.description;
        midDiv.append(image,description);
  
        let bottomDiv = document.createElement("div");
        bottomDiv.setAttribute("class","bottomDiv");

        let div1 = document.createElement("div");
        div1.setAttribute("class","div1");
        let clock = document.createElement("img");
        clock.setAttribute("src",element.clock);
        let time = document.createElement("p");
        time.innerText = element.time;
        div1.append(clock,time);
  
        let div2 = document.createElement("div");
        div2.setAttribute("class","div2");
        let likeDiv = document.createElement("div");
        likeDiv.setAttribute("class","likeDiv");
        let likeImg = document.createElement("img");
        likeImg.setAttribute("src",element.likeImg);
        let likes = document.createElement("p");
        likes.innerText = element.likes;
        likeDiv.append(likeImg,likes);
        let commentDiv = document.createElement("div");
        commentDiv.setAttribute("class","commentDiv");
        let commentImg = document.createElement("img");
        commentImg.setAttribute("src",element.commentImg);
        let comments = document.createElement("p");
        comments.innerText = element.comments;
        commentDiv.append(commentImg,comments);
        div2.append(likeDiv,commentDiv);
  
        bottomDiv.append(div1,div2);
  
        mainDiv.append(topDiv,midDiv,bottomDiv);
        cardsOne.append(mainDiv);
    });
  }

  function showData2(cards2){
    cardsTwo.innerHTML = "";
     
    cards2.forEach((element) => {
        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("class","mainDiv");
  
        let topDiv = document.createElement("div");
        topDiv.setAttribute("class","topDiv");
        let userImg = document.createElement("img");
        userImg.setAttribute("src",element.userImage);
        let userName = document.createElement("p");
        userName.innerText = element.userName;
        let vButton = document.createElement("button");
        vButton.innerText = "View";
        topDiv.append(userImg,userName,vButton);
  
        let midDiv = document.createElement("div");
        midDiv.setAttribute("class","midDiv");
        let image = document.createElement("img");
        image.setAttribute("src",element.image);
        let description = document.createElement("p");
        description.innerText = element.description;
        midDiv.append(image,description);
  
        let bottomDiv = document.createElement("div");
        bottomDiv.setAttribute("class","bottomDiv");
        let div1 = document.createElement("div");
        div1.setAttribute("class","div1");
        let clock = document.createElement("img");
        clock.setAttribute("src",element.clock);
        let time = document.createElement("p");
        time.innerText = element.time;
        div1.append(clock,time);
  
        let div2 = document.createElement("div");
        div2.setAttribute("class","div2");
        let likeDiv = document.createElement("div");
        likeDiv.setAttribute("class","likeDiv");
        let likeImg = document.createElement("img");
        likeImg.setAttribute("src",element.likeImg);
        let likes = document.createElement("p");
        likes.innerText = element.likes;
        likeDiv.append(likeImg,likes);
        let commentDiv = document.createElement("div");
        commentDiv.setAttribute("class","commentDiv");
        let commentImg = document.createElement("img");
        commentImg.setAttribute("src",element.commentImg);
        let comments = document.createElement("p");
        comments.innerText = element.comments;
        commentDiv.append(commentImg,comments);
        div2.append(likeDiv,commentDiv);
  
        bottomDiv.append(div1,div2);
  
        mainDiv.append(topDiv,midDiv,bottomDiv);
        cardsTwo.append(mainDiv);
    });
  }

  showData1(cards1);
  showData2(cards2);

  