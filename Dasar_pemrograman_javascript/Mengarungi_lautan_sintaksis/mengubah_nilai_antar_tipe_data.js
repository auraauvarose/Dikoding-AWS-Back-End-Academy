// Mengubah Nilai Antar Tipe Data
// Saat mengelola sebuah data dalam JavaScript, seringkali kita perlu mengubah nilai dari satu tipe data ke tipe data lain. Proses ini sangat penting karena dalam berbagai situasi, kita perlu menyesuaikan tipe data dengan konteks atau kebutuhan tertentu, baik untuk keperluan perhitungan, perbandingan, maupun manipulasi data.

// JavaScript adalah bahasa pemrograman yang dinamis dan fleksibel, ia menyediakan berbagai cara untuk mengonversi tipe data. Konversi tipe data dapat dilakukan secara eksplisit oleh developer atau secara implisit oleh interpreter. Memahami cara konversi tipe data penting agar dapat menulis kode yang efisien, efektif, dan bebas dari kesalahan.

const number = 10; // Tipe data number
const stringNumber = String(number); // Mengubah number ke string
console.log(typeof stringNumber); // Output: "10"

const booleanValue = true; // Tipe data boolean
const stringBoolean = String(booleanValue); // Mengubah boolean ke string
console.log(typeof stringBoolean); // Output: "true"

// Konversi Implisit
// Konversi implisit terjadi ketika JavaScript secara otomatis mengubah tipe data tanpa instruksi eksplisit dari programmer. Ini biasanya terjadi dalam konteks tertentu, seperti operasi aritmetika, perbandingan, dan konteks logika. Meskipun konversi implisit bisa sangat berguna dan menghemat penulisan kode, penting untuk memahami alasan hal ini terjadi untuk menghindari bug dan perilaku yang tidak terduga dalam kode.

const age = 25; // Tipe data number
const message = "usia saya " + age; // Konversi implisit ke string
console.log(typeof message); // Konversi implisit ke string

const strNumber = '115';
const result = strNumber - 5; // Konversi implisit ke number
console.log(result); // Output: 110

