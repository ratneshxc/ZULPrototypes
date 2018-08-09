var statementData = [
    {  
        no:1,
        Category:"Strength & Energy",
        statement: "When do you eat?",
        imageURL: require('../assests/images/assessment/shutterstock_280814495-nw.jpg'),
        statementSuggestion:"",
        options:[
            {label:"I keep munching every now and then", value: '1'},
            {label:"When I am bored", value: '2'},
            {label:"When I am hungry", value: '3'},
            {label:"At regular intervals", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.05,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    }      
    
    ]
    
    module.exports = statementData;
    