const subjects = [
    "Artes",
    "Biologia",
    "Educação física",
    "Ciências",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


//Funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1 
    return subjects[position]
}

function convertTimeToMinutes(time) {
    const [hour, minutes] = time.split(':')
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertTimeToMinutes
}