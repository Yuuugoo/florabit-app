import { motion } from 'framer-motion';

export default function PlantCard({ name, mood, onRemove }) {
  // Mood stages (we can expand this later)
  const growthStages = {
    seed: null,
    sprout: '🌱',
    flower: '🌸',
    dead: '🥀',
  };

  return (
    <motion.div
      className="relative w-28 h-28 flex flex-col items-center justify-end p-1 font-pixel text-xs rounded-none bg-transparent"
      whileHover={{ scale: 1.05 }}
    >
      <button
        className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1 font-bold rounded-none"
        onClick={onRemove}
      >
        X
      </button>

      {mood !== 'seed' && (
        <div className="absolute top-6 text-2xl">
          {growthStages[mood] || '🌱'}
        </div>
      )}

      <img src="/flower-pot-red.png" alt="pot" className="w-12 h-12 z-10" />

      {/* Name below */}
      <div className="mt-1 text-center break-words">{name}</div>
    </motion.div>
  );
}
