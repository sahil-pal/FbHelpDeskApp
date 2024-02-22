import {Toast} from '../../utils/toast.mjs';
import {AppConfig} from '../../utils/config.mjs';

window.onload = () =>{
    initialise();
}

function initialise(){
    document.querySelector('#connect-btn').addEventListener('click',loginIntoFacebook);
    document.querySelector('#disconnect-btn').addEventListener('click',logoutOfFacebook);
    document.querySelector('#view-message-btn').addEventListener('click',moveToClientPanel);
    FB.init({
        appId      : '245090752019978',
        cookie     : true,                     // Enable cookies to allow the server to access the session.
        xfbml      : true,                     // Parse social plugins on this webpage.
        version    : 'v19.0'           // Use this Graph API version for this call.
    });
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
            localStorage.setItem("uid",uid);
            localStorage.setItem("accessToken",accessToken);
            showPageStatus();
            let div = document.querySelector('#connected');
            div.style.display = "block";
        }else {
            let div = document.querySelector('#connect-btn');
            div.style.display = "block";
        }
    });
}


function loginIntoFacebook(){
    FB.login(function(response) {
        console.log(response);
    }, {scope:"email,pages_manage_metadata, pages_manage_posts,pages_manage_engagement,pages_show_list,pages_messaging, pages_read_user_content"});
    //pages_manage_metadata, pages_manage_posts,pages_manage_read_engagement,pages_show_list
    reverseDisplay();

}

function logoutOfFacebook(){
    FB.logout(function(response) {
        console.log(response);
    });
    reverseDisplay();
}

function showPageStatus(){
    FB.api(
        `/${localStorage.getItem("uid")}/accounts`,
        function (response) {
          if (response && !response.error) {
            const doc = response.data[0];
            let pageToken = doc.access_token;
            let pageId = doc.id;
            let pageName = doc.name;
            localStorage.setItem("pageToken",pageToken);
            localStorage.setItem("pageId",pageId);
            let b = document.querySelector('#integrated-page-name');
            b.textContent = pageName;
          }
          else{
            new Toast(response.error.message,AppConfig.ToastType.Danger,5000);
          }
        }
    );
}

function moveToClientPanel(){
    window.location.href = './dashboard.html'
}

function reverseDisplay(){
    if(document.querySelector('#connected').style.display == "block"){
        document.querySelector('#connected').style.display = "none";
        document.querySelector('#connect-btn').style.display = "block";
    }
    else{
        document.querySelector('#connected').style.display = "block";
        document.querySelector('#connect-btn').style.display = "none";
    }
}

