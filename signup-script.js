let formData = document.querySelector("form");
  
  let data = JSON.parse(localStorage.getItem("account-data"));
  if(data == null){
    data = [];
  }

  formData.addEventListener("submit", (e) => {
       e.preventDefault();

       let userData = {
        name : formData.name.value,
        email : formData.email.value,
        password : formData.password.value
       };
       data.push(userData);
       localStorage.setItem("account-data",JSON.stringify(data));
  })