import { useState } from 'react';

interface DiscoveryFormProps {
    dodajObiekt: (nowyObiekt: { name: string; type: string; distance: string; imageUrl: string }) => void;
}

export function DiscoveryForm({ dodajObiekt }: DiscoveryFormProps) {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [distance, setDistance] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!name || !type || !distance || !imageUrl) {
            setError('Wszystkie pola muszą być wypełnione!');
            return;
        }

        setError('');
        dodajObiekt({ name, type, distance, imageUrl });

        setName('');
        setType('');
        setDistance('');
        setImageUrl('');
    };

    return (
        <div className="discovery-form-container">
            <h2>Rejestr Odkryć</h2>



            <form className="discovery-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nazwa obiektu:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="np. Kepler-22b" />
                </div>

                <div className="form-group">
                    <label>Typ obiektu:</label>
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="np. Egzoplaneta" />
                </div>

                <div className="form-group">
                    <label>Odległość:</label>
                    <input type="text" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="np. 620 lat świetlnych" />
                </div>

                <div className="form-group">
                    <label>Link do zdjęcia (URL):</label>
                    <input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://..." />
                </div>

                <button type="submit" className="submit-btn">Dodaj obiekt</button>
                {error && <p style={{ color: 'red', fontWeight: 'bold', paddingBottom: '5px'}}>{error}</p>}
            </form>
        </div>
    );
}