export const projectsData = [
  {
    id: 1,
    name: 'Local RAG Engine',
    description:
      'Designed an end-to-end offline Retrieval-Augmented Generation (RAG) system using ChromaDB, HuggingFace embeddings, and a local Ollama (Mistral) LLM. Built a scalable document ingestion pipeline using Unstructured for parsing, chunking, and privacy-focused retrieval.',
    tools: ['Python', 'ChromaDB', 'HuggingFace', 'Ollama', 'Mistral', 'Unstructured'],
    role: 'LLM / Backend Developer',
    code: 'https://github.com/', // add link if available
    demo: ''
  },
  {
    id: 2,
    name: 'Cerina Protocol Foundry',
    description:
      'Developed an autonomous multi-agent GenAI system using LangGraph to generate, review, and refine CBT exercises with human-in-the-loop safety. Implemented a production-ready FastAPI backend with modular agents, persistent state (LangGraph + SQLite), and auditable AI autonomy.',
    tools: ['LangGraph', 'FastAPI', 'Python', 'SQLite', 'GenAI'],
    role: 'GenAI Developer',
    code: 'https://github.com/Keerthana203/cerina-foundry',
    demo: ''
  },
  {
    id: 3,
    name: 'Facial Expression Detection & Recognition System',
    description:
      'Built an AI-powered facial expression recognition system using CNN, ResNet, and Tiny Face Detector to detect emotions, age, and gender in real time. Developed a Django + PostgreSQL backend for storing and visualizing emotional trends via an interactive HR dashboard.',
    tools: ['Django', 'PostgreSQL', 'CNN', 'ResNet', 'TinyFaceDetector', 'OpenCV'],
    role: 'AI/ML Developer',
    code: 'https://github.com/', // add link
    demo: ''
  },
  {
    id: 4,
    name: 'Food Waste Management System',
    description:
      'Developed a computer vision solution for food waste detection using YOLOv7 to estimate waste weight with high accuracy. Built a feedback system that visualizes waste metrics to reduce institutional food wastage.',
    tools: ['YOLOv7', 'Computer Vision', 'Python'],
    role: 'Computer Vision Developer',
    code: 'https://github.com/', // add link if available
    demo: ''
  },
  {
    id: 5,
    name: 'Job Portal Application',
    description:
      'Developed a responsive job portal supporting Admin (subscriptions & user management), Employers (job postings), and Candidates (applications & tracking). Implemented subscriptions, notifications, and job updates to improve engagement.',
    tools: ['Spring Boot', 'Angular', 'MySQL'],
    role: 'Full Stack Developer',
    code: 'https://github.com/', // add link
    demo: ''
  },
  {
    id: 6,
    name: 'Expense Tracker App',
    description:
      'Engineered a secure full-stack expense tracker with JWT authentication, session handling, and role-based access control. Built REST APIs for transaction management with real-time category-based insights and personalized spending suggestions.',
    tools: ['Spring Boot', 'Linux', 'JWT', 'REST API', 'MySQL'],
    role: 'Full Stack Developer',
    code: 'https://github.com/', // add link
    demo: ''
  }
];
