var $ = function (id) {
    return document.getElementById(id);
}
var stateCodeLookup = function (stateCode) {
	var states = ["CA" , "WA" , "OR" , "NV" , "NM" , "AZ" , "WY" , "MT"];
    states.push("TX")
    stateCode =stateCode.toUpperCase();
    // for (let i=0 ; i<states.length; i++){
    //     if(states[i] == stateCode){
    //         return true;
    //     }
        for (var index in stateCode){
            if(stateCode[index]){
                return true;

        }
        }
    return false;
}
var joinList = function () {
	var emailAddress1 =$("email_address1").value;
    var emailAddress2 =$("email_address2").value;
    var isValid = true;

    if(emailAddress1 == ""){
        $("email_address1_error").firstChild.nodeValue ="This field is required.";
        isValid = false;
    }
    else{
        $("email_address1_error").firstChild.nodeValue ="";
    }

    
    if(emailAddress2 == ""){
        $("email_address2_error").firstChild.nodeValue ="This field is required.";
        isValid = false;
    }
    else if (emailAddress1 !== emailAddress2){
        $("email_address2_error").firstChild.nodeValue ="This entry must equal second entry.";
        isValid=false;
    }
    else{
        $("email_address2_error").firstChild.nodeValue ="";
    }
    if($("first_name").value ==""){
        $("first_name_error").firstChild.nodeValue="this field is required.";
        isValid = false;
    }
    else{
        $("first_name_error").firstChild.nodeValue="";
    }
     
    var stateCode =$("state_code").value;
    if(!stateCodeLookup(stateCode)){
        $("state_code_error").firstChild.nodeValue="state code is invalid.";
        isValid = false;
    }
    else{
        $("state_code_error").firstChild.nodeValue= "";
    }
    if (isValid){
        $("email_form").submit();
    }
   
}

window.onload = function () {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
}
