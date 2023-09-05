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
// 메모이제이션 컴포넌트로 만들어 리렌더링 최적화
export default React.memo(EmotionItem);
