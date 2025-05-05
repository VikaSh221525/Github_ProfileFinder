// "https://api.github.com/users/VikaSh221525/repos" -> for repositries
let Sbtn = document.querySelector(".search_button");
let input = document.querySelector(".user_input");
let card = document.querySelector(".card");

let frm = document.querySelector("#github-form");
frm.addEventListener("submit", (event)=>{
    event.preventDefault();
})

function getprofile(username){
    return fetch(`https://api.github.com/users/${username}`).then((res)=>{
        if(!res.ok) throw new Error("User Not Found");
        return res.json();
    })  
}

function getrepos(username){
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then((res)=>{
        if(!res.ok) throw new Error("User Not Found");
        return res.json();
    })  
}
function DecorateProfile(details){
    console.log(details);
    
    let data = `<div class="w-24 h-24 bg-gray-200 rounded-full border-2 border-blue-500 animate-pulse"><img class="w-full h-full object-cover rounded-full" src="${details.avatar_url}" alt=""></div>
        <h2 class="text-lg font-semibold text-gray-700">${details.login}</h2>
        <p class="text-sm text-gray-500">@${details.login}</p>
        <p class="text-gray-600">Bio: ${details.bio ? details.bio : "You don't have your bio"}</p>
        <div class="flex justify-center gap-4 mt-2">
        <span class="text-sm text-gray-700">👥 ${details.followers} followers</span>
        <span class="text-sm text-gray-700">📦 ${details.public_repos} repos</span>
        </div>`
    
    card.innerHTML = data;
}



Sbtn.addEventListener("click",()=>{
    let userinput = input.value.trim();  //.trim() -> faltu spaces hata deta h-> vikash..... //ye ky nhi karta -> beech ke spaces nhi hata ta-> vikash    sharma  
    if(userinput.length>0){
        getprofile(userinput).then((data)=>{
            DecorateProfile(data);
            
        })
    }
    else{
        alert("Enter Input");
    }
})

