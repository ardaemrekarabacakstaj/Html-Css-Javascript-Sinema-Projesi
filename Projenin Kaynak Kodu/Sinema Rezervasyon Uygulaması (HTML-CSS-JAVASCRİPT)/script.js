const clickDiv = document.getElementsByClassName('lrcenterdiv');
const labelText = document.getElementsByClassName('labelText')[0];
const selectOption = document.getElementById('films');

const array = [...clickDiv];
const secilenkoltukArray = [];

let sayac = 0;
let koltukFiyati;

array.forEach((item) => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('clicked')) {
            
            item.style.backgroundColor = 'white';
            item.classList.add('clicked');
            sayac++;
            koltukFiyati = sayac * 25;
            secilenkoltukArray.push(item);

            const secilenKoltuklarIndexler = secilenkoltukArray.map((koltuk) => array.indexOf(koltuk));
            localStorage.setItem('secilenKoltuklar', JSON.stringify(secilenKoltuklarIndexler));
            labelText.innerHTML = `<span style="color: yellow;">${sayac}</span> adet koltuk için hesaplanan ücret <span style="color: yellow;">${koltukFiyati}</span> TL.`;
        } else {
            alert("Bu Koltuk Daha Önce Seçilmiştir...");
        }
    });
});
const secilenKoltuklarLocalStorage = JSON.parse(localStorage.getItem('secilenKoltuklar'));
if (secilenKoltuklarLocalStorage) {
    secilenKoltuklarLocalStorage.forEach((index) => {
        array[index].style.backgroundColor = 'yellow';
        array[index].classList.add('clicked');
        secilenkoltukArray.push(array[index]);
    });
    sayac =  0;
    koltukFiyati = sayac * fiyat;
}
  
