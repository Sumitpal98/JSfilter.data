var a=1;
var x=document.getElementsByClassName("a");
x[0].onclick=function(){
    let data=document.getElementById("abc");
    if(data.type=="password"){
        data.type="text";
        x[0].innerText="hide"
    }
    else{
        data.type="password";
        x[0].innerText="show" 
    }
}