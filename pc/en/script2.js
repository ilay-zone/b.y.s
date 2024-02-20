logger = console.log;
function removeSpaces(input) {
    input.value = input.value.replace(/\s/g, ''); // Removes all spaces
}
document.getElementById('showPassword').addEventListener('change', function() {
    var passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text'; // Change input type to text
    } else {
        passwordField.type = 'password'; // Change input type to password
    }
});
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    logger(document.URL)  
    logger(username)
    logger(password) 
    //let folderplace = document.URL - "pc/en/login.html"
    //folderplace += "users/" + username;
    
}
function create(folderplace) {
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    fso.CreateFolder(folderplace);
    fso = null;
}
if (localStorage.getItem("username") != null) {
    
}