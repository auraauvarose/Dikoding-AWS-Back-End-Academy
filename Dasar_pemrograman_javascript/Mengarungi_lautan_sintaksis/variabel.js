/* Variabel
Variabel adalah wadah untuk menampung sebuah nilai. Nilai yang ditampung dapat berupa angka, teks, atau apa pun yang menghasilkan nilai (expression). Pada JavaScript, kita bisa membuat variabel melalui dua cara, yakni dengan sintaksis const dan let.

Berikut adalah contoh cara membuat variabel dengan menggunakan const dan let. */

const id = 123; // Membuat variabel dengan const
let username = 'Dikoding'; // Membuat variabel dengan let


console.log(id); // Output: 123
console.log(username); // Output: Dikoding

// Kode di atas merupakan contoh membuat variabel. Pada contoh tersebut, variabel bernama id dibuat menggunakan const dan variabel bernama username dibuat dengan let. 

// Perbedaan dari variabel yang dibuat dengan const dan let adalah variabel yang dibuat dengan const tidak dapat diinisialisasi ulang (sederhananya, diubah) nilainya, sedangkan jika variabel dibuat dengan let, kita bisa menginisialisasi ulang nilainya.

// Contoh, ketika membuat variabel dengan let, Anda bisa mengubah nilai yang ada di dalamnya setelah variabel tersebut dibuat.

let name = 'Dikoding'; // Membuat variabel dengan let
console.log('Sebelum dirubah :', name); // Output: Dikoding


name = 'Dicoding Academy'; // Mengubah nilai variabel username
console.log('setekat dirubah :', name); // Output: Dicoding Academy

/* Aturan Penamaan Variabel
Dalam membuat variabel, kita tidak bisa memberikan nama secara sembarang. Ada aturan yang perlu kita taati. Berikut adalah beberapa aturan dalam penamaan variabel pada JavaScript.

Tidak Boleh Memberikan Nama yang Sama dalam Cakupan yang Sama
Nama variabel haruslah unik dalam cakupannya. Anda tidak bisa menggunakan nama yang sama dengan variabel yang sudah terdefinisi sebelumnya. */

// Anda boleh menggunakan nama variabel yang sama selama cakupannya berbeda, contohnya variabel yang berada dalam sebuah fungsi berbeda.

function printCompanyInfo() {
  const name = 'Dicoding'; // <- nama variabel sama
  const legal = 'LLC';
  
  console.log('Company name:', name);
  console.log('Legal type:', legal);
}
 

console.log("    ")

function printEmployeeInfo() {
  const name = 'John'; // <- nama variabel sama
  const division = 'IT';
  
  console.log('Employee name:', name);
  console.log('Division:', division);
}
 
printCompanyInfo();
printEmployeeInfo();