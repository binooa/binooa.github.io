$(	document).ready(function() {
        Enable_Cookie();
 // PageMethods.WebMethodGetUserID(OnSuccess);
     // CheckEnablePopUp();
}); 


//        function OnSuccess(response,userContext,methodName){
//           if (response == 0){
//                var ServerPath=window .location.protocol + "//"+ window .location .host;
//                ServerPath = ServerPath +"/Error_Pages/Error_Session_TimeOut.aspx";
//                window .location .assign(ServerPath );
//           }
//        }
  
function Enable_Cookie(){
   if(navigator .cookieEnabled){
         
    }
    else {
      alert ("Please Enable Cookie on Browser Settings...");
      window . location .href="\Error_Pages/Error_Enable_Cookie_Frm.aspx";
      return false ;
    }
}
    
    
function CheckEnablePopUp(){
         var win= window.open("https://www.google.co.in/?gfe_rd=ctrl&ei=7a4mU4SEOtaCuAS2mIHYCg&gws_rd=cr#q=set%20cookies%20enable%20in%20browser");
         if (win ==null ){
            alert ("Please disable Popup Blocker");
         }
}