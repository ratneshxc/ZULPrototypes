var statementData = [
    {  
        no:1,
        Category:"Relationship & Intimacy",
        statement: "Do you express your thoughts freely?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I find it very difficult to express my thoughts", value: '1'},
            {label:"I have to consider my thoughts before expressing them", value: '2'},
            {label:"I am able to express my thoughts with people I know", value: '3'},
            {label:"I can easily express my thoughts", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.05,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:2,
        Category:"Relationship & Intimacy",
        statement: "Do you find it difficult to say 'NO' to people?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"All the time", value: '1'},
            {label:"Most of the times", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"I can always say 'NO'", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.1,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:3,
        Category:"Relationship & Intimacy",
        statement: "Do you encourage people to share their problems with you?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"Never", value: '1'},
            {label:"Sometimes", value: '2'},
            {label:"Most of the times", value: '3'},
            {label:"All the time", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.15,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:4,
        Category:"Relationship & Intimacy",
        statement: "Is it difficult for you to initiate conversation?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"All the time", value: '1'},
            {label:"Most of the times", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"It is not difficult to converse", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.2,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:5,
        Category:"Relationship & Intimacy",
        statement: "Do you panic easily under normal circumstances?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"All the time", value: '1'},
            {label:"Most of the times", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"I do not panic", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.25,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:6,
        Category:"Relationship & Intimacy",
        statement: "Do you get angry, if a demand or desire is unmet?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"All the time", value: '1'},
            {label:"Most of the times", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"I don't get angry", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.3,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:7,
        Category:"Relationship & Intimacy",
        statement: "Do you fear the upcoming changes in your life?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"All the time", value: '1'},
            {label:"Most of the times", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"Never", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.35,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:8,
        Category:"Relationship & Intimacy",
        statement: "Do you often introspect your feelings and actions?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"All the time", value: '1'},
            {label:"Most of the times", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"Never", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.4,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:9,
        Category:"Relationship & Intimacy",
        statement: "Do you often have mood swings?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"Always", value: '1'},
            {label:"Most of the times", value: '2'},
            {label:"Once in a while", value: '3'},
            {label:"Very rarely", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.45,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:10,
        Category:"Relationship & Intimacy",
        statement: "Do you feel your family is supportive and encouraging in your efforts?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I am emotionally detached from my family", value: '1'},
            {label:"I feel that my family is least supportive in my efforts", value: '2'},
            {label:"My family is mostly supportive but also critical when necessary", value: '3'},
            {label:"My family supports and encourages me in everything I do", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.5,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:11,
        Category:"Relationship & Intimacy",
        statement: "Pick an option that you can closely relate to:",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I am the trouble maker", value: '1'},
            {label:"I am the scapegoat", value: '2'},
            {label:"I am the pet", value: '3'},
            {label:"I am the Peacemaker", value: '4'},
            {label:"I don't Coexist", value: '5'}
        ],
        ansType: 'single',
        progressBar: 0.55,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:12,
        Category:"Relationship & Intimacy",
        statement: "Do you discuss your problems with your close friends and family?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I do not discuss", value: '1'},
            {label:"Sometimes", value: '2'},
            {label:"Most of the times", value: '3'},
            {label:"Always", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.6,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:13,
        Category:"Relationship & Intimacy",
        statement: "Do you have people other than family on whom you can rely upon at the moment of need?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I don't have anyone that I can rely upon", value: '1'},
            {label:"I have a network of virtual friends", value: '2'},
            {label:"I have real world friends", value: '3'},
            {label:"I have a strong support system", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.65,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:14,
        Category:"Relationship & Intimacy",
        statement: "Does your family members make you feel valued?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"Never", value: '1'},
            {label:"Rarely", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"Always", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.7,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:15,
        Category:"Relationship & Intimacy",
        statement: "Do you have warm and close moments together with your family?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"Never", value: '1'},
            {label:"Rarely", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"Always", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.75,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:16,
        Category:"Relationship & Intimacy",
        statement: "Do you feel there is freedom for you to express yourself in the family?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"Never", value: '1'},
            {label:"Rarely", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"Always", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.8,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:17,
        Category:"Relationship & Intimacy",
        statement: "Are your family members imposing their views on you?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"To great extent", value: '1'},
            {label:"To some extent", value: '2'},
            {label:"As much as necessary", value: '3'},
            {label:"Not at all", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.85,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:18,
        Category:"Relationship & Intimacy",
        statement: "Are you able to spend quality time with your family?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"Never", value: '1'},
            {label:"Rarely", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"Always", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.9,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:19,
        Category:"Relationship & Intimacy",
        statement: "Are there frequent disputes in the family?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"Never", value: '1'},
            {label:"Rarely", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"Always", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.95,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:20,
        Category:"Relationship & Intimacy",
        statement: "Does your family take your concerns seriously?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"Never", value: '1'},
            {label:"Rarely", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"Always", value: '4'}
        ],
        ansType: 'single',
        progressBar: 1,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    }
    ]
    
    module.exports = statementData;
    