var statementData = [
    {  
        no:1,
        Category:"Thought Control",
        statement: "Do you get angry?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I easily get angry", value: '1'},
            {label:"I often get angry", value: '2'},
            {label:"I rarely get angry", value: '3'},
            {label:"I am usually calm and relaxed", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.05,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:2,
        Category:"Thought Control",
        statement: "How do you react when angry?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I become verbally and physically aggressive", value: '1'},
            {label:"I blame myself for the situation", value: '2'},
            {label:"I let out in a constructive way such as analysis and talks", value: '3'},
            {label:"I avoid the situation rather than confronting", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.1,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:3,
        Category:"Thought Control",
        statement: "Describe your behaviour/attitude with respect to smoking:",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I smoke when I am stressed /angry/upset/depressed/bored", value: '1'},
            {label:"I smoke for pleasure", value: '2'},
            {label:"I do not smoke", value: '3'},
            {label:"I used to smoke but have quit", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.15,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:4,
        Category:"Thought Control",
        statement: "Describe your behaviour/attitude with respect to alcohol:",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I drink alcohol when I am stressed /angry/upset/depressed/bored", value: '1'},
            {label:"I drink alcohol for pleasure", value: '2'},
            {label:"I don't drink alcohol", value: '3'},
            {label:"I drink alcohol to socialize and network", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.2,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:5,
        Category:"Thought Control",
        statement: "Describe your behavior/attitude with respect to use of recreational drugs such as cocaine, opioids etc:",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I take drugs when I am stressed /angry/upset/depressed/bored", value: '1'},
            {label:"I take drugs for pleasure/alter my mood", value: '2'},
            {label:"I don't take drugs", value: '3'},
            {label:"I take drugs as it is part of my social circle and to socialize easily", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.25,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:6,
        Category:"Thought Control",
        statement: "Do you wash your hands more than necessary?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"All the time", value: '1'},
            {label:"Most of the times", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"Not at all", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.3,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:7,
        Category:"Thought Control",
        statement: "Are you compelled to repeat certain tasks unnecessarily?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"All the time", value: '1'},
            {label:"Most of the times", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"Not at all", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.35,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:8,
        Category:"Thought Control",
        statement: "Do you get anxious if others change the way you have arranged things?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"All the time", value: '1'},
            {label:"Most of the times", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"Not at all", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.4,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:9,
        Category:"Thought Control",
        statement: "Are you bothered by repeated unpleasant thought?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"All the time", value: '1'},
            {label:"Most of the times", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"Not at all", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.45,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null

    },
    {  
        no:10,
        Category:"Thought Control",
        statement: "Are you unnecessarily cautious about hurting people by your actions?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"All the time", value: '1'},
            {label:"Most of the times", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"Not at all", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.5,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:11,
        Category:"Thought Control",
        statement: "Do you follow superstitious acts when you are worried and feel something might go wrong?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"Always", value: '1'},
            {label:"Sometimes", value: '2'},
            {label:"Rarely", value: '3'},
            {label:"Never", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.55,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:12,
        Category:"Thought Control",
        statement: "Are you going through any traumatic experience due to separation/loss of someone close?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"Yes, to a great extent", value: '1'},
            {label:"Yes, to some extent", value: '2'},
            {label:"Yes, but coping with it", value: '3'},
            {label:"I have not experienced loss/separation", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.6,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:13,
        Category:"Thought Control",
        statement: "If you have lost someone close to you, how are you coping with it?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I feel it shouldn't have happened to me", value: '1'},
            {label:"I am angry that it happenned to me", value: '2'},
            {label:"I am too sad to do anything", value: '3'},
            {label:"I am actively dealing with it", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.65,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:14,
        Category:"Thought Control",
        statement: "Do you have difficulty in sleeping?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"Nearly everyday", value: '1'},
            {label:"More than half the days of week", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"Not at all", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.7,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:15,
        Category:"Thought Control",
        statement: "Are you able to cry and let out your emotions during episodes of deep sadness?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I want to but not able to cry", value: '1'},
            {label:"I do not cry any more than usual", value: '2'},
            {label:"I cry more than I used to", value: '3'},
            {label:"I cry a lot to feel better", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.75,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:16,
        Category:"Thought Control",
        statement: "Do you feel that your self-confidence has reduced?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I have always had low self-confidence", value: '1'},
            {label:"My self confidence has reduced a lot recently", value: '2'},
            {label:"My self confidence has reduced a little", value: '3'},
            {label:"My self confidence is always strong", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.8,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:17,
        Category:"Thought Control",
        statement: "How hopeful are you about the future?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I believe there is no hope for my future", value: '1'},
            {label:"I have started loosing hope due to recent changes", value: '2'},
            {label:"I loose hope once in a while", value: '3'},
            {label:"I am always hopeful about my future", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.85,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:18,
        Category:"Thought Control",
        statement: "Are any recent failures bothering you?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"To a great extent", value: '1'},
            {label:"To some extent", value: '2'},
            {label:"I have not had any failure recently", value: '3'},
            {label:"Failure does not bother me", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.9,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:19,
        Category:"Thought Control",
        statement: "Are you finding it difficult to make decisions due to recent emotional disturbance?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"To a great extent", value: '1'},
            {label:"To some extent", value: '2'},
            {label:"I have not had any emotional disturbances", value: '3'},
            {label:"I am able to handle emotional disturbances well", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.95,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:20,
        Category:"Thought Control",
        statement: "Have you been feeling worthless?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"All the time", value: '1'},
            {label:"Most of the times", value: '2'},
            {label:"Sometimes", value: '3'},
            {label:"I never feel worthless", value: '4'}
        ],
        ansType: 'single',
        progressBar: 0.955,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    },
    {  
        no:21,
        Category:"Thought Control",
        statement: "Have you been feeling depressed?",
        imageURL: require('../assests/images/illness-image.png'),
        statementSuggestion:"",
        options:[
            {label:"I feel I am always depressed", value: '1'},
            {label:"I feel I am depressed most of the time", value: '2'},
            {label:"I feel depressed once in a while", value: '3'},
            {label:"I am never depressed", value: '4'}
        ],
        ansType: 'single',
        progressBar: 1,
        progressBarColor: '#ff2626',
        likes: 25,
        selectedIndex: null
    }        
    
    ]
    
    module.exports = statementData;
    