[EN](CONTRIBUTING.md) | [ES](CONTRIBUTING_es.md) | [BM](CONTRIBUTING_bm.md)
# Cara menyumbang

Selepas anda mengklon projek, sila pasang dependencies.

```
$ npm install
```

Seterusnya, anda boleh menjalankan pembangunan dengan perintah `serve`.

```
$ npm run serve
```

Anda boleh menambahkan topik pelajaran anda dengan menambahkan folder dengan fail di `src/views/` yang ditentukan pada struktur pokok di bawah:

```
HelloWorld
│   code.js
│   index.vue
│   README.md
```

* `code.js`: Kod yang anda ingin lihat dengan eksport string.
* `index.vue`: Hasil contoh yang anda ingin paparkan.
* `README.md`: Huraian bagi topik yang ditunjukkan dalam markdown.

Kemudian, tambah laluan topik anda di `src/router.js`.

```javascript
{
  path: '/hello-world',
  name: 'HelloWorld',
  meta: { title: 'Hello World!' }
}
```

* `name`: Nama folder anda.
* `title`: Teks yang akan dipaparkan dalam navigasi.

Akhir sekali, sila buat pull request dan targetkan ke cabang  `master`.

# Permintaan Ciri-ciri Baru

Idea dan maklum balas dialu-alukan. Tolong hantar issue dengan beberapa penjelasan idea anda. Issue anda adalah berharga dan tidak ternilai bagi pembangun pada masa akan datang.