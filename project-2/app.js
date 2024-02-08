let randomColorGenerator = () => {
    const hexColor = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hexColor[Math.floor(Math.random() * 16)]
    }
    return color
}

// console.log(backgroundcolorChanger());

let intervalId;

const startColorChange = () => {
    // console.log('hi');
    if(!intervalId){
        intervalId = setInterval(bgchanger, 1000)
    }
    
    function bgchanger() {
        document.body.style.backgroundColor = randomColorGenerator();
    }
}

const stopColorChange = () => {
    // console.log('by');
    clearInterval(intervalId)
    intervalId = null
}
document.getElementById('start').addEventListener('click', startColorChange)
document.getElementById('stop').addEventListener('click', stopColorChange)
