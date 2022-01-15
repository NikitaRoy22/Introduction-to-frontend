document.getElementById("id1").addEventListener("click",()=>{
    let a=document.getElementById("count").innerHTML;
    a=Number(a);
    a=a+1;
    document.getElementById("count").innerHTML=a;
})