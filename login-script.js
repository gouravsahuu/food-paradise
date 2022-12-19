let data = JSON.parse(localStorage.getItem("account-data"));
       
      let formD = document.querySelector("form");

      formD.addEventListener("submit", (e) => {
        e.preventDefault();
        
        data.forEach((element) => {
            if(formD.email.value === element.email && formD.password.value === element.password){
               alert("Log-In Success");
            }
            else{
               alert("Wrond Email/Password");
            }
        });
      })
      