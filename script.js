let toastBox = document.getElementById("toastbox");
let successMsg =  '<i class="fa fa-check-circle" aria-hidden="true"></i> Successfully Submitted';
let errorMsg   =  '<i class="fa fa-times-circle" aria-hidden="true"></i> Please Fix the error !';
let invalidMsg =  '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>Invalid input, check again';

function  showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
       toast.classList.add('error')
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid')
     }
     setTimeout( () =>{
        toast.remove();
     },5000);

}   

