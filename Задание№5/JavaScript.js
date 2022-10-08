function onClick() {
  let x, y, r;
  x=document.getElementById("kol").value;
  y=document.getElementById("price").value;
  r=document.getElementById("result")
  x=parseInt(x);
  y=parseInt(y);
  r.innerHTML=x*y;
  return false;
}

function prov(){
  let a,b,ex, clear;
  clear=document.getElementById("result");
  clear.innerHTML="";
  a=document.getElementById("kol").value;
  b=document.getElementById("price").value;
  ex=/\d+/;
  a=ex.test(a);
  b=ex.test(b);
  if(a==true && b==true){
    onClick();
  }
  else{
    alert("Введенные данные некорректны!")
  }
}

window.addEventListener('DOMContentLoaded', function(){
  let c=document.getElementById("my-button");
  c.addEventListener("click", prov);
});
