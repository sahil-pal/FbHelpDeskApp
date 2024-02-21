import ApiClient from '../../utils/apiclient.mjs';
import { Toast } from '../../utils/toast.mjs';
import {AppConfig} from '../../utils/config.mjs';
 
window.onload = () => {
    document.querySelector("#login-btn").addEventListener('click',login);
};

async function login(){
  let requestBody = {
    "email" : document.querySelector("#email").value,
    "pwd" : document.querySelector("#pwd").value
  }
  loading();
  let result = await ApiClient.postRequest(`/user/login`,requestBody);
  let doc = await result.json();

  if(doc.userdoc != null){
    localStorage.setItem('emailid',doc.emailid);
    localStorage.setItem('isFBpageIntegrated',doc.isFBpageIntegrated);
    new Toast(doc.message,AppConfig.ToastType.Succes,3000,'./fb-connect.html');
  }
  else{
    new Toast(doc.message,AppConfig.ToastType.Danger,5000);
  }
  stopLoading();
}

function loading(){
  let submitBtn = document.querySelector("#login-btn");
  submitBtn.textContent = "Loading";
  submitBtn.style.backgroundColor="var(--black)"; 
}

function stopLoading(){
  let submitBtn = document.querySelector("#login-btn");
  submitBtn.textContent = "Login";
  submitBtn.style.backgroundColor="var(--background-blue)"; 
}

