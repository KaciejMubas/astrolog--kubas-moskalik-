import { useState } from 'react';
import { CatalogList } from './components/CatalogList';
import { ObjectDetails } from './components/ObjectDetails';
import { DiscoveryForm } from './components/DiscoveryForm';
import './App.css';

// dawid interfejs zrobiłem tak ze eksportujemy go odrazu z tad
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
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Neptune_Voyager2_color_calibrated%2C_brightened.png/500px-Neptune_Voyager2_color_calibrated%2C_brightened.png'
    },
    {
        id: '2',
        name: 'Pluton',
        type: 'Planeta karłowata',
        distance: '5.9 mld km od Słońca',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Pluto-01_Stern_03_Pluto_Color_TXT.jpg/500px-Pluto-01_Stern_03_Pluto_Color_TXT.jpg'
    },
    {
        id: '3',
        name: 'Tytan',
        type: 'Księżyc Saturna',
        distance: '1.2 mld km od Ziemi',
        imageUrl: 'https://s3.us-west-004.backblazeb2.com/wcn-media/2025/01/403_Titan_2D_Slider_Surface-768x516.jpg'
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