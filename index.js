function fun1(){
    let a = document.getElementById('inputField1').value;
    let b = document.getElementById('inputField2').value;
    let c = document.getElementById('inputField3').value;

    let w = parseInt(a);
    let x = parseInt(b);
    let y = parseInt(c);
    
    
    let z = w + (w * x * y) / 100  ;
    
    let z2 = z/12;
    
    let z3 = (w * x * y) / 100 ;
    
    
    document.getElementById('mma').innerHTML = "Your Monthly EMI will be ₹" + z2.toFixed(2);
document.getElementById('tpm').innerHTML = "Totle Amount you have to pay is ₹" + z.toFixed(2);
document.getElementById('tim').innerHTML = "You will pay ₹" + z3.toFixed(2) + " as Interest ";

document.getElementById("result").style.backgroundColor = "#54f7b7";
   
}

function fun2(){
    document.getElementById('inputField1').value = " ";
    document.getElementById('inputField2').value = " ";
    document.getElementById('inputField3').value = " ";
    document.getElementById('mma').innerHTML = " ";
    document.getElementById('tpm').innerHTML = " ";
    document.getElementById('tim').innerHTML = " ";

}

