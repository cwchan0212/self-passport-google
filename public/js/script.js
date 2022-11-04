const base = "http://localhost";
const base2 = "https://self-passport-google.cwchan0212.repl.co";

function login() {
    let uri = base + ":5000/auth/google";
    window.open(uri, "_self");
}

function logout() {
    let uri = base + ":5000/logout";
    window.open(uri, "_self");
}

function changeIt(par) {
    let uri = window.location.href;
    window.open(uri, "_self");
}
