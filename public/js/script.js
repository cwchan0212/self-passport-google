const base = "https://self-passport-google.cwchan0212.repl.co/";

function login() {
    window.open(base + "/auth/google", "_self");
}

function logout() {
    window.open(base + "/logout", "_self");
}

function changeIt(par) {
    let uri = window.location.href;
    window.open(uri, "_self");
}
