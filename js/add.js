function getTotal(id){
    const  depositInput=document.getElementById(id);
    const depositText=parseInt(depositInput.value);
    depositInput.value='';
    return depositText;
}
function getValue(fieldId){
   const field= document.getElementById(fieldId);
   const fieldText=parseInt(field.innerText);
   return fieldText;
}
function updateTotal(update,amount){
const updateTotalText=getValue(update); 
  const newTotal=updateTotalText+amount;
  document.getElementById(update).innerText=newTotal;
}
function updateBalance(amount,isAdd){
    const previce=getValue('balance-update');
    let newBalance; 
    if(isAdd==true){
        newBalance=previce+amount;
    }else{
        newBalance=previce-amount;
    }
    document.getElementById('balance-update').innerText= newBalance;
}
document.getElementById('deposit-button').addEventListener('click',function(){
  const amount=  getTotal('deposit-input');
if(amount>0){
    updateTotal('deposit-add',amount)
  updateBalance(amount,true)
}else{
    alert('number')
}
})
// withdraw 
document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount=  getTotal('withdraw-input');
    const balance=getValue('balance-update')
  if(amount>0 && amount<=balance){
    updateTotal('withdraw-total',amount)
    updateBalance(amount,false)
  }
  else{
      alert('no')
  }
})