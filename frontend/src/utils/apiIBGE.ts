const BASE = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

export const apiIBGE = {
    getEstados: async () => {
        const result = await fetch(`${BASE}`);
        const json = await result.json();
        return json;
    },
    getCidades: async (uf : string) => {
        const result = await fetch(`${BASE}/${uf}/distritos`);
        const json = await result.json();
        return json;
    }
}