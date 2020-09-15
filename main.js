// mengambil semua section
const sectionArray = document.querySelectorAll('section');
// membuat objek kosong untuk menampung posisi setiap section
const sectionPosition = {};

// melaukan pengulangan untuk mengisi value offsetTop tiap-tiap id section
sectionArray.forEach(section => sectionPosition[section.id] = section.offsetTop);

// membuat fungsi ketika halaman web di scroll
window.onscroll = () => {
    // membuat variabel untuk posisi scroll
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // melakukan pengulangan untuk tiap element section
    for (id in sectionPosition) {
        // jika posisi section kurang <= posisi scroll maka
        if(sectionPosition[id] <= scrollPosition) {
            // hapus class active dari elemen yg mempunyai kelas active
            document.querySelector('.active').classList.remove('active');
            // tambahkan class active yang sesuai dengan id section
            document.querySelector(`a[href*=${id}]`).classList.add('active');
        }
    }
}