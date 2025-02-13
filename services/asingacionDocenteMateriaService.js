const asignacionDocenteMateriaRepository= require('../repository/asignacionDocenteMateriaRepository')

const getAsignacionPorDocente = async(id)=>{
    try {
        return asignacionDocenteMateriaRepository.finfByDocente(id);
    } catch (error) {
        throw new Error('Erro en la asignacion del docente  ' + error.message);
    }
   
}

module.exports={getAsignacionPorDocente}