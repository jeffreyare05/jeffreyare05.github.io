function changeText()
{
  
  Var id=document.getElementsByName("button")[0].id;
  if(id==1)
  {
    document.getElementById("text").innerHTML = "I hope you had fun but im happy you're coming back I wanna give you a hug lol"; 
    document.getElementsByName("button")[0].id=0;
  }
}
