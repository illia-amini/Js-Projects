const $registerion= document.querySelector('.register');
const $container= document.querySelector('.container');
const $login= document.querySelector('.login');

$registerion.addEventListener('click',() =>{
    $container.classList.add('active');
})
$login.addEventListener('click',() =>{
    $container.classList.add('active');
})