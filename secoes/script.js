function populateSelect(inst){

    const SELECT_EL = document.querySelector('#section-filtragem select')
    SELECT_EL.innerHTML = `<option value="0">Todas</option>`

    let DISCIPLINAS_FILTRADAS = DISCIPLINAS.filter((disciplina)=> disciplina.instituicao == inst)

    for(let i=0; i<DISCIPLINAS_FILTRADAS.length; i++){

        SELECT_EL.innerHTML += `

            <option value="${DISCIPLINAS_FILTRADAS[i].nome}">${DISCIPLINAS_FILTRADAS[i].nome}</option>

        `
    }
}

function filterModules(inst){

    let input_el_value = document.querySelector('input').value
    let select_el_value = document.querySelector('select').value

    if(select_el_value == 0){
        return MATERIAS.filter(
            (materia)=> DISCIPLINAS[materia.disciplina].instituicao == inst
        )
    }
    return MATERIAS.filter(
        (materia)=> DISCIPLINAS[materia.disciplina].instituicao == inst
                && materia.nome.includes(input_el_value)
                && DISCIPLINAS[materia.disciplina].nome == select_el_value
        )
}

function loadModules(inst){

    const SECTION_EL = document.querySelector('#modulos-section')
    SECTION_EL.innerHTML = ''

    let MATERIAS_FILTRADAS = filterModules(inst)

    for(let i=0; i<MATERIAS_FILTRADAS.length; i++){

        SECTION_EL.innerHTML += `

        <div class="cards">
            <div class="card-header" style="border-bottom: 5px solid ${DISCIPLINAS[MATERIAS_FILTRADAS[i].disciplina].cor};">
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
