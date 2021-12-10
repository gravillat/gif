// ===========setTimeout============
// метод который позволяет выполнить определенное действие 
// один раз через какое-то время 
// const timer =()=>{
//     alert('timer is starting');
// }

// setTimeout(timer, 2000)  
// служит для выполнения одного лишь действия 
// или вызова функции черещ определенное количество времени
// если нет будет параметров в функции то просто пишем название функции 
// без скобок и пишем время

// const greeting = (name, phrase)=>{
//     alert(`${name} ${phrase}`)
// }

// setTimeout(()=>{
//     greeting('Isa', 'Hello')
// },2000)  
// если хотим работать с функцией у которой есть параметры и аргументы
// то необходимо писать колл бэк функцию и там уде вызвать нужную функцию

// const text = prompt('enter your name')
// const timer = setTimeout(()=>{
// if(text != 'Isa'){
//     clearTimeout()     //удаляет таймер точнее очищает
// }else{
//     alert(`${text} Hello`)
// }
// }, 2000)

// создайте объект со словами и переводом
// в конфирме спросите пользователя хочет ли он играть
// если отвечает да 
// то спрашиваете перевод английских слов 
// через 2 секунды если отвечает верно говорите супер
// в противном случае говорите не очень
// если отвечает нет
// то через 2 секунды в алерте скажите слабак

// let dictionary ={
//     'apple': 'яблоко',
//     'pen': 'ручка',
//     'book': 'книга',
// }
// let check = ()=>{
//     for(key in dictionary){
//         let rus = prompt(key)
//         if(rus == dictionary[key]){
//             alert('super')
//         }else{
//             alert('noope')
//         }
//     }
// }

// let user = confirm('Would you like to play the game?')
// if(user == true){
//     setTimeout(()=>{
//        check()
//     }, 3000)
// }else{
//     setTimeout(()=>{
//         alert('looser')
//     }, 3000)  
// }

// ===============setInterval==========
// если нам нужно сделать повторяющиеся действия
// через определнное время то используем данный метод
// setInterval(() => {
//     alert('hi')
// }, 2000);


// let i = 0
// let timerId = setInterval(() => {
//     console.log(i);
//     i++
//     i == 10 ? clearInterval(timerId) :null     //очищение интервала
// }, 1000);

// у вас будет инпут и кнопка
// пользователь вводит какое-либо число
// через каждую 1 секунду у вас в аутпуте 
// должны появиляться числа
// когда число дойдет до того что ввел пользователь
// очистите интервал

const input = document.getElementById('input')
const btn = document.getElementById('btn')
let i = 0
btn.addEventListener('click', () => {
    let timerId = setInterval(() => {
        const div = document.createElement('div')
        div.innerHTML = i
        document.body.append(div)
        i++
        i == input.value ? clearInterval(timerId) : null    
    }, 1000);
})
