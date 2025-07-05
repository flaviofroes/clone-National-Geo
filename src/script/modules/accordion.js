// AccordionList: é uma lista empilhada verticalmente que ao se clicada, revela ou oculta um conteúdo associado a cada elemento desta lista 
// usa-se um evento click para cada item que vai ser relaciona ao seu conteudo.
export default function iniAccordion() {
    const accordionList = document.querySelectorAll("[data-accordion='accordion'] dt");
    accordionList.forEach(itemDt => {
        // ["mouseenter", "click"].forEach(itemEvent => {
        //     itemDt.addEventListener(itemEvent, accordion)
        // }); 
                itemDt.addEventListener("mouseenter", () => itemDt.style.cursor = "pointer");
                itemDt.addEventListener("click", accordion);
            });

                    function accordion() {
                        this.classList.toggle('ativo');
                        this.nextElementSibling.classList.toggle('ativo');
                    }
               accordionList[0].classList.add('ativo');
               accordionList[0].nextElementSibling.classList.add('ativo');     
        }