var statementData = [
    {  
        no:1,
        Category:"Wholesomeness",
        statement: "How often have you fallen ill in the past year?",
        imageURL: require('../../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"More than 15 times", value:'1'},
            {label:"10-15 times", value:'2'},
            {label:"5-10 times", value:'3'},
            {label:"1-2 times", value:'4'}
        ],
        ansType: 'single',
        progressBar: 0.125,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:2,
        Category:"Wholesomeness",
        statement: "What do you do on a daily basis to ensure that you stay healthy?",
        imageURL: require('../../assests/images/illness-image.png'),
        statementSuggestion:"(Select all that apply)",
        options:[
            {label:"I exercise", value:'1'},
            {label:"I eat right", value:'2'},
            {label:"I sleep right", value:'3'},
            {label:"I do not do anything", value:'4'}
        ],
        ansType: 'multiple',
        progressBar: 0.250,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:3,
        Category:"Wholesomeness",
        statement: "Do you spend more time working than socializing or pursuing a hobby?",
        imageURL: require('../../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"Never", value:'1'},
            {label:"Sometimes", value:'2'},
            {label:"Frequently", value:'3'},
            {label:"Always", value:'4'}
        ],
        ansType: 'single',
        progressBar: 0.375,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:4,
        Category:"Wholesomeness",
        statement: "Are you aware of things that you are passionate about?",
        imageURL: require('../../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I do not find anything that I am passionate about", value:'1'},
            {label:"I am still finding the things that I am passionate about", value:'2'},
            {label:"I am trying to pursue my passion", value:'3'},
            {label:"Yes, I am pursuing my passion", value:'4'}
        ],
        ansType: 'single',
        progressBar: 0.5,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:5,
        Category:"Wholesomeness",
        statement: "Are you troubled or saddened by day to day activities?",
        imageURL: require('../../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"All the time", value:'1'},
            {label:"More than half the time", value:'2'},
            {label:"Less than half the time", value:'3'},
            {label:"Not at all", value:'4'}
        ],
        ansType: 'single',
        progressBar: 0.625,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:6,
        Category:"Wholesomeness",
        statement: "Are you disappointed with yourself?",
        imageURL: require('../../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I am always dissapointed with myself", value:'1'},
            {label:"I am dissapointed frequently when I cannot reach personal goals", value:'2'},
            {label:"Sometimes when my expectations are not met", value:'3'},
            {label:"I am never dissapointed as success and failure are both part of life", value:'4'}
        ],
        ansType: 'single',
        progressBar: 0.750,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:7,
        Category:"Wholesomeness",
        statement: "How is your interaction with family and friends?",
        imageURL: require('../../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I dont like talking to people",value:'1'},
            {label:"I have very limited conversation",value:'2'},
            {label:"I hesitate to make conversation",value:'3'},
            {label:"I am friendly with everyone",value:'4'}
        ],
        ansType: 'single',
        progressBar: 0.875,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:8,
        Category:"Wholesomeness",
        statement: "Are you disappointed with the level of your sexual activity, desire and satisfaction?",
        imageURL: require('../../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"Always",value:'1'},
            {label:"Frequently",value:'2'},
            {label:"Sometimes",value:'3'},
            {label:"Never",value:'4'}
        ],
        ansType: 'single',
        progressBar: 1,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    }
    ]
    
    module.exports = statementData;
    