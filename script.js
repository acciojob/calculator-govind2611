let displayxyz = document.getElementById("display")

function isOpxyz(opxyz){
    if(opxyz==="+" || opxyz==='-' || opxyz==='/' || opxyz==='*')
        return true
    return false
}
function clickingxyz(clickedxyz){
    if(displayxyz.innerText===""){
        if(clickedxyz!='0'){
            displayxyz.innerText = displayxyz.innerText+clickedxyz
        }
    }
    else{
        var innerTextxyz = displayxyz.innerText
        var lenxyz = innerTextxyz.length

        var lastCharxyz = innerTextxyz[lenxyz-1]

        if(isOpxyz(lastCharxyz)===true){
            if(clickedxyz!='0'){
                if(isOpxyz(clickedxyz)===true){
                    displayxyz.innerText = displayxyz.innerText.slice(0,-1)
                }
                displayxyz.innerText = displayxyz.innerText+clickedxyz

            }
        }else{
            displayxyz.innerText = displayxyz.innerText+clickedxyz
        }

    }
}

function evalxyz(){
    try{
        displayxyz.innerText = eval(displayxyz.innerText)

        // Whatever error comes here
    }catch(err){
        console.log(err)
        displayxyz.innerText="Error"
    }
}

function clearxyz(){
    displayxyz.innerText = ""
}

function backxyz(){
    displayxyz.innerText = displayxyz.innerText.slice(0,-1)
}