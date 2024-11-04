/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let measurement = [
    {
        title: 'Length', 
        unit1: 'Meter',
        unit2: 'Feet',
        conversion: 3.281
    },
    {
        title: 'Volume', 
        unit1: 'Liters',
        unit2: 'Gallons',
        conversion: 0.264
    },
    {
        title: 'Mass', 
        unit1: 'Kilogram',
        unit2: 'Pound',
        conversion: 2.204
    }
]
const btn = document.getElementById('convert')
let num = document.getElementById('num')
let conversions = document.getElementById('conversions')
let concat = ''
concat = localStorage.getItem('measures')
if(concat) conversions.innerHTML = concat
let number = ''
number = localStorage.getItem('number')
if(number) num.value = number
btn.addEventListener('click', function(){
    concat = ''

    for(let i=0; i< measurement.length; i++){
        // console.log(num.value)
        let val1 = measurement[i].conversion * Number(num.value)
        let val2 =  Number(num.value)/ measurement[i].conversion

        concat += `<div>
                        <h3 class='title'> ${measurement[i].title} (${measurement[i].unit1}/${measurement[i].unit2})
                        </h3>
                        <p class='details'>
                            ${num.value}  ${measurement[i].unit1} = ${val1.toFixed(3)} ${measurement[i].unit2} |
                            ${num.value}  ${measurement[i].unit2} = ${val2.toFixed(3)} ${measurement[i].unit1}
                        </p>
                
                    </div>`
    }
    localStorage.setItem('measures', concat)
    localStorage.setItem('number', num.value)

    conversions.innerHTML = concat
})