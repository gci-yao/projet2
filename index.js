// document.querySelector("h1").style.color = "blue";

const ring = () => {
    const audio = new Audio();
    audio.src = "./Enter.mp3";
    audio.play();
};
// ring();

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 130) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
    mousemove.style.background = "yellow";
    mousemove.style.border = "1px dashed white";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.background = "white";
    mousemove.style.border = "3px dashed white";
});

const connexion = document.getElementById("btn-w");
const connexx = document.querySelector(".connexx");
const connexio = document.querySelector(".connexio");
const footer = document.querySelector(".footer");
const ema = document.getElementById("ema");
const pass = document.getElementById("pass");
const btnConnex1 = document.getElementById("btn-connex1");
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const body = document.querySelector("body");
const conex = document.querySelector(".conex");
const coex = document.querySelector(".coex");
const btnR = document.getElementById("btn-r");
const btnConex1 = document.getElementById("btn-conex1");
const btnCoex1 = document.getElementById("btn-coex1");
const a = document.getElementById("a");
const btni = document.getElementById("btn-i");
const btn222 = document.getElementById("btn-222");
const bac2 = document.querySelector(".bac2");
const btnt10 = document.getElementById("btnt1-0");
const boxt10 = document.querySelector(".boxt1-0");
const achat = document.querySelector(".achat");
const bac222 = document.querySelector(".bac222");
const boxt = document.querySelector(".boxt");
const boxt0 = document.querySelector(".boxt0");
const boxt1 = document.querySelector(".boxt1");
const number2 = document.querySelector(".number2");
const mail = document.querySelector('input[type="connex"]');
const mp = document.querySelector('input[type="connex0"]');
const number222 = document.querySelector(".number222");
const mail1 = document.querySelector('input[type="conex"]');
const mp1 = document.querySelector('input[type="conex0"]');
const mp2 = document.querySelector('input[type="coex"]');
const footer1 = document.querySelector(".footer1");
const keypress = document.querySelector(".keypress");
const box = document.querySelector(".box");
const inputBanner = document.querySelector('input[type="banner"]');
const boxi = document.querySelector(".boxi");

let email;
let number;
let email1;
let password;
let password1;
let banner1;

connexion.addEventListener("click", (e) => {
    e.preventDefault();
    connexx.classList.add("c1connex");
    connexx.style.position = "absolute";
    connexion.classList.add("connex1");
    connexion.style.color = "white";
    footer.classList.add("c2connex");
    conex.style.visibility = "hidden";
});

ema.addEventListener("click", () => {
    ema.style.border = "2px dashed white";
});
pass.addEventListener("click", () => {
    pass.style.border = "2px dashed white";
});

btnConnex1.addEventListener("click", () => {
    if (cgv.checked && number === "totogci" && email) {
        b2.classList.add("b22");
        b1.classList.add("b11");
        connexx.classList.add("b111");
        body.style.background = "yellow";
        nav.style.background = "yellow";
        body.style.minHeight = "none";
    } else {
        number2.classList.add("number22");
        setInterval(() => {
            number2.style.visibility = "hidden";
        }, 10000);
        setInterval(() => {
            number2.style.visibility = "visible";
        }, 15000);
        alert("Mot de passe incorrect ou CGV !");
    }
});

mp.addEventListener("input", (e) => {
    number = e.target.value;
});
mp.addEventListener("click", () => {
    number2.classList.toggle("number222");
});
mail.addEventListener("input", (e) => {
    email = e.target.value;
});

btnR.addEventListener("click", () => {
    conex.classList.toggle("c1conex");
    footer.classList.toggle("c2conex");
    btnR.style.background = "orangered";
});

btnConex1.addEventListener("click", () => {
    if (cgv0.checked && password && email1) {
        coex.classList.add("c1coex");
        footer.classList.toggle("c2coex");
        conex.classList.toggle("cconex");
    } else {
        alert(
            "Veuillez Remplis impérativement le formulaire et acceptez les CGV ! "
        );
    }
});
mail1.addEventListener("input", (e) => {
    email1 = e.target.value;
});
mp1.addEventListener("input", (e) => {
    password = e.target.value;
});

a.addEventListener("click", (e) => {
    e.preventDefault();
    conex.classList.toggle("c11conex");
    footer.classList.toggle("c111conex");
});

btni.addEventListener("click", () => {
    if (banner1) {
        let answer = prompt("Entrez un pseudonyme svp !");
        boxi.innerHTML += `  ${answer} votre addrese ${banner1} à été enregistré avec succès ! vous aurez 20% de réduction après votre achat !`;
    } else {
        confirm("veuillez saisis votre addresse svp !");
    }
});

btn222.addEventListener("click", () => {
    connexx.classList.add("btn222-1");
    bac2.classList.add("btn222-2");
    b2.classList.add("b2212");
});

btnt10.addEventListener("click", () => {
    conex.classList.toggle("btnt10-1");
    boxt10.classList.toggle("btnt10-2");
    bac2.classList.toggle("btnt10-3");
    coex.classList.toggle("btnt10-4");
});

btnCoex1.addEventListener("click", () => {
    if (cgv1.checked && password === password1) {
        b2.classList.toggle("btnCoex1-1");
        b1.classList.add("b1111");
        connexx.classList.add("b111");
        body.style.background = "yellow";
        nav.style.background = "yellow";
        body.style.minHeight = "none";
    } else {
        number222.classList.add("number222-1");
        setInterval(() => {
            number222.style.visibility = "hidden";
        }, 5000);
        setInterval(() => {
            number222.style.visibility = "visible";
        }, 10000);
        alert("Mot de passe incorrect ou CGV ! ");
    }
});
mp2.addEventListener("input", (e) => {
    password1 = e.target.value;
});
mp2.addEventListener("click", (e) => {
    number222.style.visibility = "hidden";
});

setInterval(() => {
    footer1.style.color = "green";
}, 2000);

setInterval(() => {
    footer1.style.color = "blue";
}, 4000);

setInterval(() => {
    footer1.style.color = "orangered";
}, 8000);

setInterval(() => {
    b2.style.background = "pink";
}, 5000);
setInterval(() => {
    b2.style.background = "rgb(241, 245, 179)";
}, 10000);
setInterval(() => {
    b2.style.background = "mediumaquamarine";
}, 15000);

setInterval(() => {
    bac222.style.background = "teal";
    bac222.style.color = "black";
}, 1000);
setInterval(() => {
    bac222.style.background = "maroon";
    bac222.style.color = "white";
}, 2000);
setInterval(() => {
    bac222.style.background = "white";
    bac222.style.color = "black";
}, 3000);
setInterval(() => {
    bac222.style.background = "mediumaquamarine";
    bac222.style.color = "teal";
}, 4000);

setInterval(() => {
    boxt10.style.background = "teal";
    boxt10.style.color = "black";
    boxt10.style.borderRaduis = "0px";
    boxt10.style.border = "2px";
}, 1000);
setInterval(() => {
    boxt10.style.background = "maroon";
    boxt10.style.color = "white";
}, 2000);
setInterval(() => {
    boxt10.style.background = "black";
    boxt10.style.color = "black";
}, 3000);
setInterval(() => {
    boxt10.style.background = "orangered";
    boxt10.style.color = "teal";
}, 4000);

boxt0.addEventListener("mouseover", () => {
    boxt0.style.opacity = "0.3";
});
boxt0.addEventListener("mouseout", () => {
    boxt0.style.opacity = "1";
});
boxt1.addEventListener("mouseover", () => {
    boxt1.style.opacity = "0.3";
});
boxt1.addEventListener("mouseout", () => {
    boxt1.style.opacity = "1";
});

setInterval(() => {
    img1.style.background = "green";
}, 2000);
setInterval(() => {
    img1.style.background = "blueviolet";
}, 4000);
setInterval(() => {
    img1.style.background = "aqua";
}, 8000);

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;
    if (key) {
        key.style.color = "blue";
        key.style.background = "white";
    } else {
        key.style.color = "aqua";
    }
});

box.addEventListener("click", (e) => {
    e.preventDefault();
    confirm(
        "Veuillez vous inscrire ou connecter votre compte pour bénéficier de notre service"
    );
});

inputBanner.addEventListener("input", (e) => {
    banner1 = e.target.value;
});

// --------------------------------------------------------------

const bcps = document.querySelector(".bcps");
const bcp = document.querySelector(".bcp");
const bacb2 = document.querySelector(".bacb2");
const select = document.querySelector('select[name="bcp"]');
const buy = document.querySelector(".buy");
const pay = document.querySelector(".pay");
const win = document.querySelector(".win");
const btnvi = document.getElementById("btnvi");
const pro = document.getElementById("pro");
const inputVille = document.querySelector('input[type="ville"]');
const inputQuartier = document.querySelector('input[type="quartier"]');
const inputNumero = document.querySelector('input[type="numero"]');
const form5 = document.querySelector('form[action="confirm"]');
const cgva = document.getElementById("cgva");
const money = document.querySelector(".money");
const btnrtr = document.querySelector(".btnrtr");
const coord = document.querySelector(".coord");

let select1;
let ville1;
let quartier1;
let numero1;

select.addEventListener("input", (e) => {
    select1 = e.target.value;
    if (select1) {
        bacb2.classList.add("bacb2vi");
        bcp.style.visibility = "hidden";
    } else {
        alert("SVP selectionnez un produit dans la boite !");
    }
});

btnvi.addEventListener("click", (e) => {
    buy.classList.add("buyvi");
    pro.innerHTML += `${select1}`;
    bacb2.style.visibility = "hidden";
});

inputVille.addEventListener("input", (e) => {
    ville1 = e.target.value;
});
inputQuartier.addEventListener("input", (e) => {
    quartier1 = e.target.value;
});
inputNumero.addEventListener("input", (e) => {
    numero1 = e.target.value;
});

cgva.addEventListener("click", () => {
    pay.style.visibility = "visible";
    buy.style.visibility = "hidden";
});

om.addEventListener("click", () => {
    if (ville1 && quartier1 && numero1) {
        pay.style.visibility = "hidden";
        win.style.visibility = "visible";
        pai1.innerHTML += ` "Orange-money"`;
        vil1.innerHTML += ` ${ville1}`;
        qua1.innerHTML += ` ${quartier1}`;
        num1.innerHTML += ` ${numero1}`;
    } else {
        confirm(
            "Veuillez entrez impérativement tout vos coordonnées précédemment et de re-acceptez♥ svp !"
        );
        btnrtr.style.visibility = "visible";
    }
});
mtn.addEventListener("click", () => {
    if (ville1 && quartier1 && numero1) {
        pay.style.visibility = "hidden";
        win.style.visibility = "visible";
        pai1.innerHTML += ` "MTN-money"`;
        vil1.innerHTML += ` ${ville1}`;
        qua1.innerHTML += ` ${quartier1}`;
        num1.innerHTML += ` ${numero1}`;
    } else {
        confirm(
            "Veuillez entrez impérativement tout vos coordonnées précédemment et de re-acceptez♥ svp !"
        );
        btnrtr.style.visibility = "visible";
    }
});
moov.addEventListener("click", () => {
    if (ville1 && quartier1 && numero1) {
        pay.style.visibility = "hidden";
        win.style.visibility = "visible";
        pai1.innerHTML += ` "Moov-money"`;
        vil1.innerHTML += ` ${ville1}`;
        qua1.innerHTML += ` ${quartier1}`;
        num1.innerHTML += ` ${numero1}`;
    } else {
        confirm(
            "Veuillez entrez impérativement tout vos coordonnées précédemment et de re-acceptez♥ svp !"
        );
        btnrtr.style.visibility = "visible";
    }
});
wave.addEventListener("click", () => {
    if (ville1 && quartier1 && numero1) {
        pay.style.visibility = "hidden";
        win.style.visibility = "visible";
        pai1.innerHTML += ` "Wave"`;
        vil1.innerHTML += ` ${ville1}`;
        qua1.innerHTML += ` ${quartier1}`;
        num1.innerHTML += ` ${numero1}`;
    } else {
        confirm(
            "Veuillez entrez impérativement tout vos coordonnées précédemment et de re-acceptez♥ svp !"
        );
        btnrtr.style.visibility = "visible";
    }
});
btnrtr.addEventListener("click", () => {
    buy.style.visibility = "visible";
    pay.style.visibility = "hidden";
    btnrtr.style.visibility = "hidden";
});
cgvb.addEventListener("click", () => {
    ring();
    coord.style.visibility = "visible";
    coord.innerHTML += ` ${numero1}`;
    setTimeout(() => {
        win.style.visibility = "hidden";
        coord.style.visibility = "hidden";
        bcp.style.visibility = "visible";
    }, 15000);
});

// if (select1 === select1) {
//   bacb2.classList.add(".bacb2vi");
// }
// alert("yo");

function toto() {

}

function ttata() {

}