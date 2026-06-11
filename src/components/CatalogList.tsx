import type { CelestialObject } from '../App'; // <-- Bezpieczny import typu

interface CatalogListProps {
    listaObiektow: CelestialObject[];
    kliknietoObiekt: (id: string) => void;
    wybraneId: string | null;
}

export function CatalogList({ listaObiektow, kliknietoObiekt, wybraneId }: CatalogListProps) {
    return (
        <div className="catalog-list">
            <h2>Katalog Obiektów</h2>
            <div className="list-container">
                {listaObiektow.map((item) => {
                    const active = wybraneId === item.id ? 'active' : '';
                    return (
                        <div
                            key={item.id}
                            className={`list-item ${active}`}
                            onClick={() => kliknietoObiekt(item.id)}
                        >
                            <img src={item.imageUrl} alt={item.name} className="thumbnail" />
                            <span className="object-name">{item.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}