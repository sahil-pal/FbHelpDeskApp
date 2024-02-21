import ApiClient from '../../utils/apiclient.mjs';
import { Toast } from '../../utils/toast.mjs';
import {AppConfig} from '../../utils/config.mjs';

window.onload = () => {
    document.querySelector("#register-btn").addEventListener('click',register);
};

async function register(){
  loading();
  let requestBody = {
    "fullname" : document.querySelector('#fullname').value,
    "email" : document.querySelector("#email").value,
    "pwd" : document.querySelector("#pwd").value
  }
  let result = await ApiClient.postRequest(`/user/register`,requestBody);
  let doc = await result.json();
  localStorage.setItem('emailid',doc.emailid);
  localStorage.setItem('isFBpageIntegrated',doc.isFBpageIntegrated);
  new Toast(doc.message,AppConfig.ToastType.Succes,5000,'./fb-connect.html');
  stopLoading();
  
}

function loading(){
  let submitBtn = document.querySelector("#register-btn");
  submitBtn.textContent = "Loading";
  submitBtn.style.backgroundColor="var(--black)"; 
}

function stopLoading(){
  let submitBtn = document.querySelector("#register-btn");
  submitBtn.textContent = "Sign Up";
  submitBtn.style.backgroundColor="var(--background-blue)"; 
}