window.onload = () =>{
    initialise();
}

var conversationOpened = false;

function initialise(){
    loadPageProfilePic();
    loadConversations();
    document.querySelector("#inbox-icon").addEventListener('click',loadconversations);
}

function loadPageProfilePic(){
    var profileURL = "";
    FB.api(
        `/${localStorage.getItem("pageId")}/profilepicture`,
        function (response) {
          if (response && !response.error) {
            profileURL = response.data.url;
          }
          else{
           profileURL = "https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg";
          }
        }
    );
    document.getElementById("page-pp").src = profileURL;
}

function loadconversations(){
    if(conversationOpened){
        conversationOpened = !conversationOpened;
        document.querySelector("#inbox-icon").style.background = "var(--background-blue)";
    }else{
        conversationOpened = !conversationOpened;
        document.querySelector("#inbox-icon").style.background = "var(--white)";
    }
}

