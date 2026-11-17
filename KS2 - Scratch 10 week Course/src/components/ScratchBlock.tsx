import React from 'react';
import { ScratchCodeBlock, ScratchCategory } from '../types';

interface ScratchBlockProps {
  block: ScratchCodeBlock;
  depth?: number;
}

const categoryColors: Record<ScratchCategory, { bg: string; border: string; dark: string }> = {
  events: { bg: '#FFBF00', border: '#D9A300', dark: '#C49200' },
  motion: { bg: '#4C97FF', border: '#3373CC', dark: '#2B62B2' },
  looks: { bg: '#9966FF', border: '#774DCB', dark: '#633BA8' },
  sound: { bg: '#CF63CF', border: '#A646A6', dark: '#8C358C' },
  control: { bg: '#FFAB19', border: '#CF8B17', dark: '#B5740F' },
  sensing: { bg: '#5CB1D6', border: '#3A8EA8', dark: '#2C738A' },
  operators: { bg: '#59C059', border: '#389438', dark: '#297B29' },
  variables: { bg: '#FF8C1A', border: '#DB6E00', dark: '#BD5C00' },
};

// Formats text like "change [color v] effect by (25)" into formatted tokens
const renderBlockText = (text: string) => {
  // Regex to match (inputs), [dropdowns v], and regular text
  const parts = text.split(/(\([^)]+\)|\[[^\]]+\]|<[^>]+>)/g);

  return parts.map((part, index) => {
    if (!part) return null;

    if (part.startsWith('(') && part.endsWith(')')) {
      const val = part.slice(1, -1);
      return (
        <span key={index} className="bg-white text-slate-800 rounded-full px-2.5 py-0.5 mx-1 font-bold text-xs inline-flex items-center shadow-inner">
          {val}
        </span>
      );
    }

    if (part.startsWith('[') && part.endsWith(']')) {
      let val = part.slice(1, -1);
      const isDropdown = val.endsWith(' v');
      if (isDropdown) val = val.slice(0, -2);
      return (
        <span key={index} className="bg-black/20 text-white rounded-md px-2 py-0.5 mx-1 font-semibold text-xs inline-flex items-center gap-1">
          {val}
          {isDropdown && <span className="text-[10px] opacity-80">▼</span>}
        </span>
      );
    }

    if (part.startsWith('<') && part.endsWith('>')) {
      const val = part.slice(1, -1);
      return (
        <span key={index} className="bg-black/20 text-white rounded px-2 py-0.5 mx-1 font-semibold text-xs inline-flex items-center">
          {val}
        </span>
      );
    }

    return (
      <span key={index} className="mx-0.5 drop-shadow-sm">
        {part}
      </span>
    );
  });
};

export const ScratchBlock: React.FC<ScratchBlockProps> = ({ block, depth = 0 }) => {
  const colors = categoryColors[block.category] || categoryColors.events;

  // C-Block (wraps nested blocks like 'forever' or 'if')
  if (block.shape === 'c-block') {
    return (
      <div className="flex flex-col my-1 font-['Fredoka',sans-serif]">
        {/* Top bar of the C */}
        <div
          className="scratch-block rounded-t-lg rounded-br-md py-1.5 px-3 flex items-center shadow-md text-white text-sm"
          style={{ backgroundColor: colors.bg, borderTop: `1px solid ${colors.border}` }}
        >
          {renderBlockText(block.text)}
        </div>

        {/* Inner indented slot */}
        <div
          className="border-l-[14px] pl-3 py-1 flex flex-col gap-1 my-0.5"
          style={{ borderColor: colors.bg }}
        >
          {block.nestedBlocks && block.nestedBlocks.length > 0 ? (
            block.nestedBlocks.map((nested, idx) => (
              <ScratchBlock key={idx} block={nested} depth={depth + 1} />
            ))
          ) : (
            <div className="h-6 w-32 bg-black/10 rounded flex items-center justify-center text-xs text-white/70 italic">
              (drop blocks here)
            </div>
          )}
        </div>

        {/* Bottom bar of the C */}
        <div
          className="h-4 w-28 rounded-b-lg rounded-tr-md shadow-sm"
          style={{ backgroundColor: colors.bg }}
        />
      </div>
    );
  }

  // Hat block (curved top)
  if (block.shape === 'hat') {
    return (
      <div className="inline-block my-1 font-['Fredoka',sans-serif]">
        <div
          className="scratch-block-hat scratch-block py-2 px-4 text-white text-sm shadow-md"
          style={{ backgroundColor: colors.bg, borderTop: `2px solid ${colors.border}` }}
        >
          {block.category === 'events' && <span className="mr-1.5 text-base">🚩</span>}
          {renderBlockText(block.text)}
        </div>
      </div>
    );
  }

  // Reporter (pill shaped)
  if (block.shape === 'reporter') {
    return (
      <span
        className="scratch-block scratch-block-reporter text-white text-xs shadow-sm font-['Fredoka',sans-serif]"
        style={{ backgroundColor: colors.bg }}
      >
        {renderBlockText(block.text)}
      </span>
    );
  }

  // Boolean (hexagonal/diamond styled)
  if (block.shape === 'boolean') {
    return (
      <span
        className="scratch-block scratch-block-boolean text-white text-xs shadow-sm font-['Fredoka',sans-serif]"
        style={{ backgroundColor: colors.bg }}
      >
        {renderBlockText(block.text)}
      </span>
    );
  }

  // Standard Stack block
  return (
    <div className="inline-block my-0.5 font-['Fredoka',sans-serif]">
      <div
        className="scratch-block text-white text-sm shadow-md flex items-center"
        style={{ backgroundColor: colors.bg, borderTop: `1px solid ${colors.border}` }}
      >
        {renderBlockText(block.text)}
      </div>
    </div>
  );
};
