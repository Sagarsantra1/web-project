const input = document.querySelectorAll('.i')
let string = "";
let cal = "";
Array.from(input).forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '=') {
            cal = eval(cal)
            string = cal
            document.querySelector('.sowinput').innerHTML = string
            string = ("");
            cal = ("")
        }
        else if (e.target.innerHTML == 'AC') {
            string = ("");
            cal = ("")
            document.querySelector('.sowinput').innerHTML = string
        }
        else if (e.target.id == 'i2') {
            a = string.length - 1
            string = string.slice(0, a);
            cal = cal.slice(0,a);
            document.querySelector('.sowinput').innerHTML = string
        }
        else if (e.target.id == 'i4') {
            calculate('/')
        }
        else if (e.target.id == 'i8') {
            calculate('*')
        }
        else{
            calculate(e.target.innerHTML)
        }
        function calculate(a) {
            string = string + e.target.innerHTML;
            cal = cal + a;
            document.querySelector('.sowinput').innerHTML = string
        }
    })
})