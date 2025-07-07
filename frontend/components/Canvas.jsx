import { useState } from 'react';
import PlantCard from './PlantCard';

export default function GardenCanvas() {

  const [plants, setPlants] = useState([]);

  const [form, setForm] = useState({ name: '', mood: 'happy' });

  const addPlant = () => {
    if (!form.name.trim()) return;
    setPlants([...plants, { ...form }]);
    setForm({ name: '', mood: 'happy' });
  };

  const removePlant = (index) => {
    setPlants(plants.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      {/* Canvas Background */}
       <div
          className="grid grid-cols-3 gap-4 p-4"
          style={{
              backgroundImage: "url('/grass-tile.png')",
              border: "2px solid black",
              padding: "1rem",
          }}
          >
          {plants.map((plant, i) => (
              <PlantCard key={i} {...plant} onRemove={() => removePlant(i)} />
          ))}
      </div>

      {/* Form */}
      <div className="bg-white border-2 border-black p-3 mb-4 w-full max-w-sm rounded-none font-pixel">
        <h2 className="text-sm mb-2">➕ Add New Plant</h2>
        <div className="flex flex-col gap-2"> 
          <input
            type="text"
            placeholder="Plant name"
            className="input input-bordered input-xs w-full rounded-none"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <select
            className="select select-bordered select-xs rounded-none"
            value={form.mood}
            onChange={(e) => setForm({ ...form, mood: e.target.value })}
          >
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="bloom">Blooming</option>
            <option value="dead">Dead</option>
          </select>
          <button
            className="btn btn-sm bg-yellow-300 text-black border-2 border-black rounded-none"
            onClick={addPlant}
          >
            Add Plant
          </button>
        </div>
      </div>
    </div>
  );
}
