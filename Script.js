
const oldDiv = document.querySelector(".loading-state");
const btnJoke = document.querySelector(".joke-generator");

function generateJoke (){
   const xhr = new XMLHttpRequest();
   xhr.open("GET","https://api.chucknorris.io/jokes/random");
   
   xhr.onreadystatechange = function(){
   if(this.readyState === 4 && this.status === 200){
      
      oldDiv.innerHTML = JSON.parse(this.responseText).value;
     oldDiv.style.fontSize = "20px";
     
 }
 else{
   oldDiv.innerHTML = "Something went wrong try again";
 }
};
xhr.send();
}
btnJoke.addEventListener("click",generateJoke);
document.addEventListener("DOMContentLoaded",generateJoke);
















/*const xhr = new XMLHttpRequest();
//xhr.open("GET","./movie.json");
xhr.open("GET","https://api.github.com/users/bradtraversy/repos");
// readyState has 5 possible values
// - 0 request not initialised
// - 1 server connection established
// - 2 request recievd
// - 3 processing request
// - 4 request finished and response is ready
// From an api(AJAX)
xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
       //console.log(JSON.parse(this.responseText));
       const data = JSON.parse(this.responseText);
       data.forEach(repo =>{
          const li = document.createElement("li");
          li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
          document.querySelector("#results").appendChild(li);
       })
      }
  }
  
  xhr.send();
  //From a file(AJAX)
// xhr.onreadystatechange = function(){
//   if(this.readyState === 4 && this.status === 200){
//      //console.log(JSON.parse(this.responseText));
//      const data = JSON.parse(this.responseText);
//      data.forEach(movie =>{
//         const li = document.createElement("li");
//         li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
//         document.querySelector("#results").appendChild(li);
//      })
//     }
// }

// xhr.send();








//function toggle(e){
   // e.target.classList.toggle("danger");
//}

//document.querySelector("button").addEventListener("click",toggle);
// const posts = [{title: "Post One",body:"This is post one"},
// {title: "Post Two",body:"This is post Two"}
// ];
// function createPost(post,cb){
//     setTimeout(()=>{
//     posts.push(post);
//     cb();
//     },2000)
// }
// function getPosts(){
//     setTimeout(()=>{
//         posts.forEach(function(post){
//       const div = document.createElement("div");
//       div.innerHTML = `<strong>${post.title}</strong>-${post.body}`;
//       document.querySelector("#posts").appendChild(div);
//         })
//     },1000);
// }
// createPost({title:"Post Three",body:"This is post Three"},getPosts);



















//setTimeout(changeText(),2000);
/*function changeText(){
    document.querySelector("h1").textContent = "Hello from Callback";
}
const timerId = setTimeout(changeText,3000);
document.querySelector("#cancel").addEventListener("click",()=>{
   console.log(timerId);
   clearTimeout(timerId);
   console.log("Timer Cancelled");
});*/
 /*let intervalID;
 function startChange(){
  if(!intervalID){
    intervalID = setInterval(changeColor,1000);
  }
 }
 function changeColor(){
    if(document.body.style.backgroundColor !== "black"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
 }
 function stopChange(){
    clearInterval(intervalID);
 }
 document.getElementById("Start").addEventListener("click",startChange);
 document.getElementById("Stop").addEventListener("click",stopChange);*/