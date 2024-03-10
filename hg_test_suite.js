// hg_test_suite.js

// Import HG compiler module
const hgCompiler = require('./hg');

// Test cases for HG compiler
const hgCode = `
[HOME_HG]
[BODY:
    [HEADER_HG:
        [TEXT_HG: Welcome to Advanced HG Language]
        [DESIGNS_HG:
            font-family: 'Roboto', sans-serif;
            font-size: 48px;
            color: #FF0000; /* Red color */
            text-align: center;
            padding: 50px 0;
            background-color: #FFFF00; /* Yellow color */
            border-bottom: 2px solid #ccc;
        ]
    ]
    [SECTION_HG:
        [TEXT_HG: Explore our amazing features:]
        [DESIGNS_HG:
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            background-color: #eee;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            color: #FF0000; /* Red color */
        ]
        [LIST_HG]
            - [LINK_HG: Feature 1](#)
            - [LINK_HG: Feature 2](#)
            - [LINK_HG: Feature 3](#)
        [/LIST_HG]
    ]
]
`;

const htmlOutput = hgCompiler.compileToHTML(hgCode);
const jsOutput = hgCompiler.compileToJavaScript(hgCode);

// Test the HTML output
console.log("HTML Output:");
console.log(htmlOutput);

// Test the JavaScript output
console.log("JavaScript Output:");
console.log(jsOutput);
