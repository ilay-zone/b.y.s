function login() {
    $('body').load( "login.html");
}
const params = new URLSearchParams(window.location.search);
if (localStorage.getItem("username") != null) {
    logged(localStorage.getItem("username"));
}
else { 
    // Iterate over each parameter and log it to the console
    params.forEach(function(value, key) {
        console.log(key + value);
        localStorage.setItem(key, value)
        if (key == "username") {
            logged(value)
        }
    });
}
function logged(username) {
   let loginlink = document.getElementById("log");
   let logoutlink = document.getElementById("out");
   loginlink.removeAttribute("href");
   loginlink.innerHTML = `welcome, ${username}`;
   loginlink.style.textDecoration = "none";
   //logoutlink.onclick = "logout()";
   logoutlink.href = "logout.html"
   logoutlink.innerHTML = `log out`;
}
function logout() {
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    location.reload();
}