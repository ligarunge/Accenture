function getAttributes() {
    let vhref = document.getElementById("w3r").href;
    console.log('The value of href is ' + vhref);
    let vhreflang = document.getElementById("w3r").hreflang;
    console.log('The value of hreflang is ' + vhreflang);
    let vrel = document.getElementById("w3r").rel;
    console.log('The value of rel is ' + vrel);
    let vtarget = document.getElementById("w3r").target;
    console.log('The value of target is ' + vtarget);
    let vtype = document.getElementById("w3r").type;
    console.log('The value of type is ' + vtype);
}
//easier way console.log('href:${link.href}');