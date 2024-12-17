import React, { useState } from 'react';
import { X, Minus } from 'lucide-react';

const VirtualKeyboard = () => {
  const [input, setInput] = useState('');
  
  // Definir las filas del teclado - aquí puedes personalizar los caracteres
  const keyboardLayout = [
    ['esc', '☼', '☼', '⊞', '▣', 'F5', 'F6', '⏮', '⏯', '⏭', '🔇', '🔈', '🔊', '☰'],
    ['º', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\'', '¿', '⌫'],
    ['↹', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '^', '*', '+'],
    ['⇧', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', '¨', 'Ç'],
    ['⇧', '<', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '-', '⇧'],
    ['fn', '^', '⌘', '⌥', ' ', '⌥', '⌘', '◄', '▼', '►']
  ];

  // Manejar el clic en una tecla
  const handleKeyClick = (key) => {
    if (key === '⌫') {
      setInput(prev => prev.slice(0, -1));
    } else if (key === '⇧' || key === 'esc' || key === 'fn' || key === '⌘' || key === '⌥') {
      // Teclas especiales - no añadir al input
      return;
    } else {
      setInput(prev => prev + key);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-black p-4 rounded-xl shadow-lg">
      {/* Barra superior */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button className="text-white"><X size={16} /></button>
          <button className="text-white"><Minus size={16} /></button>
        </div>
        <div className="text-white font-medium">Keyboard</div>
        <div className="w-8"></div>
      </div>

      {/* Área de sugerencias */}
      <div className="bg-zinc-900 text-gray-400 p-3 mb-4 rounded-lg">
        No Suggestions
      </div>

      {/* Teclado */}
      <div className="grid gap-1">
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1">
            {row.map((key, keyIndex) => {
              const isSpecialKey = ['⇧', 'esc', 'fn', '⌘', '⌥'].includes(key);
              const isSpaceBar = key === ' ';
              
              return (
                <button
                  key={`${rowIndex}-${keyIndex}`}
                  className={`
                    ${isSpaceBar ? 'flex-grow' : 'w-12'} 
                    h-12 
                    bg-zinc-800 
                    text-white 
                    rounded-lg
                    flex 
                    items-center 
                    justify-center
                    hover:bg-zinc-700
                    transition-colors
                    ${isSpecialKey ? 'bg-zinc-900' : ''}
                  `}
                  onClick={() => handleKeyClick(key)}
                >
                  {key}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Área de visualización del input */}
      <div className="mt-4 p-3 bg-zinc-900 text-white rounded-lg min-h-12">
        {input}
      </div>
    </div>
  );
};

export default VirtualKeyboard;