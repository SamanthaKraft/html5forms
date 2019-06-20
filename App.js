function render(){
    //get config
    //render the html for companies 
    //if rendered correctly, get json for leg
    get();
}
//Read of CRUD
function get(){
    //will send get with leg id/info
    var xhr = new XMLHttpRequest();
    xhr.open('GET','indo.json');
    xhr.send(null);

    xhr.onreadystatechange = function(){
        if(xhr.readyState==4){
            if(xhr.status==200)
            {
                //success
            }else{
                console.log('Error: '+xhr.status);
            }
        }
        
    }
}
//Update of CRUD
function send(){

}

function submitForm(){
    var f = document.getElementsByTagName('form')[0];
    if(f.checkValidity()){
        f.submit();
    }else{
        var inputArray = document.getElementsByTagName('input');
        for(var i=0;i<inputArray.length;i++){
            if(!inputArray[i].validity.valid){
                inputArray[i].classList.add("redDashed");
            }
        }
    }
}