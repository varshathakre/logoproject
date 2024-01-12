document.getElementById("rd1").addEventListener("click",mytheam1);
document.getElementById("rd2").addEventListener("click",mytheam2);
document.getElementById("rd3").addEventListener("click",mytheam3);
document.getElementById("rd4").addEventListener("click",mytheam4);
document.getElementById("myclr").addEventListener("change",color);
document.getElementById("shd").addEventListener("click",shadow);
document.getElementById("shd1").addEventListener("click",shadow1);


function mytheam1()
{
    let data=document.getElementById("txt1").value;
    document.getElementById("boxData").innerHTML=data;
    let dataobj=document.getElementById("boxData");
    dataobj.style.fontFamily="Arial Black";
}
function mytheam2()
{
    let data=document.getElementById("txt1").value;
    document.getElementById("boxData").innerHTML=data;
    let dataobj=document.getElementById("boxData");
    dataobj.style.fontFamily="Fixedsys";
}

function mytheam3()
{
    let data=document.getElementById("txt1").value;
    document.getElementById("boxData").innerHTML=data;
    let dataobj=document.getElementById("boxData");
    dataobj.style.fontFamily="Segoe Print";
}
function mytheam4()
{
    let data=document.getElementById("txt1").value;
    document.getElementById("boxData").innerHTML=data;
    let dataobj=document.getElementById("boxData");
    dataobj.style.fontFamily="Impact";
}

function color()
{
    let dataobj=document.getElementById("boxData");
    dataobj.style.color=document.getElementById("myclr").value;


}
function shadow()
{
    let dataoj=document.getElementById("boxData");
    dataoj.style.textShadow="6px 8px 6px pink";
}
function shadow1()
{
    let dataobj=document.getElementById("boxData");
    dataobj.style.textShadow="";
}

