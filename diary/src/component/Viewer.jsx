import React from 'react';
import './Viewer.css';
import { getEmotionImgById } from '../util';

function Viewer({ emotionId, content }) {
  return (
    <div className='Viewer'>
      <section>
        <h4>그때의 감정</h4>
        <section
          className={['image_section', `image_section_${emotionId}`].join(' ')}
        >
          <img src={getEmotionImgById(emotionId)} alt={emotionId} />
        </section>
      </section>
      <section>
        <h4>일기내용</h4>
        <div className='content_wrapper'>{content}</div>
      </section>
    </div>
  );
}

export default Viewer;
