const normalStyleBtn = document.querySelector('.paint__material--normal');
const inkPenStyleBtn = document.querySelector('.paint__material--inkpen');
const oilStyleBtn = document.querySelector('.paint__material--oil');
const sprayStyleBtn = document.querySelector('.paint__material--spray');

// ĐỔI TRẠNG THÁI ACTIVE CHO CÁC NÚT
const materialBtns = document.querySelectorAll('.paint__material');
for (let i = 0; i < materialBtns.length; i++) {
    materialBtns[i].addEventListener('click', () => {
        for (let i = 0; i < materialBtns.length; i++) {
            // bỏ hết active class của các nút khác
            materialBtns[i].classList.remove('active');
        }
        // chỉ add active class cho button được nhấn
        materialBtns[i].classList.add('active');
    });
}
// ĐẶT KIỂU VẼ MẶT ĐỊNH LÀ NORMAL
document.querySelector('body').onload = () => {
    normalDraw();
};

// GỌI FUNCTION THAY ĐỔI KIỂU VẼ TƯƠNG ỨNG VỚI NÚT
normalStyleBtn.addEventListener('click', () => {
    normalDraw();
    console.log('normal draw');
});
inkPenStyleBtn.addEventListener('click', () => {
    inkPenDraw();
    console.log('ink pen draw');
});
oilStyleBtn.addEventListener('click', () => {
    oilPalmDraw();
    console.log('oil palm pen draw');
});
sprayStyleBtn.addEventListener('click', () => {
    sprayDraw();
    console.log('spray pen draw');
});