const { default: instance } = require("common/config/api")

const categoriasService = {
    buscar: async () => {
        const resposta = await instance.get('/categorias');
        return resposta.data;
    }
}

export default categoriasService;