let togool_side = document.querySelector('.left .icon')
let side = document.querySelector('.side')
let a = side.classList.length
togool_side.addEventListener("click", () => {
    side.classList.toggle("side_active")
    side.classList.toggle("re")
    console.log(a);
})
// side_active.addEventListener("mouseenter", () => {
//         side.classList.remove("side_active")
//         console.log(a);
// })
// side.addEventListener("mouseenter", () => {
//     if (a=1) {
//         side.classList.add("side_active")
//         console.log(a);
//     }
// })

