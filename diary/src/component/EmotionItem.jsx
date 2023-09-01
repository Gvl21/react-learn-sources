import React from 'react';
import './EmotionItem.css';

function EmotionItem({ id, img, name, onClick, isSelected }) {
    const handleOnClick = () => {
        onClick(id);
    };
    return (
        <div
            className={[
                'EmotionItem',
                isSelected ? `EmotionItem_${id}` : `EmotionItem_default`,
            ].join(' ')}
            onClick={handleOnClick}
        >
            <img src={img} alt={name} />
            <span>{name}</span>
        </div>
    );
}

export default EmotionItem;
