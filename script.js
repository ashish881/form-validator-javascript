let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let form = document.getElementById('form');

//Sow input error message

function showError(input,message){
    const formControl = input.parentElement; 
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
    console.log(formControl)
}

function showSuccess(input){
    const formControl = input.parentElement; 
    formControl.className = 'form-control success';
}


//Check Email is valid

// function isValidEmail(email){
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(input.value.trim())){
          showSuccess(input);
      }else{
          showError(input, 'Email is not Valid')
      }
}


function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,   `${getFieldName(input)} is Required `)
        }else{
            showSuccess(input)
        }
        console.log(input)
    })
}


function checkLength(input,min,max){
    console.log(input)
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}

//Paaword Match

function checkPasswordMatch(input1,input2){
if(input1.value !== input2.value){
    showError(input2,'Password do not match')
}
}

//Get Field Namme 
 function getFieldName(input){
   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
 }


//Evet Listeer
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username,3,15)
    checkLength(password,6,25)
    checkEmail(email)
    checkPasswordMatch(password,password2)

//    if(username.value === ''){
//       showError(username,'Username is required');
//    } else{
//        showSuccess(username);
//    }
   
//    if(email.value === ''){
//     showError(email,'Email is required');
//    } else if(!isValidEmail(email.value)){
//        showError(email, 'Email is not valid')

//  } else{
//      showSuccess(email);
//  }

//  if(password.value === ''){
//     showError(password,'Password is required');
//  } else{
//      showSuccess(password);
//  }

//  if(password2.value === ''){
//     showError(password2,'Password2 is required');
//  } else{
//      showSuccess(password2);
//  }
})

