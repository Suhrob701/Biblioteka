// let a = 1;
// let b = 2;

// // [a,b] = [b,a]

// let c = a; 
// a = b;     
// b = c; 

// console.log(a, b); 
// трёх стакан  
function generateQR() {
    let text = document.getElementById("text").value;
    let color = document.getElementById("color").value;
    let bgColor = document.getElementById("bgColor").value;
    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: 200,
        height: 200,
        colorDark: color,
        colorLight: bgColor
    });
}

document.getElementById('color').addEventListener('input', (event) => {
    generateQR();
});

document.getElementById('bgColor').addEventListener('input', (event) => {
    generateQR();
});