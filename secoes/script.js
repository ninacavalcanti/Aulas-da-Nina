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
                && materia.nome.toLowerCase().includes(input_el_value.toLowerCase())
        )
    }
    return MATERIAS.filter(
        (materia)=> DISCIPLINAS[materia.disciplina].instituicao == inst
                && materia.nome.toLowerCase().includes(input_el_value.toLowerCase())
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
        nome : "Álgebra Básica",
        disciplina : 0, //matemática
        src : "./modulos/algebra-basica.html",
        n_listas : 1
    },
]

const DISCIPLINAS = [
    {
        id : 0,
        nome : "Matemática",
        cor : "orange",
        instituicao : 'brasileira' //ou 'fundacao'
    },
]
