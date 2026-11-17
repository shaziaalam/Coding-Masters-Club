import React from 'react';
import { JrBlock, JrCategory } from '../types';

interface JuniorBlockProps {
  block: JrBlock;
}

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'flag':
      return <span className="text-2xl drop-shadow-sm">🚩</span>;
    case 'tap':
      return <span className="text-2xl drop-shadow-sm">👆</span>;
    case 'bump':
      return <span className="text-2xl drop-shadow-sm">💥</span>;
    case 'right':
      return <span className="text-2xl font-black drop-shadow-sm">➡️</span>;
    case 'left':
      return <span className="text-2xl font-black drop-shadow-sm">⬅️</span>;
    case 'up':
      return <span className="text-2xl font-black drop-shadow-sm">⬆️</span>;
    case 'down':
      return <span className="text-2xl font-black drop-shadow-sm">⬇️</span>;
    case 'hop':
      return <span className="text-2xl drop-shadow-sm">🦘</span>;
    case 'turn_right':
      return <span className="text-2xl drop-shadow-sm">↷</span>;
    case 'turn_left':
      return <span className="text-2xl drop-shadow-sm">↶</span>;
    case 'grow':
      return <span className="text-2xl drop-shadow-sm">➕</span>;
    case 'shrink':
      return <span className="text-2xl drop-shadow-sm">➖</span>;
    case 'reset_size':
      return <span className="text-2xl drop-shadow-sm">🔄</span>;
    case 'hide':
      return <span className="text-2xl drop-shadow-sm">🙈</span>;
    case 'show':
      return <span className="text-2xl drop-shadow-sm">🐵</span>;
    case 'say':
      return <span className="text-2xl drop-shadow-sm">💬</span>;
    case 'pop':
      return <span className="text-2xl drop-shadow-sm">🔊</span>;
    case 'wait':
      return <span className="text-2xl drop-shadow-sm">⏱️</span>;
    case 'speed':
      return <span className="text-2xl drop-shadow-sm">🐇</span>;
    case 'repeat':
      return <span className="text-2xl drop-shadow-sm">🔁</span>;
    case 'end':
      return <span className="text-2xl drop-shadow-sm">🛑</span>;
    case 'forever':
      return <span className="text-2xl drop-shadow-sm">♾️</span>;
    default:
      return <span className="text-xl">⭐</span>;
  }
};

const getCategoryClass = (cat: JrCategory) => {
  switch (cat) {
    case 'trigger':
      return 'jr-block-trigger';
    case 'motion':
      return 'jr-block-motion';
    case 'looks':
      return 'jr-block-looks';
    case 'sound':
      return 'jr-block-sound';
    case 'control':
      return 'jr-block-control';
    case 'end':
      return 'jr-block-end';
    default:
      return 'jr-block-motion';
  }
};

export const JuniorBlock: React.FC<JuniorBlockProps> = ({ block }) => {
  // If it's a Repeat Loop block that wraps nested blocks
  if (block.nestedBlocks && block.nestedBlocks.length > 0) {
    return (
      <div className="flex items-center bg-orange-100/90 border-3 border-orange-400 p-2 rounded-2xl relative shadow-sm my-1 mr-2">
        <div className="flex flex-col items-center justify-center mr-2 px-1 text-orange-950 font-bold font-['Fredoka',sans-serif] text-xs">
          <span className="text-xl">🔁</span>
          <span className="bg-white px-2 py-0.5 rounded-full shadow-inner border border-orange-300 text-xs font-black">
            {block.value || 4}x
          </span>
        </div>
        <div className="flex items-center gap-1">
          {block.nestedBlocks.map((nested, idx) => (
            <JuniorBlock key={idx} block={nested} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`jr-block-base ${getCategoryClass(block.category)}`}
      title={`${block.label}${block.value !== undefined ? `: ${block.value}` : ''}`}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-full h-full pb-1">
        {renderIcon(block.iconName)}
      </div>

      {/* Number parameter badge if present */}
      {block.value !== undefined && (
        <span className="jr-param-badge">
          {block.value}
        </span>
      )}
    </div>
  );
};

interface JuniorRibbonProps {
  blocks: JrBlock[];
}

export const JuniorRibbon: React.FC<JuniorRibbonProps> = ({ blocks }) => {
  return (
    <div className="bg-amber-100/80 border-3 border-dashed border-amber-300 rounded-2xl p-3 sm:p-4 my-2 flex items-center overflow-x-auto shadow-inner">
      <div className="flex items-center gap-1.5 min-w-max pb-2 pt-1">
        {blocks.map((block, idx) => (
          <React.Fragment key={idx}>
            <JuniorBlock block={block} />
            {idx < blocks.length - 1 && (
              <span className="text-amber-400 text-lg font-black select-none pointer-events-none mr-1">
                ➔
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
