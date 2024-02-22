**<h1> FbHelpdeskApp </h1>**
This is an assignment project. User can use 'FB helpdesk' to connect their FB account and listen to all messages. Then they will invite their internal team members on the Helpdesk app so they can share the workload. And team members can reply to the messages from the helpdesk.

#### Live URL : https://fbhelpdeskapp-production.up.railway.app/

## How to run the App
- Fork or download the project and extract it.
- Run the `npm i` command to install the required packages
- Run the `npm start` command to run the project.

## Teachnology used
- Backend : ExpressJs for webservices and integration with web hooks
- Frontend : VanillaJs
- Database : MongoDB
- Api : Fb login js sdk, webhooks and messenger/page endpoints
-  **Note** : Panel page is not complete, since _public_profile_ permission was currently inaccessible ( impt to get user_details from userId : that's why UI was incomplete ), Else complete flow is ready from fb -> backend server -> database ( screen shots attached below )

## Features
- Login/Registration of user
- Page integration using fb login sdk.
- Integrated to webhooks to get live updates on messages and posts of page.

## How it looks like 
<img src="https://github.com/sahil-pal/FbHelpDeskApp/assets/69889824/d7c504b5-8f80-49ac-8171-f4ce94180a76" width="500" height="350"> 
<img src="https://github.com/sahil-pal/FbHelpDeskApp/assets/69889824/0dd4e15c-6e9e-4a81-8ab1-088943350644" width="500" height="350"> 
<img src="https://github.com/sahil-pal/FbHelpDeskApp/assets/69889824/a8233b3c-08c2-4ee3-ba5c-c0012acafea7" width="500" height="350"> 
<img src="https://github.com/sahil-pal/FbHelpDeskApp/assets/69889824/0172d263-b465-4c70-8102-57975774f98e" width="500" height="350"> 
<img src="https://github.com/sahil-pal/FbHelpDeskApp/assets/69889824/688446d7-cd4c-49e2-8cba-042a43c2845f" width="500" height="350"> 
<img src="https://github.com/sahil-pal/FbHelpDeskApp/assets/69889824/2c33c494-e8db-4bad-a0a7-12f3ba4faca5" width="500" height="350"> 
<img src="https://github.com/sahil-pal/FbHelpDeskApp/assets/69889824/437835f1-6727-462a-a790-0d5bbcb27985" width="500" height="350"> 
<img src="https://github.com/sahil-pal/FbHelpDeskApp/assets/69889824/950c8fa4-c037-43fc-b457-5478a2351d0b" width="500" height="350"> 
<img src="https://github.com/sahil-pal/FbHelpDeskApp/assets/69889824/6c01774c-e53e-4815-ad56-1d9e64ef716e" width="500" height="350"> 
<img src="https://github.com/sahil-pal/FbHelpDeskApp/assets/69889824/5196f567-79a1-4f9c-a770-6d8c924eba65" width="500" height="350">
<img src="https://github.com/sahil-pal/FbHelpDeskApp/assets/69889824/4485d010-a099-446e-ad55-0d19a68f874a" width="500" height="350">














