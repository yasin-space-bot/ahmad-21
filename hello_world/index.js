console.log("Backend, UIN")
var name = "Romi";
console. log (name);
// ini adalah declaration variable dengan var dan init dengan value "Romi"
//Halo
//hallo this is a commentar multiline
//ini adalah komentar yang banyak

name = "Ahmad"
console. log(name);

let data = "this is a simpel string";
console.log(data);

let empaty
console.log (data);

data = "Ahmad"
console.log(data);
const pi = 3.14 // = /*variabel dgn tipe float (desimal)
const area = 10 // variabel dgn tipe data integer (bilangan bulat)
const description = "ini adalah deskripsi" // = variabe dgn tipe data string (text)

console.log(typeof area); // = untuk memastikan tipe apakah dari tabel area
console.log (typeof description);

const sudahistirahat = true; // = variabel dgn tipe data boolean (true/false)
console.log(typeof sudahistirahat);

const profile = {
    name: "Ahmad" , // = Tipe data dari property name adalah string
    age: 23, // = Tipe data dari age adalah number
    address: " Bandung", // = Tipe data dari address adalah string
    isMariied: false, // = Tipe data dari isMarried adalah false
    school:{
        name: 'uin',
        year: 2024
    }
};

console.log(profile);
console.log(profile.name); //  Akses property name di dalam object profile
console.log(profile.school.name); //akses property nama didalam property school
console.log(typeof profile);


//Arayy
const sampelArray = [
    50, //= data pertama didalam arrayy, dan selanjutnya adalah data urutan setelahnya
    "A",
     true,
    {name:"Ahmad"}

]

console.log(typeof sampelArray);

// 70 itu adalah index ke 0

const scores = [70, 80, 90, 95];

/** 
* setiap data didalam array memiliki index sebagai urutan atau lokasi data tersebut berada
*
* dan array selalu dimulai dengan index 0 yang artinya data pertama dalam array,
* dalam contoh diatas index ke 0 adalah 70
*/
console.log(scores[0]); // = akses array menggunakan index

scores[0] = 50; // merubah isi elemen dari array index ke 0

console.log(scores[0]); // output: 50

const fruits = ["apple", "banana", "kiwi"];
console.log (fruits); // output apple
fruits.push("orange");
console.log(fruits);

fruits.unshift("mango"); //
console.log(fruits); // output mango,apple banana,kiwi,oarnge

fruits.pop (); // mengahapus element di array
console.log(fruits); //
fruits.shift();// menghapus elemnt di awal
console.log(fruits); // output apple, banana dan kiwi
console.log(fruits.length); // memastikan panjang dari array

const moreFruits = ["kiwi", "grafe"];
const allFruits = fruits.concat(moreFruits); // manggabungkan 2 array
console.log(allFruits); //output apple, banana,  kiwi, orange, grafe



/** 
 * 
 * let i = 0 adalah definisi dari index array yg mau mulai perulangan nya. jika i ini isinya 0
 * maka array akan diakses dari index ke 0.
 * 
 * i < foods.lenght adlah condition, yg berarti variabel i tdk lebih krng dari,
 * 
 * i++ adalah post statement yg berarti, ketika condition i < foods.lenght itu terpenuhi,
 * maka nilai i akan ditambah 1.
 * 
 * ++ merupakan / menambah 1
 * -- merupakan mengurangi 1
 * 
 * */

const foods = ["noodle", "egg", "rice"];
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}

console.log("Perulangan berhasil");


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matrix [1][2]); // = output 5

const matrixs = [
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    [
       [7, 8, 9],
       [10, 11, 12]
    ],
];

console.log(matrixs[1][2]); // output 5

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i] [j]);
}
}

// segitiga kanan
for (let i = 0; i < 5; i++ ) {
    let str = "*"

    console.log(str.repeat(i));
}

// segitiga kiri
let x = 5
for (let i = 0; i < x; i++ ) {
    let str = "* "
    let space = "--"
    console.log(space.repeat((x - i)) + str.repeat(i));
}


const isLoggedin = false;

/** 
 * ketika variabel dlm kondisi if () bernilai bolean cukup gunakan nama variabel jika ingin,
 * memeriksa bahwa itu benar atau true. jika ingin memeriksa jika itu salah cukup gunakan !namaVariabel
 * yang artinya ! melambangkan negative value dalam kasus bolean negatif adalah false
 **/

if (!isLoggedin) { // untuk tipe data boolean kita cukup memasukkan kondisi true atau false
    console.log("Halo Admin");
 }else {
        console.log("Harap Login");
}

const baju = "Putih";
if(baju =="Putih"){
    console.log("Baju bersih"); 
}
 else if (baju = "Merah") {
    console.log("Baju warna merah");
}   else{
    console.log("Baju Kotor");
}


/** 
*
* ini merupakan deklaration dari sebuah function sederhana
*declaration function ditulis dgn keyword function nama fubction()
function greet(){
*jika function yg tdk memiliki keyword return merupakan void function
*yg berarti function tersebut tdk mengembalikan nilai apapun.
*age = 23 itu merupakan initialization parameter dgn nilai awal value
*ketika melakukan pemanggilan function tanpa mengirimkan ag, maka secara defaut bernilai 23
*dan jika memasukkan nilai ke 2 age alkan sesuai berdasrkan parametr kedua yg dikirim dari pengganti fungction
* * perkalian / pemabgian + penjumalahan - pengurangan
*@returns string
**/
function greet (name, age = 23) {
    // penggunaaan string literal atau `ketika ingin menggunakan/parameter hrs dgn ${}

    return `Hello, ${name}. My Age is ${age} yo`;
}

const greeting = greet ("yasin", 24);  //jika fungsion memiliki keyword return didalamnya menggunakan variabel

console.log(greeting);
console.log(greet("yasin"));  // function digunkakan lngsng tanpa variabel


function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); //out selalu a + b maka akan dijumahkan

function fizzBuzz (number) {
    if (number % 2 === 0) {
        return "Fizz";
    }
    if (number % 3 === 0) {
        return "Buzz";
    }
    
    if (number % 5 === 0) {
        return "FizzBuzz";
    }
    return "Failed";
}




class Car {
    // ini merupakan 
    constructor(name, brand, year) {
        this._name = name;
        this._brand = brand;
        this._year = year;
    }
    information () {
        return `${this._name} have brand from ${this._brand} and build in ${this._year}`;
    }
    // ini adlh setter untuk mengambil data dari sebuah proeprty
    setName(name) {
        this._name = name;
    }
// inia adlh getter mengambil data dari property
    getName (){
        return this._name;
    }
    set name(value) {
        if (value !==""){
            this._name = value;
    } else {
        console.log("the value must be not empaty string.");
    }
}
get name( ){
    return this._name;
}

}

const car = new Car("Toyota", "Camry", 2020);
console.log(car.information());
// car.setName("Daihatsu");
car.name = "Daihatsu";  //menggunakan settter untuk merubah data dari property
console.log(car.information());
console.log(car.name);

/**
 * animal merupakan sebuah [farent class yg memiliki property name dan method speak
 */

class Animal{
    constructor(name){
        this.name = name;
    }

    speak() {
        console.log(`${this.name} make a sound`);
    }
}
/**
 * dog merupakan sbh cildren class yg mewarisi smeua dlm kls animal
 * baik itu property maupun method
 */

class Dog extends Animal {
speak(){
    console.log("hat the dog do `in")

}
}   
    const dog= new Dog("Holy");
dog.speak();


class Cat extends Animal {
constructor(name,color) {
super(name)
this.calor = color;
}
speak() { //method
    super.speak();
    console.log(`${this.name} meows.`);
}

}
const cat = new Cat("Whisker", "Gray")
cat.speak();



class MathUtil {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}


console.log(MathUtil.add(1, 2)); //output 3
console.log(MathUtil.multiply(5, 3)); // output 15

/**
 * Naming convension class biasanya menggunakan PascalCase ataus sebagai contoh loanDisbursment
 * Naming convension variabel biasanya camelCase Variabel name
 * Naming convension function biasanya Function name
 */