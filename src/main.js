//variable Universal
const $=(selector)=>document.querySelector(selector)


$('#nameRegister').addEventListener("keyup",()=>{
    const prueba=$('#nameRegister').value;
    console.log(prueba)
})
