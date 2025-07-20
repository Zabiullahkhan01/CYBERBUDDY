document.addEventListener("DOMContentLoaded", function () {
    const totalScoreElem = document.getElementById('total-score');
    const quizzesTakenElem = document.getElementById('quizzes-taken');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const quizContainer = document.getElementById('quiz-container');
    const quizElem = document.getElementById('quiz');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const closeQuizBtn = document.getElementById('close-quiz-btn');
    const resultElem = document.getElementById('result');
    const scoreElem = document.getElementById('score');
    const correctAnswersElem = document.getElementById('correct-answers');

    let totalScore = parseInt(localStorage.getItem('totalScore')) || 0;
    let quizzesTaken = parseInt(localStorage.getItem('quizzesTaken')) || 0;

    totalScoreElem.textContent = totalScore;
    quizzesTakenElem.textContent = quizzesTaken;

    const quizzes = [
        {
            question: "In what way you can prevent yourself from cyber crimes?",
            options: ["Gaurding buildings of important buildings like data centers etc.", "Taking preventive measures on different levels of internet such as deploying fire walls and anti virus.", "None of these", "Personally examining and preventing network."],
            correctAnswer: "Taking preventive measures on different levels of internet such as deploying fire walls and anti virus."
        },
        {
            question: "What is difference between Cyber Security and Internet Security?",
            options: ["Both are different.", "Cyber security is about preventing cyber crimes and internet security is about preventing internet.", "Both are same", "NOTA"],

            correctAnswer: "Both are same"
        },
        {
            question: "What is the best way to prevent yourself from Phishing Attack?",
            options: ["Checking each URL's by clicking on it.", "Analysing source, content and other data of message each URL before clicking on it.", "Avoid clicking on all URLs", "Using VPN."],
            correctAnswer: "Analysing source, content and other data of message each URL before clicking on it."
        },

        {
            question: "Which of the following is an Key sharing algorithm?",
            options: ["Diffie-Hellman algorithm", "RSA", "AES", "ECC"],
            correctAnswer: "RSA"
        },
	
        {
            question: "What does phishing refer to in cybersecurity?",
            options: ["Hacking passwords","Sending malicious emails to obtain sensitive information", "Installing malware", "Encrypting data"],
            correctAnswer: "Sending malicious emails to obtain sensitive information"
        },
	
        {
            question: "What is the primary purpose of a firewall?",
            options: ["To speed up internet connection", "To block unauthorized access to a network", "To encrypt data", "To prevent hardware failures"],
            correctAnswer: "To block unauthorized access to a network"
        },
	
        {
            question: "Which of the following is considered a strong password?",
            options: ["123456", "password", "Pa$$w0rd!123", "qwerty"],
            correctAnswer: "Pa$$w0rd!123"
        },
	
        {
            question: "What is two-factor authentication (2FA)?",
            options: ["A password combined with a CAPTCHA", "A process where two different passwords are used", "A security process that requires two separate forms of identification", "A type of biometric security"],
            correctAnswer: "A security process that requires two separate forms of identification"
        },
	
        {
            question: "What does the acronym VPN stand for?",
            options: [" Virtual Protected Network", "Virtual Private Network", "Virtual Permanent Network", "Virtual Personal Network"],
            correctAnswer: "Virtual Private Network"
        },
	
        {
            question: "Which of the following is a common type of malware?",
            options: ["SQL Injection", "Worm", "Firewall", "CAPTCHA"],
            correctAnswer: "Worm"
        },
	
        {
            question: "What is social engineering in the context of cybersecurity?",
            options: ["Programming social media platforms", "Manipulating people into giving up confidential information", "Designing secure social networks", "Creating security software"],
            correctAnswer: "Manipulating people into giving up confidential information"
        },
	
        {
            question: "What is the purpose of encryption?",
            options: ["To block unauthorized access to a network", "To convert data into a secure code", "To store data more efficiently", "To delete data permanently"],
            correctAnswer: "To convert data into a secure code"
        },
	
        {
            question: "Which of the following is NOT an example of a biometric security feature?",
            options: ["Password", "Fingerprint scan", "Retina scan", "Voice recognition"],
            correctAnswer: "Password"
        },
	
        {
            question: "What is a DDoS attack?",
            options: ["A type of virus", "An attack that floods a network with excessive traffic", "A method of encrypting data", "A way to prevent malware"],
            correctAnswer: "An attack that floods a network with excessive traffic"
        },
	

        {
            question: "What does the term zero-day vulnerability refer to?",
            options: [" A system with no security flaws", "A vulnerability that is exploited before it is known to the vendor", "A vulnerability that has been patched", "A type of antivirus software"],
            correctAnswer: "A vulnerability that is exploited before it is known to the vendor"
        },
	
        {
            question: "What is the role of an antivirus program?",
            options: ["To monitor network traffic", "To protect against and remove malware", "To create backups", "To encrypt data"],
            correctAnswer: "To protect against and remove malware"
        },

	    {
            question: "Which of the following is the safest way to share sensitive information online?",
            options: ["Through email", "Via instant messaging apps", "Using an encrypted communication channel", "By posting on social media"],
            correctAnswer: "Using an encrypted communication channel"
        },

        {
            question: "What does the acronym SSL stand for?",
            options: ["Secure Socket Layer", "Secure Software Layer", "Simple Security Layer", "Secure Service Level"],
            correctAnswer: "Secure Socket Layer"
        },
	
        {
            question: "What is the main function of a CAPTCHA?",
            options: ["To block malware", "To verify if a user is human", "To encrypt data", "To speed up web browsing"],
            correctAnswer: "To verify if a user is human"
        },
	
        {
            question: "What is the main risk of using public Wi-Fi networks?",
            options: ["Slow internet speed", "High costs", "Lack of security, making it easy for attackers to intercept data", "Limited access to websites"],
            correctAnswer: "Lack of security, making it easy for attackers to intercept data"
        },
        {
            question: "What is ransomware?",
            options: [" A virus that destroys data", "A type of malware that encrypts a user's files and demands payment for the decryption key", "A software update", "A security protocol"],
            correctAnswer: "A type of malware that encrypts a user's files and demands payment for the decryption key"
        },
        {
            question: "Which of the following is an example of a strong method to verify a user’s identity?",
            options: ["Username and password only", "Password and CAPTCHA", "Two-factor authentication", "Security questions only"],
            correctAnswer: "Two-factor authentication"
        },
        {
            question: "What does patching a system involve?",
            options: ["Installing software updates to fix vulnerabilities", "Deleting old files", "Creating backups", "Encrypting data"],
            correctAnswer: "Installing software updates to fix vulnerabilities"
        },
        {
            question: "Which of the following is a good practice for managing passwords?",
            options: ["Using the same password for all accounts", "Writing passwords down on paper", "Changing passwords regularly and using a password manager", "Sharing passwords with trusted friends"],
            correctAnswer: "Changing passwords regularly and using a password manager"
        },
        // {
        //     question: "What is a brute force attack"?",
        //     options: [" A method of guessing a password by trying all possible combinations", "A network flooding technique", "An attempt to physically damage hardware", "A software update process"],
        //     correctAnswer: "A method of guessing a password by trying all possible combinations"
        // },
        // {
        //     question: "Which of the following is considered a cyber threat?",
        //     options: ["User training", "Firewall installation", "Malware infection", "Software development"],
        //     correctAnswer: "Malware infection"
        // },
        // {
        //     question: "What does spear phishing specifically target?",
        //     options: ["Random individuals", "A specific individual or organization", "Network infrastructure", "Encrypted data"],
        //     correctAnswer: "A specific individual or organization"
        // },
        // {
        //     question: "What is the role of a security certificate on a website?",
        //     options: ["To display the website's content", "To ensure secure communication between the browser and the server", "To speed up the website", "To prevent advertisements"],
        //     correctAnswer: " To ensure secure communication between the browser and the server"
        // },
        // {
        //     question: "What is malware?",
        //     options: ["A type of software designed to damage or disable computers", "A protective software", "A type of hardware", "A user manual"],
        //     correctAnswer: "A type of software designed to damage or disable computers"
        // },
        // {
        //     question: " What is the purpose of a honeypot in cybersecurity?",
        //     options: ["To detect and analyze malicious activity", "To store sensitive data", "To secure Wi-Fi networks", "To speed up the network"],
        //     correctAnswer: "To detect and analyze malicious activity" 
        //   },
       
    ];

    startQuizBtn.addEventListener('click', () => {
        quizzesTaken++;
        quizzesTakenElem.textContent = quizzesTaken;
        localStorage.setItem('quizzesTaken', quizzesTaken);
        startQuiz();
    });

    function startQuiz() {
        quizContainer.classList.remove('hidden');
        resultElem.classList.add('hidden');
        quizElem.innerHTML = '';

        const shuffledQuizzes = quizzes.sort(() => 0.5 - Math.random()).slice(0,5);

        shuffledQuizzes.forEach((quiz, index) => {
            const questionElem = document.createElement('div');
            questionElem.classList.add('question');
            questionElem.innerHTML = `<p>${index + 1}. ${quiz.question}</p>`;

            quiz.options.forEach(option => {
                questionElem.innerHTML += `
                    <div class="option">
                        <input type="radio" name="q${index}" value="${option}" id="q${index}-${option}" />
                        <label for="q${index}-${option}">${option}</label>
                    </div>
                `;
            });

            quizElem.appendChild(questionElem);
        });

        submitQuizBtn.classList.remove('hidden');
    }

    submitQuizBtn.addEventListener('click', () => {
        let score = 0;
        const questions = document.querySelectorAll('.question');
        questions.forEach((question, index) => {
            const selectedAnswer = question.querySelector('input[type="radio"]:checked');
            const quiz = quizzes.find(q => q.question === question.querySelector('p').textContent.split('. ')[1]);
            const remarkElem = document.createElement('p');

            if (selectedAnswer && selectedAnswer.value === quiz.correctAnswer) {
                score++;
                remarkElem.innerHTML = `<span style="color: green;">Correct!</span>`;
            } else {
                remarkElem.innerHTML = `<span style="color: red;">Incorrect. The correct answer is <strong>${quiz.correctAnswer}</strong>.</span>`;
            }

            question.appendChild(remarkElem);
        });

        totalScore += score;
        localStorage.setItem('totalScore', totalScore);
        totalScoreElem.textContent = totalScore;
        scoreElem.textContent = score;

        submitQuizBtn.classList.add('hidden');
        closeQuizBtn.classList.remove('hide');
        
    });
   
    closeQuizBtn.addEventListener('click', () => {
        quizContainer.classList.add('hidden');
        submitQuizBtn.classList.add('hidden');
        closeQuizBtn.classList.add('hidden');
        quizElem.innerHTML = '';
    });
    //  localStorage.clear();
});
