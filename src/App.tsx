import { useState } from 'react';
import { CatalogList } from './components/CatalogList';
import { ObjectDetails } from './components/ObjectDetails';
import { DiscoveryForm } from './components/DiscoveryForm';
import './App.css';

// Eksportujemy interfejs bezpośrednio stąd
export interface CelestialObject {
    id: string;
    name: string;
    type: string;
    distance: string;
    imageUrl: string;
}

const NoweObiektyStartowe: CelestialObject[] = [
    {
        id: '1',
        name: 'Neptun',
        type: 'Lodowy olbrzym',
        distance: '4.5 mld km od Słońca',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_2019_color_processed.jpg'
    },
    {
        id: '2',
        name: 'Pluton',
        type: 'Planeta karłowata',
        distance: '5.9 mld km od Słońca',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_Light_and_Dark__High-Res.jpg'
    },
    {
        id: '3',
        name: 'Tytan',
        type: 'Księżyc Saturna',
        distance: '1.2 mld km od Ziemi',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Titan_visible_light_Cassini_2015.jpg'
    }
];

export default function App() {
    const [objects, setObjects] = useState<CelestialObject[]>(NoweObiektyStartowe);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const selectedObject = objects.find(obj => obj.id === selectedId) || null;

    const handleAddObject = (nowyObiekt: Omit<CelestialObject, 'id'>) => {
        const obiektZId: CelestialObject = {
            ...nowyObiekt,
            id: Date.now().toString()
        };
        setObjects([...objects, obiektZId]);
    };

    const handleDeleteObject = (idDoUsuniecia: string) => {
        setObjects(objects.filter(obj => obj.id !== idDoUsuniecia));
        if (selectedId === idDoUsuniecia) {
            setSelectedId(null);
        }
    };

    return (
        <div className="app-theme">
            <header className="app-header">
                <h1>🌌 AstroLog - Katalog Ciał Niebieskich</h1>
            </header>

            <main className="app-content">
                <section className="left-panel">
                    <CatalogList
                        listaObiektow={objects}
                        kliknietoObiekt={setSelectedId}
                        wybraneId={selectedId}
                    />
                </section>

                <section className="center-panel">
                    <ObjectDetails
                        obiekt={selectedObject}
                        zakonczObserwacje={() => setSelectedId(null)}
                        usunObiekt={handleDeleteObject}
                    />
                </section>

                <section className="right-panel">
                    <DiscoveryForm dodajObiekt={handleAddObject} />
                </section>
            </main>
        </div>
    );
}