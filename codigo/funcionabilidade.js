const popoverOpts = {
    placement: 'bottom',
    trigger: 'hover',
    html: true,
}

const popoverContent = '<div class="openpopover">';


$(document).ready(function() {
    $('.primeirainfo').popover({
        ...popoverOpts,
        content: `${popoverContent}<img class="openpopover__img" src="https://s2.glbimg.com/paF5KTEVGzMU-ZcZa2mjYicNDjM=/e.glbimg.com/og/ed/f/original/2015/03/09/ada.jpg" alt=""><p class="openpopover__title">Augusta Ada Byron King</p><p>Augusta Ada Byron King, Condessa de Lovelace, atualmente conhecida como Ada Lovelace, foi uma matemática e escritora inglesa. Hoje é reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina, a máquina analítica de Charles Babbage.</p></div>`
    });
    $('.segundainfo').popover({
        ...popoverOpts,
        content: `${popoverContent}<img class="openpopover__img" src="https://www.mindtek.com.br/wp-content/uploads/2021/03/01.png" alt=""><p class="openpopover__title">Gráfico entre sexos</p><p>Porcentagem entre mulheres, homens e intersexo no ramo da Computação entre 2018 e 2019.</p></div>`
    });
    $('.terceirainfo').popover({
        ...popoverOpts,
        content: `${popoverContent}<img class="openpopover__img" src="https://www.gov.br/mcti/pt-br/arquivos/contratos-de-gestao-organizacoes-sociais/cgee.png" alt=""><p class="openpopover__title">CGEE</p><p>São quatro as Linhas de Ação do CGEE. A primeira são os estudos, análises e avaliações que objetivam agregar valor à tomada de decisões e à formulação e implementação das políticas de Ciência, Tecnologia e Inovação – CT&I; a segunda linha de ação é a articulação, por meio da qual o CGEE busca auxiliar os gestores públicos a aplicarem com maior efetividade os recursos públicos destinados às políticas de CT&I.</p></div>`
    });
    $('.quartainfo').popover({
        ...popoverOpts,
        content: `${popoverContent}<img class="openpopover__img" src="https://www.mindtek.com.br/wp-content/uploads/2021/03/2.png" alt=""><p class="openpopover__title">Gráfico da idade dos entrevistados</p><p>Dados sobre a porcentagem da idade dos entrevistados entre 2018 e 2019.</p></div>`
    });
    $('.quintainfo').popover({
        ...popoverOpts,
        placement: 'right',
        content: `${popoverContent}<img class="openpopover__img" src="https://www.mindtek.com.br/wp-content/uploads/2021/03/3.png" alt=""><p class="openpopover__title">Gráfico do início dos estudos na TI </p><p>Gráfico que mostra que 57% das pessoas iniciaram sua carreira na tecnologia em centro de ensino formal mas ainda há um grande percentual que começam a aprender de forma livre.  </p></div>`
    });
    $('.sextainfo').popover({
        ...popoverOpts,
        placement: 'right',
        content: `${popoverContent}<img class="openpopover__img" src="https://www.mindtek.com.br/wp-content/uploads/2021/03/4.png" alt=""><p class="openpopover__title">Gráfico da porcentagem feminina em grupos na TI</p><p> Gráfico que mostra que em 64,9% dos casos, as mulheres representam no máximo 20% das equipes de trabalho em tecnologia. Os principais cargos e áreas ocupados pelas mulheres nas equipes de tecnologia são: desenvolvedora, analista, gerência, project, tester e design.</p></div>`
    });
    dinamicaModal();
    dinamicaReferencias();
});

function dinamicaModal() {
    const modalElement = document.getElementById("modal");
    const openModalElement = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");


    const mouseOver = () => {
        modalElement.classList.add("open");
    };

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("open");
    });


    openModalElement.addEventListener("mouseover", mouseOver);
};

function dinamicaReferencias() {
    const coll = document.getElementsByClassName("collapsedButton");
    let i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("collapsedButton--active");
            const conteudo = this.nextElementSibling;
            if (conteudo.style.display === "block") {
                conteudo.style.display = "none";
            } else {
                conteudo.style.display = "block";
            }
        });
    }
}