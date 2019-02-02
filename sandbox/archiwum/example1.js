console.log("--------------Zmienne-------------------");
console.log("hello world");
var x = 3;
var y;
y = 'napis';
var z;
z = true;
console.log(x);
console.log(y);
console.log(z);
console.log("----------Tablice------------------------");
var arr = [1, 2, 3, 4];
var arr2 = [12, 23, 34, 45];
console.log(arr);
console.log(arr.length);
console.log(arr2.filter(function (x) { return x == 12; }));
var arr3 = [5, 6, 6].concat(arr);
console.log(arr3);
console.log("------interpolating-string---------------");
var asdf = "Liczba x = " + x;
console.log(asdf);
var tab = "tablica arr " + arr[0];
var tab2 = "tablica arr " + (arr[0] + 1) + ", " + arr3[2];
console.log(tab);
console.log(tab2);
console.log("------------Funkcje-----------------");
function welcome(name) {
    console.log("Welcome " + name);
}
function welcome2(name) {
    return "Welcome " + name + " 2";
}
function welcome3(name) {
    if (name === void 0) { name = "elo"; }
    return "Welcome " + name + " 2";
}
function welcome4() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return "Welcome " + names.join(", ");
}
welcome("Karolinka");
console.log(welcome2("kamil"));
console.log(welcome3());
console.log(welcome4("Ala", "ma", "kota"));
console.log("---------Funkcje-anonimowe---------------");
function wilkomen(name) {
    return "Welcome " + name;
}
console.log(["Kamil", "Jan"].map(wilkomen));
console.log(["Kamil", "Janek", "Karolinka"].map(function (name) {
    return "Welcome " + name;
}));
console.log(["Kamil", "Janek", "Karolinka"].map(function (name) { return "Welcome " + name; }));
console.log("---------------Interfejs----------------");
function Witaj(customer) {
    return "Welcome " + customer.name + ", Age: " + customer.age + ", city: " + customer.adres.city;
}
console.log(Witaj({ name: "Kamil", age: 24, adres: {
        street: "Kopernika",
        city: "Wrocław"
    } }));
console.log(Witaj({ name: "Kamil", adres: {
        street: "Kopernika2",
        city: "Wrocław2"
    } }));
console.log("----------Instrukcje-sterujace------------");
var xy = 5;
if (x > 10) {
    console.log(xy);
}
var numbers = [10, 20, 30];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var i = numbers_1[_i];
    console.log(i);
}
console.log("-------------Enumeracje----------------------------");
var CustomerType;
(function (CustomerType) {
    CustomerType[CustomerType["Standard"] = 10] = "Standard";
    CustomerType[CustomerType["Premium"] = 11] = "Premium";
    CustomerType[CustomerType["Vip"] = 99] = "Vip";
})(CustomerType || (CustomerType = {}));
function welcome5(name, customerType) {
    if (customerType == CustomerType.Premium)
        return "Welcome " + name + ", " + CustomerType[CustomerType.Premium];
}
console.log(welcome5("Kamil", CustomerType.Premium));
console.log("-----------------------------------------");
