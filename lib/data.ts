export const profile = {
  name: "Shravan Kumar", title: "Data Scientist | AI/ML Engineer | Machine Learning Engineer",
  tagline: "Building intelligent solutions with Machine Learning, Deep Learning, Generative AI, NLP, and Data Science.",
  location: "Indore, Madhya Pradesh, India", email: "shravan.tec@gmail.com", phone: "+91 9102673681",
  linkedin: "https://www.linkedin.com/in/shravan91/", github: "https://github.com/shravan9102",
  portfolio: "https://sc-landing-page-nu-eight.vercel.app/",
  roles: ["Data Scientist", "AI/ML Engineer", "Machine Learning Engineer", "Generative AI Developer"],
};
export const skills = [
  { group: "Programming", items: ["Python", "SQL"] },
  { group: "Data Science & Analytics", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "Data Cleaning", "Data Preprocessing", "Data Visualization", "Statistical Analysis", "Data Analytics"] },
  { group: "Machine Learning", items: ["Scikit-learn", "Predictive Modeling", "Regression", "Classification", "Random Forest", "KNN", "Logistic Regression", "Naive Bayes", "Feature Engineering", "Model Evaluation"] },
  { group: "Deep Learning", items: ["PyTorch", "Neural Networks", "Reinforcement Learning", "Deep Q-Learning (DQN)"] },
  { group: "Generative AI & NLP", items: ["LLMs", "RAG", "LangChain", "Hugging Face", "Sentence Transformers", "spaCy", "NLTK", "Vector Embeddings", "Semantic Search"] },
  { group: "Computer Vision", items: ["OpenCV", "Facial Recognition", "Pose Estimation", "Image Processing", "AdaIN"] },
  { group: "Deployment & Tools", items: ["FastAPI", "Flask", "Streamlit", "Docker", "Git", "GitHub", "REST APIs"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "Supabase"] },
];
export type Job = { role: string; org: string; period: string; points: string[]; logo?: string; certificate?: string };
// Optional per internship: logo (e.g. "/logos/oasis.png" in public/logos/) and certificate (verified certificate URL).
export const experience: Job[] = [
  { role: "Data Science Intern", org: "Oasis Infobyte", period: "Aug 2026 – Sep 2026", points: ["Completed hands-on Data Science tasks and projects in Python, strengthening machine learning basics."] },
  { role: "Data Science Intern", org: "Codveda Technologies", period: "Jul 2026 – Aug 2026", points: ["Cleaned, preprocessed, and explored real-world datasets using Python, Pandas, NumPy, and Matplotlib, applying EDA and statistical analysis to extract insights.", "Built predictive machine learning models with Scikit-learn and used SQL to query and analyze data."] },
  { role: "Data Science Intern", org: "Atlyscloud Workforce", period: "Jun 2026 – Jul 2026", points: ["Performed data analysis and machine learning tasks in Python and SQL across project assignments.", "Applied analytical problem solving to practical assignments, strengthening data analytics skills."] },
  { role: "Data Analyst Intern", org: "Bluestock Fintech", period: "May 2026 – Jun 2026", points: ["Cleaned and analyzed datasets with Python and SQL; conducted exploratory data analysis (EDA).", "Created reports and data visualizations to communicate business insights on fintech domain projects, collaborating with a remote team."] },
  { role: "Data Science Intern", org: "Hex Software Pvt. Ltd.", period: "Feb 2026 – Mar 2026", points: ["Performed data preprocessing, analysis, and basic machine learning in Python on real-world projects.", "Collaborated with a remote team on assigned tasks, building data-handling and problem-solving skills."] },
];
export type Project = { title: string; category: string; date: string; points: string[]; tech: string[]; links: { label: string; href: string }[]; github?: string; image?: string; isScreenshot?: boolean };
// Optional per project: isScreenshot (set true once image is a real screenshot; removes the "Illustration" badge), github (verified https://github.com/... repo URL) and image (e.g. "/projects/ats.png", file placed in public/projects/).
// Only URLs found in the resume PDF are used. No repository URLs were in the resume, so none are shown.
// To add one: append { label: "GitHub", href: "https://github.com/shravan9102/<repo>" } to that project's links.
export const projects: Project[] = [
  { title: "AI-Powered ATS Resume Scorer", image: "/projects/ats.png", category: "NLP", date: "Nov 2026",
    points: ["NLP-based platform scoring resumes across five weighted dimensions: Formatting, Keywords & Skills, Content Quality, Skill Validation, ATS Compatibility.", "Semantic skill validation with Sentence Transformers and spaCy-based content analysis to generate improvement recommendations.", "Parses PDF, DOC, and DOCX resumes; Dockerized FastAPI backend with Streamlit UI and Supabase authentication."],
    tech: ["Python", "FastAPI", "Streamlit", "spaCy", "Sentence Transformers", "NLP", "Supabase", "Docker"],
    links: [{ label: "Live Demo", href: "https://shravan-ats-resume-scorer.streamlit.app/" }] },
  { title: "Loanify – AI-Powered Loan Approval Prediction", image: "/projects/loanify.png", category: "Machine Learning", date: "Jun 2026",
    points: ["Machine learning classifier predicting loan approval from applicant data, with data cleaning, EDA, and feature engineering.", "Trained and compared KNN, Logistic Regression, and Naive Bayes using Precision, Recall, and F1-Score; results visualized with Matplotlib and Seaborn."],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"], links: [] },
  { title: "AI Real-Time Gym Coach", image: "/projects/gym-coach.png", category: "Computer Vision", date: "Oct 2026",
    points: ["Computer vision app using real-time pose estimation to track body landmarks and automatically count repetitions for supported exercises.", "Workout metrics, progress tracking, and a history dashboard; deployed as a live Streamlit app."],
    tech: ["Python", "OpenCV", "Pose Estimation", "Computer Vision", "Streamlit"],
    links: [{ label: "Live Demo", href: "https://shravan-ai-gym-coach-2026.streamlit.app/" }, { label: "Website", href: "https://ai-realtime-gym-coachs.netlify.app/" }] },
  { title: "NeuralArt – AI Neural Style Transfer", image: "/projects/neuralart.png", category: "Deep Learning", date: "Oct 2026 – Nov 2026",
    points: ["Neural style transfer in PyTorch using AdaIN, which matches feature statistics of the content image to the style image.", "Flask app with image upload, preview, and adjustable style intensity (alpha); deployed on Render."],
    tech: ["Python", "PyTorch", "Flask", "Deep Learning", "Computer Vision", "AdaIN"],
    links: [{ label: "Live Demo", href: "https://neuralart-ai-neural-style-transfer-1.onrender.com/" }] },
  { title: "SnapClass – AI Attendance Management System", image: "/projects/snapclass.png", category: "Computer Vision", date: "Sep 2026 – Oct 2026",
    points: ["Attendance system combining facial recognition with voice biometrics (Resemblyzer, Librosa) to automate classroom attendance.", "Supabase (PostgreSQL) for cloud storage and authentication with a Streamlit interface."],
    tech: ["Python", "Streamlit", "Flask", "Face Recognition", "Resemblyzer", "Librosa", "Supabase", "PostgreSQL"],
    links: [{ label: "Live Demo", href: "https://snapclass-shravan9102.streamlit.app/" }, { label: "Official Website", href: "https://sc-landing-page-nu-eight.vercel.app/" }] },
  { title: "Flappy Bird AI – Deep Q-Learning", image: "/projects/flappy-bird.png", category: "Deep Learning", date: "Jul 2026",
    points: ["Deep Q-Network (DQN) agent in PyTorch that learns to play Flappy Bird by trial and error, optimizing Q-values from game states and rewards.", "Applied Experience Replay, a Target Network, and Epsilon-Greedy exploration to stabilize training."],
    tech: ["Python", "PyTorch", "Reinforcement Learning", "Deep Q-Network (DQN)"], links: [] },
];
export const education = [
  { degree: "M.Tech – Computer Science (AI & ML)", school: "Medicaps University, Indore", period: "Aug 2025 – Sep 2027 (Expected)", detail: "SGPA: 9.0", extra: "Focus: Machine Learning, Deep Learning, NLP, Generative AI, LLMs. Activities: AI & ML Club, technical workshops, hackathons." },
  { degree: "B.E. – Computer Science Engineering", school: "RKDF University, Bhopal", period: "Jun 2021 – Jul 2025", detail: "Grade: 7.47", extra: "Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering, OOP." },
];
export type Cert = { name: string; issuer: string; date: string; url?: string };
// Optional: url (verified credential link).
export const certifications: Cert[] = [
  { name: "Prime (AI/ML)", issuer: "Apna College", date: "Nov 2026" },
  { name: "AI Interview Performance", issuer: "micro1", date: "Jul 2026" },
  { name: "Professional Career Development & Industry Orientation", issuer: "Skillified Mentor", date: "Feb 2026" },
  { name: "Cyber Job Simulation", issuer: "Deloitte Australia", date: "Nov 2025" },
  { name: "The Ultimate Job Ready Data Science Course", issuer: "CodeWithHarry", date: "Jan 2025" },
];
