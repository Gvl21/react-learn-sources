import emotion1 from './img/emotion1.png';
import emotion2 from './img/emotion2.png';
import emotion3 from './img/emotion3.png';
import emotion4 from './img/emotion4.png';
import emotion5 from './img/emotion5.png';

export const getFormatDate = (dateObj) => {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, 0);
    const date = String(dateObj.getDate()).padStart(2, 0);
    return `${year}-${month}-${date}`;
};

export const getMonthRange = (date) => {
    const beginTimeStamp = new Date(
        date.getFullYear(),
        date.getMonth(),
        1
    ).getTime();
    const endTimeStamp = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        1 - 1,
        23,
        59,
        59,
        999
    ).getTime();
    return { beginTimeStamp, endTimeStamp };
};

export const getEmotionImgById = (id) => {
    const targetId = String(id);
    switch (targetId) {
        case '1':
            return emotion1;
        case '2':
            return emotion2;
        case '3':
            return emotion3;
        case '4':
            return emotion4;
        case '5':
            return emotion5;

        default:
            return null;
    }
};

export const emotionList = [
    {
        id: 1,
        name: '완전 좋아',
        img: getEmotionImgById(1),
    },
    {
        id: 2,
        name: '좋아',
        img: getEmotionImgById(2),
    },
    {
        id: 3,
        name: '그냥 그래',
        img: getEmotionImgById(3),
    },
    {
        id: 4,
        name: '별로야',
        img: getEmotionImgById(4),
    },
    {
        id: 5,
        name: '끔찍해',
        img: getEmotionImgById(5),
    },
];
