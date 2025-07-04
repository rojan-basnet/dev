const icon =document.getElementById('icon');
const container=document.getElementById('container');
const yes=document.getElementById('yes');
const no=document.getElementById('no');
const response=document.getElementById('response');

icon.addEventListener('click',()=>{
    container.style.display='flex';
    icon.style.display='none';
})
let moved=false;
function big(){
    
    if(!moved){
        no.style.position='relative';
        no.style.left='50px';
        moved=true;
    }
    else{
        no.style.position='';
        no.style.right='50px';
        moved=false;
    }

    
}
yes.addEventListener('click',()=>{
    container.style.display='none';
    response.style.display='block';
})
