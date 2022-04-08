const getJokeBtn = document.querySelector(".get-jokes");
const inputField = document.getElementById("number");
const form = document.querySelector("form");
const jokesUlElement = document.querySelector(".jokes");

form.addEventListener('submit',function(event){
    event.preventDefault();
    const inputValue = inputField.value;
    if(!inputValue){
        alert('please fill out the input field');
        return;
    }
    const apiUrl = `https://api.icndb.com/jokes/random/${inputValue}`
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET',apiUrl,true);
    // Optional - Used for spinners/loaders
    xhr.onprogress = function(){
        // console.log('READYSTATE', xhr.readyState);
    }
    xhr.onerror = function() {
        console.log('Request error...');
    }
    xhr.onload = function(){
        // console.log('READYSTATE', xhr.readyState);
        // console.log(this.status,"status");
        if(xhr.readyState == 4 && this.status == 200){
           const data = JSON.parse(this.responseText);
            let output = '';

            if(data.type == 'success'){
                const jokesItems = data.value;
                jokesItems.forEach(function(singleJoke){
                    output += `<li>${singleJoke.joke}</li>`
                })
            }else{
                 output += `<li>something went wrong!</li>`
            }
            jokesUlElement.innerHTML = output;
        }
    }
    xhr.send();
})
