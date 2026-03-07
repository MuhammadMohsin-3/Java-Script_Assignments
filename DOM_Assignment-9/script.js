let userList = document.getElementById("userList");
let loading = document.getElementById("loading");
let details = document.getElementById("details");
let search = document.getElementById("search");
let reloadBtn = document.getElementById("reloadBtn");

let usersData = [];

// fetch API data

function fetchUsers(){

loading.textContent = "Loading users...";

fetch("https://jsonplaceholder.typicode.com/users")

.then(function(response){
return response.json();
})

.then(function(data){

usersData = data;
loading.textContent = "";

displayUsers(usersData);

})

.catch(function(){
loading.textContent = "Failed to fetch data";
});

}


// show users in list

function displayUsers(users){

userList.innerHTML="";

users.forEach(function(user){

let li = document.createElement("li");

li.textContent = user.name;

li.addEventListener("click",function(){

details.innerHTML = `
<h3>${user.name}</h3>
<p><strong>Email:</strong> ${user.email}</p>
<p><strong>Phone:</strong> ${user.phone}</p>
<p><strong>Website:</strong> ${user.website}</p>
`;

});

userList.appendChild(li);

});

}


// search filter

search.addEventListener("input",function(){

let value = search.value.toLowerCase();

let filtered = usersData.filter(function(user){

return user.name.toLowerCase().includes(value);

});

displayUsers(filtered);

});


// reload button

reloadBtn.addEventListener("click",function(){

fetchUsers();

});


// load users when page opens

fetchUsers();