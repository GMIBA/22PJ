let typingNumber = 0;
$(()=> {
    setTimeout(()=>{
        setInterval(startAnimation, 125)},1000);
})

function startAnimation() {
    typing();
    function typing (){
        const someText = "Hello Please Click Right ->";
        let splitArr = someText.split("");
        if (typingNumber < someText.length) {
            $(".typing").append(splitArr[typingNumber]);
            typingNumber++
        }
    }
}