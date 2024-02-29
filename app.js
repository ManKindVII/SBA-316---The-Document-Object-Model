const btn = document.getElementById('btn'); 

const changeBTN = () => {
    btn.style.background = 'green'; 
    btn.style.color = 'yellow'
    btn.innerHTML = 'Complete'; 
}

btn.onclick = changeBTN; 


// const heading = document.getElementById('heading').innerHTML('<p>The world\'s most famous restaurant!</p>');

changeBTN.addEventListener('click', function(){
    
})

