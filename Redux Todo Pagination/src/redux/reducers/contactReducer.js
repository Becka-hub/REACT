const initialState = [
    {
        id: 1,
        name: "Raman Sharma",
        email: "Raman@gmail.com",
        number: "0326865274"
    },
    {
        id: 2,
        name: "Raky Soaman",
        email: "Soaman@gmail.com",
        number: "0346865274"
    },
    {
        id: 3,
        name: "Varisosy",
        email: "Vary@gmail.com",
        number: "0346865274"
    },
    {
        id: 4,
        name: "Lita",
        email: "Lita@gmail.com",
        number: "0346865274"
    },
    {
        id: 5,
        name: "Fael",
        email: "Fael@gmail.com",
        number: "0346865274"
    },
    {
        id: 6,
        name: "Santatra",
        email: "Santatra@gmail.com",
        number: "0346865274"
    }  ,  {
        id: 7,
        name: "Kinga",
        email: "Kinga@gmail.com",
        number: "0346865274"
    },
    {
        id: 8,
        name: "Mino",
        email: "Mino@gmail.com",
        number: "0346865274"
    },
    {
        id: 9,
        name: "George",
        email: "George@gmail.com",
        number: "0346865274"
    }

];


const contactReducer = (state = initialState, action) => {
    localStorage.setItem('contacts',JSON.stringify(state));
    state=JSON.parse(localStorage.getItem('contacts'));
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload];
            localStorage.setItem('contacts',JSON.stringify(state));
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map((contact) => contact.id === action.payload.id ?
                action.payload : contact);
            state = updateState;
            localStorage.setItem('contacts',JSON.stringify(state));
            return state;
        case "DELETE_CONTACT":
            state = state.filter((contact) => contact.id !== action.payload);
            localStorage.setItem('contacts',JSON.stringify(state));
            return state;
        default:
            return state;
    }
};

export default contactReducer;