// مثال بسيط للـ Buy Button
const buttons = document.querySelectorAll('.buy-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.parentElement;
        const name = product.querySelector('h3').innerText;
        const price = product.dataset.price;
        alert(`شكراً لاختيارك ${name} بسعر ${price} جنيه!`);
    });
});
