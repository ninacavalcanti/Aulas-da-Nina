const SECTION_EL = document.querySelector('#modulos-section')

function filterModules(inst){

}

function loadModules(inst){

    let MATERIAS_FILTRADAS = MATERIAS.filter((materia)=> DISCIPLINAS[materia.disciplina].instituicao == inst)

    SECTION_EL.innerHTML = ''

    for(let i=0; i<MATERIAS_FILTRADAS.length; i++){

        SECTION_EL.innerHTML += `

        <div class="cards">
            <div class="card-header" style="border-bottom: 7px solid ${DISCIPLINAS[MATERIAS_FILTRADAS[i].disciplina].cor};">
                <h2>${MATERIAS_FILTRADAS[i].nome}</h2>
                <p>${DISCIPLINAS[MATERIAS_FILTRADAS[i].disciplina].nome}</p>
            </div>
            <p>${MATERIAS_FILTRADAS[i].n_listas} lista(s)</p>
            <a href="${MATERIAS_FILTRADAS[i].src}" class="button">Acessar</a>
        </div>

        `
    }
}

// DATABASE =========================================================== |

const MATERIAS = [
    {
        nome : "Frações",
        disciplina : 0, //matemática
        src : "./modulos/teste.html",
        n_listas : 4
    },
    {
        nome : "Cálculo I",
        disciplina : 0, //matemática
        src : "./modulos/teste.html",
        n_listas : 7
    },
    {
        nome : "Tempos verbais",
        disciplina : 2, //latim
        src : "./modulos/teste.html",
        n_listas : 2
    },
    {
        nome : "Tempos verbais",
        disciplina : 3, //literatura italiana
        src : "./modulos/teste.html",
        n_listas : 1
    },
    {
        nome : "Figuras de linguagem",
        disciplina : 1, //português
        src : "./modulos/teste.html",
        n_listas : 10
    },
]

const DISCIPLINAS = [
    {
        id : 0,
        nome : "Matemática",
        cor : "orange",
        instituicao : 'brasileira' //ou 'fundacao'
    },
    {
        id : 1,
        nome : "Português",
        cor : "blue",
        instituicao : 'brasileira' //ou 'fundacao'
    },
    {
        id : 2,
        nome : "Latim",
        cor : "green",
        instituicao : 'fundacao' //ou 'fundacao'
    },
    {
        id : 3,
        nome : "Lit. italiana",
        cor : "red",
        instituicao : 'fundacao' //ou 'fundacao'
    },
]
