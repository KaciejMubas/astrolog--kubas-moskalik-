import type { CelestialObject } from '../App';

interface ObjectDetailsProps {
    obiekt: CelestialObject | null;
    zakonczObserwacje: () => void;
    usunObiekt: (id: string) => void;
}

export function ObjectDetails({ obiekt, zakonczObserwacje, usunObiekt }: ObjectDetailsProps) {
    if (!obiekt) {
        return (
            <div className="object-details">
                <h2>Panel Obserwacyjny</h2>
                <p className="no-selection">
                    Kliknij obiekt z katalogu po lewej stronie, aby rozpocząć obserwację
                </p>
            </div>
        );
    }

    return (
        <div className="object-details">
            <h2>Panel Obserwacyjny</h2>
            <div className="details-card">
                <img src={obiekt.imageUrl} alt={obiekt.name} className="details-image" />
                <h3>{obiekt.name}</h3>
                <p><strong>Typ:</strong> {obiekt.type}</p>
                <p><strong>Odległość:</strong> {obiekt.distance}</p>

                <div className="details-actions">
                    <button className="action-btn" onClick={zakonczObserwacje}>
                        Zakończ obserwację
                    </button>
                    <button className="action-btn delete-btn" onClick={() => usunObiekt(obiekt.id)}>
                        Usuń obiekt
                    </button>
                </div>
            </div>
        </div>
    );
}