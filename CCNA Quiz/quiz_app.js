
// randomize all question
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 50 CCNA questions
const allQuestions = [
    { question: "What is the default subnet mask for a Class B IP address?", options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"], answer: 1 },
    { question: "Which protocol is used to find the hardware address of a local device?", options: ["RARP", "ARP", "ICMP", "IGRP"], answer: 1 },
    { question: "What does VLAN stand for?", options: ["Virtual Local Area Network", "Variable Local Area Network", "Verified Local Area Network", "Virtual LAN Adapter"], answer: 0 },
    { question: "What layer of the OSI model does TCP operate on?", options: ["Application", "Transport", "Network", "Data Link"], answer: 1 },
    { question: "Which command is used to display the routing table on a Cisco router?", options: ["show ip table", "show ip route", "show routing-table", "display routes"], answer: 1 },
    { question: "What is the purpose of NAT?", options: ["To translate IP addresses", "To secure the network", "To route packets", "To block unauthorized access"], answer: 0 },
    { question: "Which protocol is used to send email?", options: ["SMTP", "POP3", "FTP", "HTTP"], answer: 0 },
    { question: "What does DHCP stand for?", options: ["Dynamic Host Configuration Protocol", "Dynamic Hypertext Configuration Protocol", "Dynamic Host Control Protocol", "Data Host Configuration Protocol"], answer: 0 },
    { question: "What is the range of a Class C IP address?", options: ["192.0.0.0 - 223.255.255.255", "128.0.0.0 - 191.255.255.255", "224.0.0.0 - 239.255.255.255", "0.0.0.0 - 127.255.255.255"], answer: 0 },
    { question: "Which protocol uses port 53?", options: ["HTTP", "FTP", "DNS", "SMTP"], answer: 2 },
    { question: "Which layer of the OSI model is responsible for logical addressing?", options: ["Physical", "Network", "Transport", "Application"], answer: 1 },
    { question: "What is the purpose of a default gateway?", options: ["To serve as a DNS server", "To connect to a remote network", "To assign IP addresses", "To block unauthorized traffic"], answer: 1 },
    { question: "Which command is used to back up the running configuration to startup configuration on a router?", options: ["write memory", "save config", "backup run-start", "store config"], answer: 0 },
    { question: "What is the maximum length of an IPv4 address?", options: ["4 bytes", "6 bytes", "16 bytes", "8 bytes"], answer: 0 },
    { question: "Which device uses MAC addresses to forward data?", options: ["Router", "Switch", "Hub", "Repeater"], answer: 1 },
    { question: "What is the purpose of a firewall?", options: ["To speed up the network", "To block unauthorized traffic", "To translate IP addresses", "To manage DNS"], answer: 1 },
    { question: "What does ICMP stand for?", options: ["Internet Control Message Protocol", "Internet Connection Management Protocol", "Internal Communication Message Protocol", "Internet Common Messaging Protocol"], answer: 0 },
    { question: "Which command is used to configure an IP address on a Cisco router interface?", options: ["assign ip", "set ip address", "ip address", "configure ip"], answer: 2 },
    { question: "What is the purpose of the ping command?", options: ["To test connectivity", "To display routing tables", "To configure VLANs", "To monitor traffic"], answer: 0 },
    { question: "What layer of the OSI model does HTTP operate on?", options: ["Application", "Transport", "Network", "Session"], answer: 0 },
    { question: "What is the maximum hop count for RIP?", options: ["10", "15", "16", "20"], answer: 2 },
    { question: "Which protocol is used to securely connect to a remote device?", options: ["Telnet", "SSH", "FTP", "HTTP"], answer: 1 },
    { question: "Which cable type is used to connect similar devices, like two switches?", options: ["Crossover", "Straight-through", "Coaxial", "Fiber optic"], answer: 0 },
    { question: "What does OSPF stand for?", options: ["Open Shortest Path First", "Open Source Path Forward", "Optimal Shortest Path First", "Open Secure Path Forward"], answer: 0 },
    { question: "What is the default administrative distance of OSPF?", options: ["90", "100", "110", "120"], answer: 2 },
    { question: "Which type of address is 224.0.0.1?", options: ["Unicast", "Multicast", "Broadcast", "Loopback"], answer: 1 },
    { question: "What is the binary equivalent of the decimal number 192?", options: ["11000000", "10101000", "11100000", "11110000"], answer: 0 },
    { question: "Which protocol provides encryption for VPNs?", options: ["L2TP", "IPsec", "PPTP", "ICMP"], answer: 1 },
    { question: "What is the purpose of STP in networking?", options: ["To prevent loops", "To secure data", "To manage bandwidth", "To translate IP addresses"], answer: 0 },
    { question: "Which command is used to view the status of all interfaces on a Cisco router?", options: ["show interfaces", "show ip status", "show ip interfaces", "view interfaces"], answer: 0 },
    { question: "What is the range of a Class A IP address?", options: ["0.0.0.0 - 127.255.255.255", "128.0.0.0 - 191.255.255.255", "192.0.0.0 - 223.255.255.255", "224.0.0.0 - 239.255.255.255"], answer: 0 },
    { question: "Which command is used to enable a router interface?", options: ["activate", "no shutdown", "enable interface", "start"], answer: 1 },
    { question: "What is the function of DNS?", options: ["To resolve domain names to IP addresses", "To encrypt data", "To route packets", "To manage IP leases"], answer: 0 },
    { question: "Which protocol is used to transfer files between systems?", options: ["FTP", "SMTP", "HTTP", "SNMP"], answer: 0 },
    { question: "What is the size of an IPv6 address?", options: ["32 bits", "64 bits", "128 bits", "256 bits"], answer: 2 },
    { question: "Which address is used for loopback testing in IPv4?", options: ["127.0.0.1", "192.168.0.1", "10.0.0.1", "0.0.0.0"], answer: 0 },
    { question: "What does the term MTU stand for?", options: ["Maximum Transmission Unit", "Minimum Transmission Unit", "Maximum Transfer Utility", "Minimum Transfer Utility"], answer: 0 },
    { question: "Which routing protocol is distance-vector based?", options: ["OSPF", "EIGRP", "RIP", "IS-IS"], answer: 2 },
    { question: "What is the purpose of a router?", options: ["To connect different networks", "To extend a network", "To prevent loops", "To provide internet access"], answer: 0 },
    { question: "Which protocol uses port 69?", options: ["FTP", "TFTP", "SNMP", "SSH"], answer: 1 },
    { question: "What is the purpose of QoS in networking?", options: ["To prioritize network traffic", "To route packets", "To secure data", "To block unauthorized users"], answer: 0 },
    { question: "What is the default encapsulation type for serial interfaces on Cisco routers?", options: ["PPP", "HDLC", "Frame Relay", "Ethernet"], answer: 1 },
    { question: "Which command is used to set a password for console access on a Cisco router?", options: ["password console", "enable password", "line console 0", "login password"], answer: 2 },
    { question: "What is the purpose of a subnet mask?", options: ["To define the host portion of an IP address", "To define the network portion of an IP address", "To encrypt IP addresses", "To assign MAC addresses"], answer: 1 },
    { question: "Which layer of the OSI model is responsible for data encryption?", options: ["Presentation", "Transport", "Network", "Session"], answer: 0 },
    { question: "What is the valid range of VLAN IDs in a Cisco switch?", options: ["1-1005", "1-4094", "0-4096", "1-1024"], answer: 1 },
    { question: "Which command displays the MAC address table on a Cisco switch?", options: ["show mac address-table", "show arp", "show interfaces mac", "show ip table"], answer: 0 },
    { question: "Which protocol uses a three-way handshake for reliable communication?", options: ["UDP", "TCP", "ICMP", "IP"], answer: 1 },
    { question: "What does CDP stand for in Cisco networking?", options: ["Cisco Data Protocol", "Cisco Discovery Protocol", "Cisco Device Protocol", "Cisco Domain Protocol"], answer: 1 },
    { question: "What is the multicast address used by OSPF routers?", options: ["224.0.0.5", "224.0.0.9", "224.0.0.10", "224.0.0.6"], answer: 0 },
    { question: "Which cable type is used to connect a PC to a router console port?", options: ["Crossover cable", "Console cable", "Straight-through cable", "Coaxial cable"], answer: 1 },
    { question: "What is the default port for HTTPS?", options: ["80", "25", "443", "22"], answer: 2 },
    { question: "What does SNMP stand for?", options: ["Simple Network Management Protocol", "Secure Network Monitoring Protocol", "Standard Network Management Protocol", "Simple Network Monitoring Protocol"], answer: 0 },
    { question: "Which type of NAT allows many internal devices to share one public IP address?", options: ["Static NAT", "Dynamic NAT", "PAT", "One-to-one NAT"], answer: 2 },
    { question: "Which command is used to enter global configuration mode on a Cisco device?", options: ["config t", "enable", "configure terminal", "setup"], answer: 2 },
    { question: "Which protocol is used for network time synchronization?", options: ["NTP", "SMTP", "FTP", "DHCP"], answer: 0 },
];



// Global Variables
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
const selectedAnswers = [];
let questions = [];

//DOM Elements 
const timerElement = document.getElementById("timer");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

// Start Quiz
function startQuiz() {
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
	
    questions = shuffle(allQuestions).slice(0, 10); // Select 10 random questions
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers.length = 0; // Clear the array instead of reassignment
    loadQuestion();
    startTimer();
}


function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        button.addEventListener("click", () => selectAnswer(index));
        optionsElement.appendChild(button);
    });
}

// Select Answer 
function selectAnswer(selectedIndex) {
	selectedAnswers[currentQuestionIndex] = selectedIndex;
	
    const correctIndex = questions[currentQuestionIndex].answer;
    if (selectedIndex === correctIndex) {
        score++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        resetTimer();
    } else {
        endQuiz();
    }
}

// Start Timer 
function startTimer() {
    let timeLeft = 15;
    timerElement.textContent = `Time left: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                loadQuestion();
                resetTimer();
            } else {
                endQuiz(true);
            }
        }
    }, 1000);
}

// Reset Timer
function resetTimer() {
    clearInterval(timerInterval);
    startTimer();
}

// End Quiz
function endQuiz(timeout = false) {
    clearInterval(timerInterval);
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    const scoreText = timeout
        ? "Time Out! You scored " + score + " out of 10."
        : "You scored " + score + " out of 10.";

	
    document.getElementById("score").textContent = scoreText;

    displayResults();
}

// Displays Results
function displayResults() {
    const resultDetails = document.getElementById("result-details");
    resultDetails.innerHTML = "";

    questions.forEach((question, index) => {
        const userAnswer = selectedAnswers[index];
        const userCorrect = userAnswer === question.answer;
        resultDetails.innerHTML += `
             <div class="question-result">
                <p><strong>Q${index + 1}: ${question.question}</strong></p>
                <p>Your Answer: ${userAnswer !== undefined ? question.options[userAnswer] : "No Answer"}</p>
                <p>Correct Answer: ${question.options[question.answer]}</p>
                <p>Status: ${userCorrect ? "Correct" : "Incorrect"}</p>
            </div>
        `;
    });
}


// Restart quiz functionality
function restartQuiz() {
    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers.length = 0; // Clear the array instead of reassignment

    // Reshuffle and reset questions
    const shuffledQuestions = shuffle(allQuestions).slice(0, 10);
    questions.length = 0; // Clear old questions
    questions.push(...shuffledQuestions);

    // Switch to the start screen
    document.getElementById("result-container").style.display = "none";
    document.getElementById("start-container").style.display = "block";
}


// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("start-button").addEventListener("click", startQuiz);
    document.getElementById("restart-button").addEventListener("click", restartQuiz);
});
