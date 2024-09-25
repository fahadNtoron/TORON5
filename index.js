document.getElementById('donateBtn').addEventListener('click', function(){
    const inputedValue = document.getElementById('dnt-input').value;
    if(inputedValue >= 1 && isNaN(inputedValue) === false) {
        const inputedValueNUm = parseFloat(inputedValue)
        const oldValue = document.getElementById('old-donate').innerText;
        const oldValueNum = parseFloat(oldValue);
        const newValue = oldValueNum - inputedValueNUm;
        const donated = document.getElementById('donaded').innerText;
        const donatedNum = parseFloat(donated);
        const totalDonated = donatedNum + inputedValueNUm;
        if(oldValueNum < inputedValueNUm){
            const element = document.getElementById('mod');
            element.classList.remove("hidden");
        }
        else{
            document.getElementById('old-donate').innerText = newValue;
            document.getElementById('donaded').innerText = totalDonated;
            const element = document.getElementById('mod1');
            element.classList.remove("hidden");
        }
        
        
        
    }
    else{
        const element = document.getElementById('mod');
            element.classList.remove("hidden");

    }


})
document.getElementById('try-agn').addEventListener('click', function(){
    const elements = document.getElementById('mod');
    elements.classList.add("hidden");
})
document.getElementById('try-agn1').addEventListener('click', function(){
    const elements = document.getElementById('mod1');
    elements.classList.add("hidden");
})







// card 22222222222222222222222
document.getElementById('donateBtn5').addEventListener('click', function(){
    const inputedValue = document.getElementById('dnt-input5').value;
    if(inputedValue >= 1 && isNaN(inputedValue) === false) {
        const inputedValueNUm = parseFloat(inputedValue)
        const oldValue = document.getElementById('old-donate').innerText;
        const oldValueNum = parseFloat(oldValue);
        const newValue = oldValueNum - inputedValueNUm;
        const donated = document.getElementById('donaded5').innerText;
        const donatedNum = parseFloat(donated);
        const totalDonated = donatedNum + inputedValueNUm;
        if(oldValueNum < inputedValueNUm){
            const element = document.getElementById('mod5');
            element.classList.remove("hidden");
        }
        else{
            document.getElementById('old-donate').innerText = newValue;
            document.getElementById('donaded5').innerText = totalDonated;
            const element = document.getElementById('mod6');
            element.classList.remove("hidden");
        }
        
        
        
    }
    else{
        const element = document.getElementById('mod5');
            element.classList.remove("hidden");

    }


})
document.getElementById('try-agn5').addEventListener('click', function(){
    const elements = document.getElementById('mod5');
    elements.classList.add("hidden");
})
document.getElementById('try-agn6').addEventListener('click', function(){
    const elements = document.getElementById('mod6');
    elements.classList.add("hidden");
})












