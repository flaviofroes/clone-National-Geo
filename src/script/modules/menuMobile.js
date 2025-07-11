export default function initMenuMobile() {
    const buttonMobile = document.querySelector('[data-menu="mobile"]');
    const ulList = document.querySelector('[data-menu="list"]');
    const clickForaMobile = document.querySelector('body');
    buttonMobile.addEventListener('click', abrirMenuMobile);

    function abrirMenuMobile(){
        ulList.classList.toggle('ativo');
        buttonMobile.classList.toggle('ativo');

        clickForaMobile.addEventListener("mousedown", (event)=>{
            if(event.target !== buttonMobile && event.target !== ulList){
                ulList.classList.remove('ativo');
                buttonMobile.classList.remove('ativo');
            }
        })
    }
}