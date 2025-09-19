 const data_about = [
    {
  "id": "personal_info",
  "text": "Abdul Rafay enjoys hiking, and traveling. He is generally calm and analytical by nature and a good man.",
  "metadata": {"section": "personal"},
  "contact": {"Email":"rafayabdul9888@gmail.com", "Phone No": "+92-333-4755884"},
  "DOB":'8-Feb-2002'
},
  {
    "id": "profile_intro",
    "text": "Abdul Rafay is a Full Stack Developer with over half a decade of expertise, having delivered 70+ successful projects. Specialized in Python, JavaScript, React.js, Vue.js, React Native, Node.js, FastAPI, and Django. Focus on scalable, efficient, and client-focused web and mobile solutions.",
    "metadata": {"section": "intro"}
  },
  {
    "id": "skills_summary",
    "text": "Key skills include Web Development, AI Integration, Database Management, and Data Scraping & Automation. Abdul Rafay integrates OpenAI, LangChain, NLP models, and tools like Playwright, Selenium, and BeautifulSoup with GoLogin and Multilogin to simulate human-like browsing.",
    "metadata": {"section": "skills"}
  },
  {
    "id": "experience_valentech",
    "text": "Full Stack Developer at ValenTech. Jan 2024 - Present. Responsible for end-to-end web development including frontend with React and Vue.js, backend with FastAPI and Django, and automation tools with Playwright and Selenium. Projects include real estate listing platforms, job boards, and competitive analysis tools.",
    "metadata": {"role": "Full Stack Developer", "company": "ValenTech", "date_range": "Jan 2024 - Present"}
  },
  {
    "id": "experience_whitebox",
    "text": "React Native Developer at White Box. Aug 2022 - Dec 2023. Developed user-centric, high-performance mobile applications. Skilled in React Native best practices, efficient UI development, and API integration.",
    "metadata": {"role": "React Native Developer", "company": "White Box", "date_range": "Aug 2022 - Dec 2023"}
  },
  {
    "id": "experience_freelance",
    "text": "JavaScript Web Developer (Freelancing). Mar 2021 - May 2022. Built responsive and user-friendly pages using HTML, CSS, and JavaScript. Transitioned into React development, learning best practices in component-based design and performance optimization.",
    "metadata": {"role": "JavaScript Web Developer", "company": "Freelance", "date_range": "Mar 2021 - May 2022"}
  },
  {
    "id": "skills_list",
    "text": "Technical skills: Node.js, React, MongoDB, Python, Data Scraping, Vue.js, FastAPI, Django, MySQL, PostgreSQL, React Native, Mobile App Development, Web Development, Selenium, Database Management.",
    "metadata": {"section": "skills"}
  },
  {
    "id": "languages",
    "text": "Languages: English (Conversational), Urdu (Native or Bilingual).",
    "metadata": {"section": "languages"}
  },
  {
    "id": "education",
    "text": "Education: Cathedral High School (Computer Science). Forman Christian College (Computer Science). University of Management and Technology - Bachelor of Computer Science.",
    "metadata": {"section": "education"}
  },
  {
    "id": "project_audio_nlp",
    "text": "Audio NLP (2024) – An AI-Powered Learning Management Platform developed by Abdul Rafay. Built with React, FastAPI, MySQL, spaCy, and OpenAI models. Designed to enhance teaching and learning through AI-generated notes and quizzes.\n- Teacher Panel: Record lectures in native languages, auto-generate structured notes (Word/PDF), create AI-powered quizzes, edit content, and send real-time notifications.\n- Student Panel: Access lecture notes, quizzes, progress reports, and receive instant updates.\nImpact: Saves educators time while providing interactive, AI-enhanced learning experiences.",
    "metadata": {"project": "Audio NLP", "role": "Full Stack Developer", "developer": "Abdul Rafay", "date_range": "2024", "tech_stack": ["React", "FastAPI", "MySQL", "spaCy", "OpenAI"], "categories": ["AI", "EdTech", "NLP"]}
  },
  {
    "id": "project_link_scrape",
    "text": "Link Scrape (2025) – LinkedIn Sales Navigator Automation Tool developed by Abdul Rafay. Built with Vue.js, FastAPI, PostgreSQL, Bootstrap, Playwright, and GoLogin Browser. Automates lead generation by scraping both person (PURLs) and company (CURLs) links.\n- Features: Campaign creation from uploaded files, status management (Pending, In Progress, Paused), CSV export, automated browsing with Playwright, identity management with GoLogin.\n- Outcome: Streamlined B2B lead generation with reduced manual work.",
    "metadata": {"project": "Link Scrape", "role": "Full Stack Developer", "date_published": "2025-09-08", "developer": "Abdul Rafay", "tech_stack": ["Vue.js", "FastAPI", "PostgreSQL", "Playwright", "GoLogin"], "categories": ["Automation", "Scraping", "B2B"]}
  },
  {
    "id": "project_tapp",
    "text": "TAPP (2025) – Mobile Event Management App developed by Abdul Rafay. Built with React Native for seamless cross-platform performance.\n- Features: Real-time food & drink ordering, QR-based payments, event management dashboard for organizers, and a self-service beer tap system supporting 14 customers simultaneously.\n- Outcome: Reduced event queue times, improved user satisfaction, and streamlined vendor operations.",
    "metadata": {"project": "TAPP", "role": "React Native Developer", "date_published": "2025-09-09", "developer": "Abdul Rafay", "tech_stack": ["React Native", "Android", "Mobile App Development"], "categories": ["Mobile", "Events"]}
  },
  {
    "id": "project_dev_track_task_wallet",
    "text": "Dev Track Task Wallet – A task tracking and productivity management mobile app built with React Native, Django, and PostgreSQL developed by Abdul Rafay.\n- Features: Task tracking, time logging, centralized project overview, productivity measurement, and workflow optimization.\n- Purpose: Help developers and managers maintain visibility into projects, replacing manual spreadsheets with a scalable system.",
    "metadata": {"project": "Dev Track Task Wallet", "role": "Full Stack Developer", "developer": "Abdul Rafay", "tech_stack": ["React Native", "Django", "PostgreSQL"], "categories": ["Productivity", "Mobile", "Management"]}
  },
  {
    "id": "project_car_scraper",
    "text": "Car Scraper (AutoMine) – A two-phase scraping system for German car websites developed by Abdul Rafay. Built with Python, BeautifulSoup, and ScraperAPI.\n- Features: Search filter scraping, detailed car ad extraction, API for on-demand data access, caching & resume support, CSV export.\n- Outcome: Automated, efficient, and reliable car data collection with minimal redundancy.",
    "metadata": {"project": "Car Scraper (AutoMine)", "role": "Python Developer", "tech_stack": ["Python", "BeautifulSoup", "ScraperAPI"], "developer": "Abdul Rafay", "categories": ["Scraping", "Automation", "Automotive"]}
  },
  {
    "id": "project_doc_alert",
    "text": "Doc Alert – An automation system that monitors a medical portal for new appointment requests developed by Abdul Rafay. Built with Python, Playwright, and OpenAI.\n- Features: CAPTCHA solving via OpenAI, login automation, appointment monitoring, email notifications.\n- Deployment: Runs on AWS Lambda with API Gateway scheduling every 5 minutes.\n- Outcome: Saves doctors time by replacing manual portal checks with real-time alerts.",
    "metadata": {"project": "Doc Alert", "role": "Automation Engineer", "developer": "Abdul Rafay", "tech_stack": ["Python", "Playwright", "OpenAI API", "AWS Lambda"], "categories": ["Healthcare", "Automation", "Cloud"]}
  }
    // Add all other data objects as in your original code
  ];