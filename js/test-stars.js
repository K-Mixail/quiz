// массив с объектами, содержащими вопросы (1 объект - 1 вопрос) {13:00}
const DATA = [
    {
        question: 'Сколько основных планет в Солнечной Системе?',
        answers: [
            {
                id: '1',
                value: '7',
                correct: false,
            },
            {
                id: '2',
                value: '8',
                correct: true,
            },
            {
                id: '3',
                value: '9',
                correct: false,
            },
        ]
    },
    {
        question: 'Кто первым дал правильное объяснение обращения планет вокруг Солнца?',
        answers: [
            {
                id: '4',
                value: 'Галилео Галилей',
                correct: false,
            },
            {
                id: '5',
                value: 'Исаак Ньютон',
                correct: true,
            },
            {
                id: '6',
                value: 'Николай Коперник',
                correct: false,
            },
        ]
    },
    // {
    //     question: 'Солнце - это:',
    //     answers: [
    //         {
    //             id: '7',
    //             value: 'Планета',
    //             correct: false,
    //         },
    //         {
    //             id: '8',
    //             value: 'Звезда',
    //             correct: true,
    //         },
    //         {
    //             id: '9',
    //             value: 'Спутник',
    //             correct: false,
    //         },
    //     ]
    // },
    // {
    //     question: 'Сколько спутников у Марса?',
    //     answers: [
    //         {
    //             id: '10',
    //             value: '1',
    //             correct: false,
    //         },
    //         {
    //             id: '11',
    //             value: '2',
    //             correct: true,
    //         },
    //         {
    //             id: '12',
    //             value: '3',
    //             correct: false,
    //         },
    //     ]
    // },
    // {
    //     question: 'Какая планета имеет наибольшее количество спутников?',
    //     answers: [
    //         {
    //             id: '13',
    //             value: 'Юпитер',
    //             correct: false,
    //         },
    //         {
    //             id: '14',
    //             value: 'Сатурн',
    //             correct: true,
    //         },
    //         {
    //             id: '15',
    //             value: 'Венера',
    //             correct: false,
    //         },
    //     ]
    // },
];


export default DATA;