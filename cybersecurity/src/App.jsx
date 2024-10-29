import React, { useState, useEffect } from 'react';

// Mock data for cybersecurity information (replace with web scraping results)
const cybersecurityInfo = [
  {
    title: "Common Cyber Threats",
    content: "Small businesses face numerous cyber threats, including:",
    details: [
      "Phishing: Deceptive emails or websites that trick users into revealing sensitive information.",
      "Malware: Malicious software that can damage or gain unauthorized access to a computer system.",
      "Ransomware: A type of malware that encrypts files and demands payment for decryption.",
      "DDoS attacks: Overwhelming a system with traffic to make it unavailable to users.",
      "Social Engineering: Manipulating people into divulging confidential information.",
    ]
  },
  {
    title: "Best Practices",
    content: "Implement these cybersecurity best practices to protect your business:",
    details: [
      "Use strong, unique passwords for all accounts and implement a password manager.",
      "Enable Two-Factor Authentication (2FA) wherever possible.",
      "Keep all software and operating systems up to date with the latest security patches.",
      "Regularly back up important data and store backups securely offline.",
      "Train employees on cybersecurity awareness and best practices.",
      "Use a firewall and antivirus software, and keep them updated.",
      "Encrypt sensitive data, especially when transmitting over networks.",
      "Implement access controls to ensure employees only have access to necessary information.",
    ]
  },
  {
    title: "Incident Response",
    content: "If you suspect a cyber attack, follow these steps:",
    details: [
      "Have a documented incident response plan ready before an attack occurs.",
      "Immediately isolate affected systems to prevent further spread.",
      "Notify relevant stakeholders, including employees, customers, and if necessary, law enforcement.",
      "Document everything about the incident for later analysis and potential legal purposes.",
      "Engage with cybersecurity professionals if the attack is beyond your team's capabilities.",
      "After resolving the incident, conduct a post-mortem to improve your defenses.",
    ]
  },
  {
    title: "Data Protection",
    content: "Safeguarding your business data is crucial:",
    details: [
      "Classify data based on sensitivity and implement appropriate protection measures.",
      "Use encryption for sensitive data both at rest and in transit.",
      "Regularly audit and update access permissions to ensure least privilege.",
      "Implement secure data disposal methods for old devices and documents.",
      "Be aware of and comply with relevant data protection regulations (e.g., GDPR, CCPA).",
    ]
  },
];

// Mock quiz data (replace with API call)
const quizQuestions = [
  {
    question: "What is phishing?",
    options: [
      "A type of fish",
      "A cyber attack using deceptive emails or websites",
      "A secure communication method",
      "A type of firewall"
    ],
    correctAnswer: 1
  },
  {
    question: "What does 2FA stand for?",
    options: [
      "Two Factor Authentication",
      "Two Force Attack",
      "Two Firewall Approach",
      "Two Form Application"
    ],
    correctAnswer: 0
  },
  {
    question: "Which of the following is NOT a best practice for cybersecurity?",
    options: [
      "Using the same password for all accounts for easy remembrance",
      "Keeping software updated",
      "Implementing a firewall",
      "Training employees on cybersecurity awareness"
    ],
    correctAnswer: 0
  },
  {
    question: "What is ransomware?",
    options: [
      "A type of antivirus software",
      "A method of encrypting data for protection",
      "Malware that demands payment to restore access to files or systems",
      "A cybersecurity certification"
    ],
    correctAnswer: 2
  },
  {
    question: "What should you do immediately if you suspect a cyber attack?",
    options: [
      "Post about it on social media",
      "Ignore it and hope it goes away",
      "Pay the ransom if demanded",
      "Isolate affected systems and notify relevant stakeholders"
    ],
    correctAnswer: 3
  },
];

// Team member data for About Us section
const teamMembers = [
  {
    name: "Jane Doe",
    role: "Cybersecurity Expert",
    bio: "With over 15 years of experience in information security, Jane leads our team in developing cutting-edge cybersecurity strategies for small businesses."
  },
  {
    name: "John Smith",
    role: "Security Awareness Trainer",
    bio: "John specializes in creating engaging cybersecurity training programs that help employees become the first line of defense against cyber threats."
  },
  {
    name: "Alice Johnson",
    role: "Incident Response Specialist",
    bio: "Alice has a background in computer forensics and helps businesses prepare for and respond to cyber incidents effectively."
  }
];

const CyberSecurityEducation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [securityTip, setSecurityTip] = useState('');
  const [showNewTipNotification, setShowNewTipNotification] = useState(false);

  useEffect(() => {
    const tips = [
      "Always use strong, unique passwords for each account.",
      "Enable two-factor authentication whenever possible.",
      "Keep your software and operating systems up to date.",
      "Be cautious when opening email attachments or clicking on links.",
      "Regularly back up your important data.",
    ];
    const getRandomTip = () => tips[Math.floor(Math.random() * tips.length)];

    setSecurityTip(getRandomTip());
    const interval = setInterval(() => {
      setSecurityTip(getRandomTip());
      setShowNewTipNotification(true);
      setTimeout(() => setShowNewTipNotification(false), 3000);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleQuizAnswer = (selectedAnswer) => {
    const correct = selectedAnswer === quizQuestions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) {
      setQuizScore(quizScore + 1);
    }
    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setActiveSection('quizResults');
      }
    }, 1500);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div>
            <h2 style={styles.sectionTitle}>Welcome to Cybersecurity Essentials</h2>
            <div style={styles.alertBox}>
              <strong>Did you know?</strong> 60% of small businesses that suffer a cyber attack go out of business within six months.
            </div>
            <p style={styles.paragraph}>
              In today's digital landscape, cybersecurity is crucial for small businesses. This platform is designed to educate you about common cyber threats, best practices, and incident response strategies. Explore our resources to learn how to protect your business from cyber attacks and maintain a strong security posture.
            </p>
            <div style={styles.securityTipBox}>
              <h3 style={styles.securityTipTitle}>Security Tip of the Moment:</h3>
              <p style={styles.securityTip}>{securityTip}</p>
              {showNewTipNotification && (
                <div style={styles.newTipNotification}>New Tip!</div>
              )}
            </div>
          </div>
        );
      case 'learn':
        return (
          <div>
            <h2 style={styles.sectionTitle}>Cybersecurity Fundamentals</h2>
            {cybersecurityInfo.map((info, index) => (
              <div key={index} style={styles.infoBox}>
                <h3 style={styles.infoTitle}>{info.title}</h3>
                <p style={styles.infoParagraph}>{info.content}</p>
                <ul style={styles.infoList}>
                  {info.details.map((detail, i) => (
                    <li key={i} style={styles.infoListItem}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case 'quiz':
        return (
          <div>
            <h2 style={styles.sectionTitle}>Test Your Knowledge</h2>
            <div style={styles.quizBox}>
              <h3 style={styles.quizQuestion}>Question {currentQuestion + 1} of {quizQuestions.length}</h3>
              <p style={styles.quizQuestionText}>{quizQuestions[currentQuestion].question}</p>
              <div style={styles.quizOptionsContainer}>
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuizAnswer(index)}
                    style={styles.quizOption}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {showFeedback && (
                <div style={isCorrect ? styles.correctFeedback : styles.incorrectFeedback}>
                  {isCorrect ? 'Correct!' : 'Incorrect. Try again!'}
                </div>
              )}
            </div>
          </div>
        );
      case 'quizResults':
        return (
          <div style={styles.quizResultsContainer}>
            <h2 style={styles.sectionTitle}>Quiz Results</h2>
            <p style={styles.quizScore}>Your score: {quizScore} out of {quizQuestions.length}</p>
            <p style={styles.quizFeedback}>
              {quizScore === quizQuestions.length
                ? "Excellent! You have a strong understanding of cybersecurity basics."
                : quizScore >= quizQuestions.length / 2
                ? "Good job! You have a decent grasp of cybersecurity, but there's room for improvement."
                : "You might want to review the cybersecurity fundamentals and try again."}
            </p>
            <button
              onClick={() => {
                setActiveSection('quiz');
                setCurrentQuestion(0);
                setQuizScore(0);
              }}
              style={styles.retakeQuizButton}
            >
              Retake Quiz
            </button>
          </div>
        );
      case 'about':
        return (
          <div>
            <h2 style={styles.sectionTitle}>About Us</h2>
            <p style={styles.aboutUsParagraph}>
              At Cybersecurity Essentials, we're passionate about protecting small businesses from the ever-growing threat of cyber attacks. Our team of experts brings together years of experience in various aspects of cybersecurity to provide you with the knowledge and tools you need to safeguard your business.
            </p>
            <div style={styles.teamContainer}>
              {teamMembers.map((member, index) => (
                <div key={index} style={styles.teamMemberCard}>
                  <h3 style={styles.teamMemberName}>{member.name}</h3>
                  <h4 style={styles.teamMemberRole}>{member.role}</h4>
                  <p style={styles.teamMemberBio}>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Small Business Cybersecurity Education</h1>
        <p style={styles.subtitle}>Protecting Your Business in the Digital Age</p>
      </header>

      <nav style={styles.nav}>
        {['home', 'learn', 'quiz', 'about'].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            style={activeSection === section ? styles.activeNavButton : styles.navButton}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>

      <main style={styles.main}>
        {renderSection()}
      </main>

      <footer style={styles.footer}>
        <p>&copy; 2024 Small Business Cybersecurity Education. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f0f4f8',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#34495e',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },
  navButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#2980b9',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  activeNavButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  main: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '1rem',
  },
  alertBox: {
    backgroundColor: '#f39c12',
    color: 'white',
    padding: '1rem',
    borderRadius: '4px',
    marginBottom: '1rem',
  },
  paragraph: {
    color: '#34495e',
    lineHeight: '1.6',
    marginBottom: '1rem',
  },
  securityTipBox: {
    backgroundColor: '#e8f4fd',
    padding: '1rem',
    borderRadius: '4px',
    marginTop: '2rem',
    position: 'relative',
  },
  securityTipTitle: {
    color: '#2980b9',
    marginBottom: '0.5rem',
  },
  securityTip: {
    color: '#34495e',
    fontStyle: 'italic',
  },
  newTipNotification: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '0.25rem 0.5rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    animation: 'fadeInOut 3s ease-in-out',
  },
  infoBox: {
    marginBottom: '2rem',
    padding: '1rem',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
  },
  infoTitle: {
    fontSize: '1.5rem',
    color: '#2980b9',
    marginBottom: '0.5rem',
  },
  infoParagraph: {
    color: '#34495e',
    marginBottom: '1rem',
  },
  infoList: {
    paddingLeft: '1.5rem',
  },
  infoListItem: {
    color: '#34495e',
    marginBottom: '0.5rem',
  },
  quizBox: {
    backgroundColor: '#f5f5f5',
    padding: '1.5rem',
    borderRadius: '8px',
  },
  quizQuestion: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#2c3e50',
  },
  quizQuestionText: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
    color: '#34495e',
  },
  quizOptionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  quizOption: {
    padding: '0.75rem',
    backgroundColor: 'white',
    border: '1px solid #bdc3c7',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    textAlign: 'left',
  },
  correctFeedback: {
    marginTop: '1rem',
    padding: '0.5rem',
    backgroundColor: '#2ecc71',
    color: 'white',
    borderRadius: '4px',
    textAlign: 'center',
  },
  incorrectFeedback: {
    marginTop: '1rem',
    padding: '0.5rem',
    backgroundColor: '#e74c3c',
    color: 'white',
    borderRadius: '4px',
    textAlign: 'center',
  },
  quizResultsContainer: {
    textAlign: 'center',
  },
  quizScore: {
    fontSize: '1.5rem',
    color: '#34495e',
    marginBottom: '1rem',
  },
  quizFeedback: {
    color: '#34495e',
    marginBottom: '1rem',
  },
  retakeQuizButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  },
  aboutUsParagraph: {
    color: '#34495e',
    lineHeight: '1.6',
    marginBottom: '2rem',
  },
  teamContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  teamMemberCard: {
    backgroundColor: '#f5f5f5',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  teamMemberName: {
    fontSize: '1.3rem',
    color: '#2c3e50',
    marginBottom: '0.5rem',
  },
  teamMemberRole: {
    fontSize: '1.1rem',
    color: '#3498db',
    marginBottom: '1rem',
  },
  teamMemberBio: {
    color: '#34495e',
    lineHeight: '1.5',
  },
  footer: {
    marginTop: '3rem',
    textAlign: 'center',
    color: '#7f8c8d',
  },
};

export default CyberSecurityEducation;
