
const base = "http://localhost:5000";

function login() {
    window.open("http://localhost:5000/auth/google", "_self");
}

function logout() {
    window.open("http://localhost:5000/logout", "_self");
}


function changeIt(par) {
    // par = par ? 1 : 0;
    let uri = window.location.href;
    // alert(uri)
    window.open(uri, "_self");
}
