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
            const date = new Date();
            const app1 = document.createElement("div");
            app1.classList.add('bg-gray-300');
            app1.innerHTML = `
            <h4 class="text 2xl font bold m-7 rounded-md shadow-md py-5 text-black"> ${inputedValueNUm} BDT donateed for Noakhali at <br> ${date} </h4>
            `
            document.getElementById('card-container').appendChild(app1)
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
            const date = new Date();
            const app1 = document.createElement("div");
            app1.classList.add('bg-gray-300');
            app1.innerHTML = `
            <h4 class="text 2xl font bold m-7 rounded-md shadow-md py-5 text-black"> ${inputedValueNUm} BDT donateed for Feni at <br> ${date} </h4>
            `
            document.getElementById('card-container').appendChild(app1)
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


// card 333333333333333

document.getElementById('donateBtn8').addEventListener('click', function(){
    const inputedValue = document.getElementById('dnt-input8').value;
    if(inputedValue >= 1 && isNaN(inputedValue) === false) {
        const inputedValueNUm = parseFloat(inputedValue)
        const oldValue = document.getElementById('old-donate').innerText;
        const oldValueNum = parseFloat(oldValue);
        const newValue = oldValueNum - inputedValueNUm;
        const donated = document.getElementById('donaded8').innerText;
        const donatedNum = parseFloat(donated);
        const totalDonated = donatedNum + inputedValueNUm;
        if(oldValueNum < inputedValueNUm){
            const element = document.getElementById('mod8');
            element.classList.remove("hidden");
        }
        else{
            document.getElementById('old-donate').innerText = newValue;
            document.getElementById('donaded8').innerText = totalDonated;
            const element = document.getElementById('mod9');
            
            element.classList.remove("hidden");
            const date = new Date();
            const app1 = document.createElement("div");
            app1.classList.add('bg-gray-300');
            app1.innerHTML = `
            <h4 class="text 2xl font bold m-7 rounded-md shadow-md py-5 text-black"> ${inputedValueNUm} BDT donateed for Noakhali at <br> ${date} </h4>
            `
            document.getElementById('card-container').appendChild(app1)

        }
        
        
        
    }
    else{
        const element = document.getElementById('mod8');
            element.classList.remove("hidden");

    }


})
document.getElementById('try-agn8').addEventListener('click', function(){
    const elements = document.getElementById('mod8');
    elements.classList.add("hidden");
})
document.getElementById('try-agn9').addEventListener('click', function(){
    const elements = document.getElementById('mod9');
    elements.classList.add("hidden");
})

document.getElementById('hstry').addEventListener('click', function(){
    const ok = document.getElementById('dntMain');
    ok.classList.add("hidden")
    const ok2 = document.getElementById('card-container')
    ok2.classList.remove("hidden")
})
document.getElementById('donation').addEventListener('click', function(){
    const ok = document.getElementById('dntMain');
    ok.classList.remove("hidden")
    const ok2 = document.getElementById('card-container')
    ok2.classList.add("hidden")
})










