// Tipe data dalam JavaScript

// String adalah tipe data yang merepresentasikan teks. Data seperti nama, alamat, atau email adalah contoh data yang dikelola dalam bentuk string. Dalam JavaScript, nilai string diapit oleh tanda kutip. Ada tiga jenis tanda kutip yang dapat digunakan untuk membuat nilai string, yaitu petik tunggal (single quote), petik ganda (double quote), dan backticks (tanda backtick).

// "Baris pertama.\nBaris kedua."
// 'Baris pertama.\nBaris kedua.'
// `Baris pertama.
// Baris kedua.`

// String dapat berisi karakter apa pun, termasuk huruf, angka, simbol, dan spasi. Anda dapat menggunakan tanda kutip tunggal atau ganda untuk membuat string, tetapi pastikan untuk konsisten dalam penggunaannya. Backticks memungkinkan Anda untuk membuat string multi-baris dan menyisipkan ekspresi menggunakan `${}`.
// Contoh penggunaan string

const currrentYear = new Date().getFullYear();
const text = `Tahun ini adalah ${currrentYear}.`;

console.log(text); // Output: Tahun ini adalah 2025

// Number
// Semua data berupa angka direpresentasikan dalam tipe data number, baik itu bilangan bulat maupun pecahan. Untuk membuat nilai number, kita cukup menuliskan angkanya secara langsung tanpa menggunakan tanda khusus. Berikut adalah contoh nilai number dalam JavaScript.

// 40
// 3.14
// 5
// 3.333

// selain itu tipe data number juga memiliki nilai spesial yaitu NaN dan infinity. NaN (Not a Number) digunakan untuk merepresentasikan nilai yang bukan angka, sedangkan infinity digunakan untuk merepresentasikan nilai tak terhingga. Berikut adalah contoh penggunaan NaN dan infinity:

const result = 50 / 0 // Hasilnya adalah infinity

const nanNumber = Number("salah") // Hasilnya adalah NaN

// Boolean
// Boolean adalah tipe data yang hanya memiliki dua nilai: true dan false. Boolean umumnya digunakan untuk merepresentasikan “ya” atau “tidak”, “ya” adalah true dan “tidak” adalah false. 

// Untuk membuat nilai boolean, kita bisa menuliskan true atau false secara langsung. Contohnya seperti kode di bawah ini.

const isActive = true; // Nilai boolean true
const isComplete = false; // Nilai boolean false
// Boolean sering digunakan dalam kondisi percabangan atau perulangan untuk menentukan alur program. Misalnya, kita bisa menggunakan boolean untuk mengecek apakah suatu kondisi terpenuhi atau tidak.

const isGreater = 10 > 5; // Hasilnya adalah true
console.log(isGreater); // Output: true

 