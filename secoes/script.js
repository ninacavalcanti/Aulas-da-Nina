import { MATERIAS, DISCIPLINAS} from './data.js'

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
                && materia.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(input_el_value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
        )
    }
    return MATERIAS.filter(
        (materia)=> DISCIPLINAS[materia.disciplina].instituicao == inst
                && materia.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(input_el_value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
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

const main = ()=> {
    let escola
    if(document.body.classList.contains('brasileira')){
        escola = 'brasileira'
    }else{
        escola = 'fundacao'
    }

    window.addEventListener('load', ()=> {
        loadModules(escola)
        populateSelect(escola)
    })

    document.querySelector('#search-select').addEventListener('input', ()=> loadModules(escola))
    document.querySelector('#search-input').addEventListener('input', ()=> loadModules(escola))
}

main()
