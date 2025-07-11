export default function initMenuMobile() {
    const buttonMobile = document.querySelector('[data-menu="mobile"]');
    const ulList = document.querySelector('[data-menu="list"]');
    const clickForaMobile = document.querySelector('body');
    buttonMobile.addEventListener('click', abrirMenuMobile);

    function abrirMenuMobile(){
        ulList.classList.toggle('ativo');
        buttonMobile.classList.toggle('ativo');

        function handleBodyClick(event) {
            if (
                !buttonMobile.contains(event.target) &&
                !ulList.contains(event.target)
            ) {
                ulList.classList.remove('ativo');
                buttonMobile.classList.remove('ativo');
                document.body.removeEventListener('click', handleBodyClick);
            }
        }

        document.body.addEventListener('click', handleBodyClick);
    }
}