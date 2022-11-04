const base = "https://self-passport-google.cwchan0212.repl.co/";

function login() {
    window.open(base + ":5000/auth/google", "_self");
}

function logout() {
    window.open(base + ":5000/logout", "_self");
}

function changeIt(par) {
    let uri = window.location.href;
    window.open(uri, "_self");
}
