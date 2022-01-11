const Encode=document.getElementById('Encode');
const btncode=document.getElementById('btncode');
const btnEncrypt=document.getElementById('btnEncrypt');
const btnDecrypt=document.getElementById('btnDecrypt');
const code=document.getElementById('code');


btncode.onclick=function(){
    let data=Encode.value
    data=btoa(data);
    code.value=data
}

btnEncrypt.onclick=function(){
    let data=code.value
    data=encryptData(data)
    code.value=data
}
function encryptData(data){
     data = data.toUpperCase();
     return data;
}

