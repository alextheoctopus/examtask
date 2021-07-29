//необходимо , чтобы при перезагрузке оставался авторизированный хэдер
window.onload = () => {
    var name = document.getElementById("username"),
        nameDiv = document.getElementById("nameAndSurname"),
        nameArr = name.value.split(' '),// массив , где элемент с индексом 0 - это имя , а с 1 - фамилия
        surnameArr=nameArr[1].split(''),
        nameAndSurname = nameArr[0] + " " + surnameArr[0].toUpperCase() + ".";
    var entrance = {
        login: document.getElementById("username"),
        password: document.getElementById("password")
    };
    var login = document.getElementById("login");
    var logout = document.getElementById("logout");
    if (entrance.login != null) {
        nameDiv.innerHTML = nameAndSurname;
        login.style.display = "none";
        logout.style.display = "block";
    }
    var bottom = document.getElementById("bottom");
    bottom.style.background = " #F2F2F2";
    var buttonFilm = document.getElementById("filmbut");
    buttonFilm.style.color = "red";
}
//для появления окна входа
function login() {
    var signIn = document.getElementById("signIn");
    var grey = document.getElementById("grey");//блок для затемнения элементов ,размером со всю страницу

    grey.style.display = 'block';//доп.блок который должен затемнять всю страницу серым появляется
    signIn.style.display = 'block';
}
//вывод имени в хэдер
function afterLogin() {
    var name = document.getElementById("username"),
        nameDiv = document.getElementById("nameAndSurname"),
        nameArr = name.value.split(' '),// массив , где элемент с индексом 0 - это имя , а с 1 - фамилия
        surnameArr=nameArr[1].split(''),
        nameAndSurname = nameArr[0] + " " + surnameArr[0].toUpperCase() + ".";
    nameDiv.innerHTML = nameAndSurname;

    var signIn = document.getElementById("signIn");
    var grey = document.getElementById("grey");
    var login = document.getElementById("login");
    var logout = document.getElementById("logout");
    var bottom = document.getElementById("bottom");

    signIn.style.display = "none";//закрытие окна
    grey.style.display = 'none';//доп. блок пропадает
    bottom.style.background = " #F2F2F2";
    login.style.display = "none";
    logout.style.display = "block";
}

function openFilms() {
    var films = document.getElementById("filmsPage"),
        channels = document.getElementById("channels");
    var line5 = document.getElementById("line5");//подчеркивает телеканалы
    var line4 = document.getElementById("line4");
    var buttonFilm = document.getElementById("filmbut"),
        buttonTele = document.getElementById("telebut");
    var bottom = document.getElementById("bottom");
    bottom.style.top = '1024';
    films.style.display = "block";
    channels.style.display = "none";
    line4.style.display = "block";
    line5.style.display = "none";
    buttonFilm.style.color = "red";
    buttonTele.style.color = "#333333";
    var bottom = document.getElementById("bottom"),
        info = document.getElementById("info"),
        number = document.getElementById("number"),
        url = document.getElementById("url"),
        img = document.getElementById("mainLogo");
    var body = document.getElementById("body");
    body.style.height = "1144";
    img.style.top = "1052";
    info.style.top = "1046";
    number.style.top = "1071";
    url.style.top = "1100";
    bottom.style.top = "1024";
    bottom.style.background = " #F2F2F2";
    grey.style.height='1152';
    grey.style.width='1440';
}

function openTele() {
    var films = document.getElementById("filmsPage"),
        channels = document.getElementById("channels");
    var line5 = document.getElementById("line5");
    var line4 = document.getElementById("line4");
    var buttonFilm = document.getElementById("filmbut"),
        buttonTele = document.getElementById("telebut");
    var bottom = document.getElementById("bottom"),
        info = document.getElementById("info"),
        number = document.getElementById("number"),
        url = document.getElementById("url"),
        img = document.getElementById("mainLogo");
    var body = document.getElementById("body");
    var grey=document.getElementById('grey');
    grey.style.height='1078';
    grey.style.width='1440';
    body.style.height = "1073";
    img.style.top = "981";
    info.style.top = "975";
    number.style.top = "1000";
    url.style.top = "1029";
    bottom.style.top = "953";
    bottom.style.background = " #F2F2F2";
    films.style.display = "none";
    channels.style.display = "block";
    line5.style.display = "block";
    line4.style.display = "none";
    buttonFilm.style.color = "#333333";
    buttonTele.style.color = "red";
}