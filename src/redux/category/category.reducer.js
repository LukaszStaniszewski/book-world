const INITIAL_STATE = {
    categories: [
        {
            title: 'fantasy',
            id: 1,
            image: 'https://i.ibb.co/YZgkV09/fantasy.jpg',
            linkUrl: 'fantasy',
            items: [
                {
                    id: 10,
                    name: 'Droga Królów',
                    author: 'Brandon Sanderson',
                    price: 10
                },
                {
                    id: 11,
                    name: 'Słowa Swiatłości',
                    author: 'Brandon Sanderson',
                    price: 10
                },
                {
                    id: 12,
                    name: 'Dawca Przysięgi',
                    author: 'Brandon Sanderson',
                    price: 10
                }
            ]
        },
        {
            title: 'science fiction',
            id: 2,
            image: 'https://i.ibb.co/FqRQ0xq/science-fiction.jpg',
            linkUrl: 'science-fiction'
        },
        {
            title: 'kryminał',
            id: 3,
            image: 'https://i.ibb.co/4W4c64Z/criminal.png',
            linkUrl: 'criminal'
        },
        {
            title: 'romans',
            id: 4,
            image: 'https://i.ibb.co/M2xwQZF/romance.jpg',
            linkUrl: 'romanse'
        },
        {
            title: 'klasyka',
            id: 5,
            linkUrl: 'classic'
        },
        {
            title: 'horror',
            id: 6,
            image: 'https://i.ibb.co/Bryc7R6/creepy.png',
            linkUrl: 'horror'
        },     
    ]
}

const categoryReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default categoryReducer;