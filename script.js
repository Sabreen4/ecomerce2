var f= document.getElementById("slide");
var r=document.getElementById("fav");
var c=document.getElementById("cart");
var item=document.getElementById("add");
var bluri=document.getElementsByTagName("body");
var kid=document.getElementById("kids").value;
var b=document.getElementById("int");
var pri=document.getElementById("price");
var total=document.getElementById("tot");
var quant=document.getElementById("qua");
var des=document.getElementById("par");
var amn=document.getElementById("prices");
var quatyt=document.getElementById("quant");



function sideshow() 
  {
    
    f.style.display="block";
    
  }
function closed()
  {
    f.style.display="none";
  }
  function color()
  {
    r.style.color="red";
  }
  function removes(event)
  {
    r.style.color="black";
  }

  
  function cart()
  {
    alert("item added to the cart");

  }
  function cartnot()
  {
    alert("item removed from the cart");

  }
  var orderDiv = document.getElementById("orderd");
   var body=document.body;
   function sub()
   {
      orderDiv.style.display="none";
      body.style.opacity="1";
      alert("order placed Successfully");

   }
   function order(name,price)
   {
     
     body.style.opacity="0.8";
     body.style.position="absolute";
     body.style.zIndex="1";
     orderDiv.style.display="inline";
     orderDiv.style.position="absolute";
     orderDiv.style.zIndex="2";
     b.value=name;
     pri.value=price;
     var j=quant.value;
     total.value=price*j;
     myorder(name,price,j);
     function myorder(name,price,j)
     {
         des.value=name;
         amn.value=price;
         quatyt.value=j;
     }

   }
   var t=document.getElementById("close");
   function closes()
  {
    orderDiv.style.display="none";
    body.style.opacity="1";
  }
  let availableKeywords=[
    'KIDS',
    'MENS',
    'WOMENS'
  ];
  const resultbox=document.querySelectorAll("#product");
  const inputbox=document.getElementById("search");
  inputbox.onkeyup=function(){
    let result=[];
    let input=inputbox.value;
    if(input.length)
      {
        result=availableKeywords.filter((keyword)=>{
          return keyword.toLowerCase().includes(input.toLowerCase());

        });
        console.log(result)
      }
        display(result);
        if(!result.length){
          resultbox.innerHTML="";
        }
  }
  function display(result)
  {
    const content=result.map((list)=>{
      return "<li onclick=selectInput(this)>"+list+"</li>";
    });
     resultBox.innerHTML="<ul>"+content.join('')+"</ul>"
  }
  function selectInput(list)
  {
    inputbox.value=list.innerHTML;
    resultbox.innerHTML="";
  }