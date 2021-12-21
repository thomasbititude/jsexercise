//5. Write a JavaScript program to mock a calculator 


btnclick = (val) =>{
     document.getElementById("result").value =   document.getElementById("result").value+val;
}
ans = () =>{
      answer = eval(document.getElementById("result").value);
      console.log(answer);
      document.getElementById('result').value = answer;
}
clearDisplay = () =>{
     document.getElementById('result').value = "";
   
}