let select=document.querySelectorAll('select')
let input=document.getElementById('input')
let btn=document.getElementById('btn')
let output=document.getElementById('result')
fetch('https://api.frankfurter.app/currencies').then(res=>(res.json()))
.then(res=>displaydropdown(res))

function displaydropdown(res){
    let curr=Object.entries(res);
    for(let i=0;i<curr.length;i++){
    let opt= `<option value="${curr[i][0]}">${curr[i][0]}</option>`
    select[0].innerHTML+=opt;
    select[1].innerHTML+=opt;
    }
    
}

btn.addEventListener('click',()=>{
    let curr1=select[0].value;
    let curr2=select[1].value;
    let inputval=input.value;
    if(curr1==curr2){
        output.value=input.value;
    }
    else{
        convert(curr1,curr2,inputval)
    }

});
function convert(curr1,curr2,inputval){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputval}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    output.value=Object.values(data.rates)[0]
  });
}