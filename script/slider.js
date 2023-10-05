const radioButtons = document.querySelectorAll('input[type=radio]');
const slideShow = () => {
    for (let i = 0; i < radioButtons.length; i++) {
        setInterval(() => {
            console.log(i)
        }, 3000)
    }
}
slideShow();

console.log('Hello');








