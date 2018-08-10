var statementData = [

    {

        no: 1,

        Category: "Strength & Energy",

        statement: "When do you eat?",

        imageURL: require('../assests/images/assessment/shutterstock_280814495-nw.jpg'),

        statementSuggestion: "",

        options: [

            { label: "I keep munching every now and then", value: '1' },

            { label: "When I am bored", value: '2' },

            { label: "When I am hungry", value: '3' },

            { label: "At regular intervals", value: '4' }

        ],

        ansType: 'single',

        progressBar: 0.05,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 2,

        Category: "Strength & Energy",

        statement: "How do you rate your appetite after each meal?",

        imageURL: require('../assests/images/assessment/shutterstock_1132183037-nw.jpg'),

        statementSuggestion: "",

        options: [

            { label: "Very Hungry", value: '1' },

            { label: "Hungry", value: '2' },

            { label: "Full but unsatisfied", value: '3' },

            { label: "Full and satisfied", value: '4' }

        ],

        ansType: 'single',

        progressBar: 0.1,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 3,

        Category: "Strength & Energy",

        statement: "How many cups of coffee/tea do you drink per day?",

        imageURL: require('../assests/images/assessment/shutterstock_574800841-nw.jpg'),

        statementSuggestion: "(small size cup which can hold up to 100ml)",

        options: [

            { label: "More than 10 cups", value: '1' },

            { label: "5-10 cups", value: '2' },

            { label: "2-5 cups", value: '3' },

            { label: "Less than 2 cups", value: '4' }

        ],

        ansType: 'multiple',

        progressBar: 0.15,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 4,

        Category: "Strength & Energy",

        statement: "Do you add extra salt or sugar to your food?",

        imageURL: require('../assests/images/assessment/shutterstock_296066060-new.jpg'),

        statementSuggestion: "",

        options: [

            { label: "Always", value: '1' },

            { label: "Usually", value: '2' },

            { label: "Often, with certain food", value: '3' },

            { label: "Rarely", value: '4' }

        ],

        ansType: 'single',

        progressBar: 0.2,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 5,

        Category: "Strength & Energy",

        statement: "Are you conscious about the nutrient intake in your diet?",

        imageURL: require('../assests/images/illness-image.png'),

        statementSuggestion: "",

        options: [

            { label: "I do not keep a track of nutrition in my diet", value: '1' },

            { label: "I try to eat nutrient rich food when necesary", value: '2' },

            { label: "I take nutrient supplements", value: '3' },

            { label: "I always ensure that I eat nutrient rich food", value: '4' }

        ],

        ansType: 'single',

        progressBar: 0.25,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 6,

        Category: "Strength & Energy",

        statement: "Do you eat/drink between meals?",

        imageURL: require('../assests/images/assessment/shutterstock_411677209-nw.jpg'),

        statementSuggestion: "",

        options: [

            { label: "I always eat/drink between meals", value: '1' },

            { label: "I usually eat/drink between meals", value: '2' },

            { label: "I rarely eat/drink between meals", value: '3' },

            { label: "I strictly don't eat/drink between meals", value: '4' }

        ],

        ansType: 'single',

        progressBar: 0.3,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 7,

        Category: "Strength & Energy",

        statement: "Do you tend to overeat during meal?",

        imageURL: require('../assests/images/assessment/shutterstock_166093472-nw.jpg'),

        statementSuggestion: "",

        options: [

            { label: "Always", value: '1' },

            { label: "Sometimes", value: '2' },

            { label: "Rarely", value: '3' },

            { label: "Never", value: '4' }

        ],

        ansType: 'single',

        progressBar: 0.35,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 8,

        Category: "Strength & Energy",

        statement: "Select which of these practice you follow:",

        imageURL: require('../assests/images/assessment/shutterstock_631974191-nw.jpg'),

        statementSuggestion: "(Select all that apply)",

        options: [

            { label: "Walk or cycle for short distances instead of driving", value: '1' },

            { label: "Involve with household activity to be fit and healthy", value: '2' },

            { label: "Take stairs over elevators", value: '3' },

            { label: "Exercise or play sports regularly", value: '4' },

            { label: "Involve in job that requires moving and standing", value: '5' },

            { label: "None of these", value: '6' }

        ],

        ansType: 'multiple',

        progressBar: 0.4,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 9,

        Category: "Strength & Energy",

        statement: "You don't exercise because:",

        imageURL: require('../assests/images/assessment/shutterstock_1132401515-new.jpg'),

        statementSuggestion: "(Select all that apply)",

        options: [

            { label: "My days are busy and exercise is not a high priority", value: '1' },

            { label: "None among my family or friends like to do anything active", value: '1' },

            { label: "I feel exercise is risky and can cause injury", value: '1' },

            { label: "I am not able to start exercising even if I often think of it", value: '1' },

            { label: "I feel exercising is too expensive", value: '1' },

            { label: "I am too tired after work to exercise", value: '1' },

            { label: "I do not have access for exercising facilities", value: '1' }

        ]

        ,

        ansType: 'multiple',

        progressBar: 0.45,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 10,

        Category: "Strength & Energy",

        statement: "What is your daily physical activity level?",

        imageURL: require('../assests/images/assessment/shutterstock_748217398-nw.jpg'),

        statementSuggestion: "",

        options: [

            { label: "Little (less than 1 hour per week)", value: '1' },

            { label: "Moderate (1-5 hours per week)", value: '2' },

            { label: "High (more than 5 hours per week)", value: '3' },

            { label: "None", value: '4' },

        ],

        ansType: 'single',

        progressBar: 0.5,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null



    },

    {

        no: 11,

        Category: "Strength & Energy",

        statement: "Do you have difficulty falling asleep at night?",

        imageURL: require('../assests/images/assessment/shutterstock_516814942-nw.jpg'),

        statementSuggestion: "",

        options: [

            { label: "I have difficulty in falling asleep", value: '1' },

            { label: "It takes a long time to fall asleep", value: '2' },

            { label: "It takes a few minutes to fall asleep", value: '3' },

            { label: "I can fall asleep easily", value: '4' }

        ],

        ansType: 'single',

        progressBar: 0.55,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 12,

        Category: "Strength & Energy",

        statement: "Do you feel rested and ready for the day, when you get up in the morning?",

        imageURL: require('../assests/images/assessment/shutterstock_1106887784-nw.jpg'),

        statementSuggestion: "",

        options: [

            { label: "Never feel rested when I wake up", value: '1' },

            { label: "Some mornings", value: '2' },

            { label: "Most mornings", value: '3' },

            { label: "Yes, Every morning", value: '4' }

        ],

        ansType: 'single',

        progressBar: 0.6,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 13,

        Category: "Strength & Energy",

        statement: "Do you wear tight fitting clothes such as shape wears and skinny jeans, which may restrict your movement and breathing?",

        imageURL: require('../assests/images/assessment/shutterstock_310344743-nw.jpg'),

        statementSuggestion: "",

        options: [

            { label: "Always", value: '1' },

            { label: "Most of the time", value: '2' },

            { label: "Once in a while", value: '3' },

            { label: "Never", value: '4' }

        ],

        ansType: 'single',

        progressBar: 0.65,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 14,

        Category: "Strength & Energy",

        statement: "How many hours do you spend travelling in a car/bike?",

        imageURL: require('../assests/images/assessment/shutterstock_1096949156-nw.jpg'),

        statementSuggestion: "",

        options: [

            { label: "More than 4hours", value: '1' },

            { label: "2-4 hours", value: '2' },

            { label: "1-2 hours", value: '3' },

            { label: "less than an hour", value: '4' }

        ],

        ansType: 'single',

        progressBar: 0.7,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 15,

        Category: "Strength & Energy",

        statement: "Do you feel that you have a poor posture?",

        imageURL: require('../assests/images/assessment/shutterstock_617543948-nw.jpg'),

        statementSuggestion: "",

        options: [

            { label: "I have a bad posture", value: '1' },

            { label: "My friends and family have suggested that I have a bad posture", value: '2' },

            { label: "I have been asked to correct my posture sometimes", value: '3' },

            { label: "I do not have a bad posture", value: '4' }

        ],

        ansType: 'single',

        progressBar: 0.75,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 16,

        Category: "Strength & Energy",

        statement: "Do you have breathing problems?",

        imageURL: require('../assests/images/assessment/shutterstock_216062674-nw.jpg'),

        statementSuggestion: "",

        options: [

            { label: "I have chronic breathing problems", value: '1' },

            { label: "I experience due to pollution and weather", value: '2' },

            { label: "I experience when I am anxious or nervous", value: '3' },

            { label: "I do not have breathing problems", value: '4' }

        ],

        ansType: 'single',

        progressBar: 0.8,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 17,

        Category: "Strength & Energy",

        statement: "Do you experience headaches?",

        imageURL: require('../assests/images/assessment/shutterstock_770157496-nw.jpg'),

        statementSuggestion: "",

        options: [

            { label: "I have chronic headaches", value: '1' },

            { label: "I get headaches due to stress", value: '2' },

            { label: "I get headaches sometimes", value: '3' },

            { label: "I do not experience headaches", value: '4' }

        ],

        ansType: 'single',

        progressBar: 0.85,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 18,

        Category: "Strength & Energy",

        statement: "How is your bowel movements?",

        imageURL: require('../assests/images/assessment/shutterstock_671903152-nw.jpg'),

        statementSuggestion: "",

        options: [

            { label: "More than 3 watery stools a day", value: '1' },

            { label: "Less than 3 movements a week", value: '2' },

            { label: "More than once and less than three movements in a day", value: '3' },

            { label: "1 movement in each day", value: '4' }

        ],

        ansType: 'single',

        progressBar: 0.9,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 19,

        Category: "Strength & Energy",

        statement: "How often do you catch cold?",

        imageURL: require('../assests/images/assessment/shutterstock_118647259-nw.jpg'),

        statementSuggestion: "",

        options: [

            { label: "More than twice a month", value: '1' },

            { label: "Twice in a month", value: '2' },

            { label: "Once in a month", value: '3' },

            { label: "I rarely catch cold", value: '4' }

        ],

        ansType: 'single',

        progressBar: 0.95,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 20,

        Category: "Strength & Energy",

        statement: "Have you been diagnosed with any of the following conditions:",

        imageURL: require('../assests/images/assessment/shutterstock_457866949-nw.jpg'),

        statementSuggestion: "(Select all that apply)",

        options: [

            { label: "Arthritis", value: '1' },

            { label: "Asthma", value: '2' },

            { label: "Cancer", value: '3' },

            { label: "Diabetes", value: '4' },

            { label: "Epilepsy / Fits", value: '5' },

            { label: "Heart disease (includes conditions such as angina, heart attack)", value: '6' },

            { label: "Hepatitis / Jaundice", value: '7' },

            { label: "High blood pressure", value: '8' },

            { label: "High cholesterol", value: '9' },

            { label: "PCOD", value: '10' },

            { label: "Stroke / Brain stroke / TIA (Transient Ischemic Attack)", value: '11' },

            { label: "Thyroid problems such as hypothyroidism", value: '12' },

            { label: "Tuberculosis (TB)", value: '13' },

            { label: "Sexually transmitted disease such as HIV etc", value: '14' },

            { label: "None of the above", value: '15' }

        ],

        ansType: 'multiple',

        progressBar: 0.955,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    },

    {

        no: 21,

        Category: "Strength & Energy",

        statement: "Do you have a family history of any of the following conditions:",

        imageURL: require('../assests/images/illness-image.png'),

        statementSuggestion: "(Select all that apply)",

        options: [

            { label: "Asthma", value: '1' },

            { label: "Cancer", value: '2' },

            { label: "Diabetes", value: '3' },

            { label: "Heart disease (includes conditions such as angina, heart attack)", value: '4' },

            { label: "High blood pressure", value: '5' },

            { label: "High cholesterol", value: '6' },

            { label: "Stroke / Brain stroke / TIA (Transient Ischemic Attack)", value: '7' },

            { label: "I do not have a family history of any condition", value: '8' }

        ],

        ansType: 'multiple',

        progressBar: 1,

        progressBarColor: '#ff2626',

        likes: 25,

        selectedIndex: null

    }


]


module.exports = statementData;