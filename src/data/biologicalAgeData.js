var statementData = [
    {  
        no:1,
        Category:"Biological Age",
        statement: "How often do you exercise in a week?",
        imageURL: require('../assests/images/assessment/A1/A10022.jpg'),
        statementSuggestion:"",
        options:[
            {label:"0 to 1 day",value: '1'},
            {label:"2 to 3 days",value: '2'},
            {label:"4 to 5 days",value: '3'},
            {label:"Everyday of the week",value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.2,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:2,
        Category:"Biological Age",
        statement: "How many stairs can you climb at a time?",
        imageURL: require('../assests/images/assessment/A1/A10033.jpg'),
        statementSuggestion:"",
        options:[
            {label:">5 steps",value: '1'},
            {label:">10 steps",value: '2'},
            {label:"> 20 steps",value: '3'},
            {label:"> 40 steps",value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.2,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:3,
        Category:"Biological Age",
        statement: "Which of these form a part of your regular diet?",
        imageURL: require('../assests/images/assessment/A1/A10047.jpg'),
        statementSuggestion:"(Select all that apply)",
        options:[
            {label:"Processed food and fast food",value: '1', checked:false},
            {label:"Rice, wheat and pulses",value: '2', checked:false},
            {label:"Chicken or fish(white meat)",value: '3', checked:false},
            {label:"Red meat",value: '4', checked:false},
            {label:"Dairy based products",value: '5', checked:false},
            {label:"Fresh Fruits and vegetables",value: '6', checked:false}
        ],
        ansType: 'multiple',
        progressBar: 0.2,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:4,
        Category:"Biological Age",
        statement: "How many hours of sleep do you get each night?",
        imageURL: require('../assests/images/assessment/A1/A10019.jpg'),
        statementSuggestion:"",
        options:[
            {label:"Less than 4 hours of sleep",value: '1'},
            {label:"5-7 hours of sleep",value: '2'},
            {label:"7-9 hours of sleep",value: '3'},
            {label:"More than 10 hours of sleep",value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.2,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:5,
        Category:"Biological Age",
        statement: "Do you smoke?",
        imageURL: require('../assests/images/assessment/A1/A10014.jpg'),
        statementSuggestion:"",
        options:[
            {label:"20 or more cigarettes/day",value: '1'},
            {label:"10 or more cigarettes/day",value: '2'},
            {label:"less than 10 cigarettes/day",value: '3'},
            {label:"I do not smoke",value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.2,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:6,
        Category:"Biological Age",
        statement: "How often do you consume alcohol?",
        imageURL: require('../assests/images/assessment/A1/A10023.jpg'),
        statementSuggestion:"",
        options:[
            {label:"I drink alcohol everyday",value: '1'},
            {label:"2-3 times a week",value: '2'},
            {label:"I drink alcohol occasionaly",value: '3'},
            {label:"I do not drink alcohol",value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.2,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:7,
        Category:"Biological Age",
        statement: "Who forms your support system?",
        imageURL: require('../assests/images/assessment/A1/A10045.jpg'),
        statementSuggestion:"",
        options:[
            {label:"I do not have a support system",value: '1'},
            {label:"I have professional help",value: '2'},
            {label:"I have small but strong support system of friends and family",value: '3'},
            {label:"I have a large support group consisting of professional help, friends and family",value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.2,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    }
    ]
    
    module.exports = statementData;
    