document.querySelector('.thumbnail').addEventListener('mouseover',function(){
    document.querySelector('.thumbnail').classList.add('border');
});
document.querySelector('.thumbnail').addEventListener('mouseout',function(){
    document.querySelector('.thumbnail').classList.remove('border');
});
