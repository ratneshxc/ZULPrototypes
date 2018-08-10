var statementData = [
    {  
        no:1,
        Category:"Diet Score",
        statement: "How much water do you drink everyday?",
        imageURL: require('../assests/images/assessment/A1/A10051.jpg'),
        statementSuggestion:"",
        options:[
            {label:"Less than 1 litre", value: '1'},
            {label:"1-2 litres", value: '2'},
            {label:"2-3 litres", value: '3'},
            {label:"More than 3", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.2,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:2,
        Category:"Diet Score",
        statement: "Which of these nutrients does your diet include/s everyday?",
        imageURL: require('../assests/images/assessment/A1/A10020.jpg'),
        statementSuggestion:"(Select all that apply)",
        options:[
            {label:"Carbohydrates- Present in wheat, rice, maize, potato etc",value: '1'},
            {label:"Proteins-Present in beans, dal, milk, nuts, chicken, eggs etc",value: '2'},
            {label:"Vitamins- Present in sprouts, fruits, vegetables etc",value: '3'},
            {label:"Minerals- Present in nuts, whole grains, fish, legumes etc",value: '4'},
            {label:"Fibre- Present in oats, cereals, lentils, fruits etc",value: '5'},
            {label:"Fats- Present in Butter, ghee, milk etc", value: '6'}
        ],
        ansType: 'multiple',
        progressBar: 0.4,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:3,
        Category:"Diet Score",
        statement: "Which of these do you consume regularly (at least once in 2 days)",
        imageURL: require('../assests/images/assessment/A1/A10017.jpg'),
        statementSuggestion:"(Select all that apply)",
        options:[
            {label:"Fizzy drinks, golas, slushies and milk shakes",value: '1'},
            {label:"Fried food such as chips,french fries and papads",value: '2'},
            {label:"Pastries, cookies, cakes, mithais and indian sweets",value: '3'},
            {label:"Ice creams, chocolates and candies",value: '4'},
            {label:"Meat such as ham, sausages,bacon and pepperoni",value: '5'},
            {label:"Golgappas,chats,samosas,kachoris",value: '6'},
            {label:"None of these are taken regularly",value: '7'}
        ],
        ansType: 'single',
        progressBar: 0.6,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:4,
        Category:"Diet Score",
        statement: "Do you eat breakfast?",
        imageURL: require('../assests/images/assessment/A1/A10005.jpg'),
        statementSuggestion:"",
        options:[
            {label:"Never",value: '1'},
            {label:"2-3 days in a week",value: '2'},
            {label:"4-5 days in a week",value: '3'},
            {label:"Everyday",value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.8,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:5,
        Category:"Diet Score",
        statement: "How many days in a week do you have at least one meal outside?",
        imageURL: require('../assests/images/assessment/A1/A10012.jpg'),
        statementSuggestion:"",
        options:[
            {label:"Everyday",value: '1'},
            {label:"4-5 days",value: '2'},
            {label:"2-3 days",value: '3'},
            {label:"Less than 2 days",value: '4'}
        ],
        ansType: 'single',
        progressBar: 1,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    }
    ]
    
    module.exports = statementData;
    