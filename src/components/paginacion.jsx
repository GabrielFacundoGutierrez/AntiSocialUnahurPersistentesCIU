import { useState } from 'react';

function Paginado({ items, itemsPorPagina }) {
    const [paginaActual, setPaginaActual] = useState(1);

    const indiceDelUltimoItem = paginaActual * itemsPorPagina;
    const indiceDelPrimerItem = indiceDelUltimoItem - itemsPorPagina;
    const listaDeItems = items.slice(indiceDelPrimerItem, indiceDelUltimoItem);

    const paginar = (pageNumber) => setPaginaActual(pageNumber);

    return (
        <div>
            <ul>
                {listaDeItems.map((item, indice) => (
                    <li key={indice}>{item}</li>
                ))}
            </ul>
            <div>
                {Array.from({ length: Math.ceil(items.length / itemsPorPagina) }).map((_, indice) => (
                    <button key={indice} onClick={() => paginate(indice + 1)}>
                        {indice + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Paginado;

function App() {
    const data = Array.from({ length: 50 }, (_, i) => `Pagina ${i + 1}`);

    return (
        <PaginatedList items={data} itemsPorPagina={6} />
    );
}

