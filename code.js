

document.getElementById('formAction').addEventListener("submit", function(e){

    var firstInput = document.getElementById('firstInput').value ;
    var secondInput = document.getElementById('secondInput') .value ;

// for username and email validation
    if(firstInput === 'shakil' || firstInput === 'shakilbabu404@gmail.com'){
        
    }else{
        document.getElementById('showExpression').innerHTML = '<h6 class="alert-danger animated shake" style="color:red;">Incorrect Username or email </h6>' ;
    }

    // for password

    if(secondInput === 'shakilBaBu404'){
       
    }else{
        document.getElementById('showExpression').innerHTML = '<h5 class="alert-danger animated shake" style="color:red">Password is not correct! </h5>' ;
    }

// for emty input value 
var f = document.getElementById('firstInput') ;
f.value = '' ;
var g= document.getElementById('secondInput') ;
g.value = '';


    e.preventDefault();
})


// for signUp


document.getElementById('firstName').addEventListener('focus', function () {  
    document.querySelector('.firstName').style.display = 'block';

  
})

document.getElementById('lastName').addEventListener('focus', function () {  
    document.querySelector('.lastName').style.display = 'block';

  
})
document.getElementById('email').addEventListener('focus', function () {  
    document.querySelector('.email').style.display = 'block';

   
})
document.getElementById('password').addEventListener('focus', function () {  
    document.querySelector('.pass').style.display = 'block';

   
})


//singnUp form

document.getElementById('signUpForm').addEventListener('submit', function(e){

    var firstname = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var password = document.getElementById('password');


    if(firstname.name === 'first'){
        var namePattern = /^([a-zA-Z ]){2,30}$/ ;
        if(!namePattern.test(firstname.value)){
            document.getElementById('showError').innerHTML = '<h5 style="color:red" class="alert-danger animated shake">First name is not valid !</h5>' ;
        }

        e.preventDefault();
    }
    
    if(lastName.name === 'last'){
        var namePatternd = /^([a-zA-Z ]){2,30}$/ ;
        if(!namePatternd.test(lastName.value)){
            document.getElementById('showError').innerHTML = '<h5 class="alert-danger animated shake" style="color:red">Last name is not valid !</h5>' ;
        }

    
        e.preventDefault();

    }
    
    if(email.name === 'email'){
        var emailPattren = /\S+@\S+\.\S+/;

        if(!emailPattren.test(email.value)){
            document.getElementById('showError').innerHTML = '<h5 style="color:red" class="alert-danger animated shake">Invalid email !</h5>' ;
        }

        e.preventDefault();
    }


    if(password.name === 'pass'){
        
        if((password.value).length < 8){
            document.getElementById('showError').innerHTML = '<h5 style="color:red" class="alert-danger animated shake">Password to short ! must be 8 character</h5>' ;
          }else if(!('!' || '@' || '#' || '$' || '%' || '^' || '&' || '*' )in password.value){

        document.getElementById('showError').innerHTML = '<h5 style="color:red" class="alert-danger animated shake">Password is to weak!</h5>' ;
      }else{

      }
    }


    e.preventDefault();
})



document.getElementById('createAccount').addEventListener('click', function (e) { 
    document.querySelector('.mainSection').style.display ='none';

    document.querySelector(".signUpSection").style.display='block';



    e.preventDefault();
 })