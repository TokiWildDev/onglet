console.log('HelloWorld');

const buttons = document.getElementsByClassName('containOnglet__containButton__button')
const text = document.getElementsByClassName('containOnglet__containText')

const removeText = () =>
{
    
    for(let j=0; j<text.length; j++)
    {
        text[j].classList.remove('containOnglet__containText--active')
    }
}
const removeButtons = ()=>
{
    for(let j=0; j<buttons.length; j++)
    {
        buttons[j].classList.remove('containOnglet__containButton__button--active')
    }
}  



for(let i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener('click', ()=>
    {
        removeButtons();
        removeText();
        text[i].classList.add('containOnglet__containText--active')
        buttons[i].classList.add('containOnglet__containButton__button--active')          
   
    });
};
