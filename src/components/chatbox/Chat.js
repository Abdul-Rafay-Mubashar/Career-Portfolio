import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      text: "Hi! I am here to assist. Ask anything about Rafay?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [conversation, setConversation] = useState([
    {
      role: "assistant",
      content: "I am here to assist. Ask anything about Rafay?",
    },
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const data = [
    {
      id: "personal_info",
      text: "Abdul Rafay enjoys hiking, and traveling. He is generally calm and analytical by nature and a good man.",
      metadata: { section: "personal" },
      contact: {
        Email: "rafayabdul9888@gmail.com",
        "Phone No": "+92-333-4755884",
      },
      DOB: "8-Feb-2002",
    },
    {
      id: "profile_intro",
      text: "Abdul Rafay is a Full Stack Developer with over half a decade of expertise, having delivered 70+ successful projects. Specialized in Python, JavaScript, React.js, Vue.js, React Native, Node.js, FastAPI, and Django. Focus on scalable, efficient, and client-focused web and mobile solutions.",
      metadata: { section: "intro" },
    },
    {
      id: "skills_summary",
      text: "Key skills include Web Development, AI Integration, Database Management, and Data Scraping & Automation. Abdul Rafay integrates OpenAI, LangChain, NLP models, and tools like Playwright, Selenium, and BeautifulSoup with GoLogin and Multilogin to simulate human-like browsing.",
      metadata: { section: "skills" },
    },
    {
      id: "skills_list",
      text: "Technical skills: Node.js, React, MongoDB, Python, Data Scraping, Vue.js, FastAPI, Django, MySQL, PostgreSQL, React Native, Mobile App Development, Web Development, Selenium, Database Management.",
      metadata: { section: "skills" },
    },
    {
      id: "experience_valentech",
      text: "Full Stack Developer at ValenTech. Jan 2024 - Present. Responsible for end-to-end web development including frontend with React and Vue.js, backend with FastAPI and Django, and automation tools with Playwright and Selenium. Projects include real estate listing platforms, job boards, and competitive analysis tools.",
      metadata: {
        role: "Full Stack Developer",
        company: "ValenTech",
        date_range: "Jan 2024 - Present",
      },
    },
    {
      id: "experience_whitebox",
      text: "React Native Developer at White Box. Aug 2022 - Dec 2023. Developed user-centric, high-performance mobile applications. Skilled in React Native best practices, efficient UI development, and API integration.",
      metadata: {
        role: "React Native Developer",
        company: "White Box",
        date_range: "Aug 2022 - Dec 2023",
      },
    },
    {
      id: "experience_freelance",
      text: "JavaScript Web Developer (Freelancing). Mar 2021 - May 2022. Built responsive and user-friendly pages using HTML, CSS, and JavaScript. Transitioned into React development, learning best practices in component-based design and performance optimization.",
      metadata: {
        role: "JavaScript Web Developer",
        company: "Freelance",
        date_range: "Mar 2021 - May 2022",
      },
    },
    {
      id: "languages",
      text: "Languages: English (Conversational), Urdu (Native or Bilingual).",
      metadata: { section: "languages" },
    },
    {
      id: "education",
      text: "Education: Cathedral High School (Computer Science). Forman Christian College (Computer Science). University of Management and Technology - Bachelor of Computer Science.",
      metadata: { section: "education" },
    },
    {
      id: "development_timelines",
      text: "Approximate development timelines & charges:\n- 1 Page Web App → 3–4 days.\n- 2 Page Web App → 5–7 days.\n- 3 Page Web App → 8–10 days.\nCharges depend on functionality, design, and integrations required. Hourly ate of Rafay is 15$/hr",
      metadata: { section: "timelines" },
    },
    {
      id: "meeting_contact",
      text: "For detailed discussion and exact project cost estimation, please set up a meeting with Abdul Rafay.",
      contact: {
        Email: "rafayabdul9888@gmail.com",
        "Phone No": "+92-333-4755884",
      },
    },
    {
      id: "project_audio_nlp",
      text: "Audio NLP (2024) – An AI-Powered Learning Management Platform developed by Abdul Rafay...",
      metadata: { project: "Audio NLP", categories: ["AI", "EdTech", "NLP"] },
    },
    {
      id: "project_link_scrape",
      text: "Link Scrape (2025) – LinkedIn Sales Navigator Automation Tool developed by Abdul Rafay...",
      metadata: {
        project: "Link Scrape",
        categories: ["Automation", "Scraping", "B2B"],
      },
    },
    {
      id: "project_tapp",
      text: "TAPP (2025) – Mobile Event Management App developed by Abdul Rafay...",
      metadata: { project: "TAPP", categories: ["Mobile", "Events"] },
    },
    {
      id: "project_dev_track_task_wallet",
      text: "Dev Track Task Wallet – A task tracking and productivity management mobile app built with React Native, Django, and PostgreSQL developed by Abdul Rafay...",
      metadata: {
        project: "Dev Track Task Wallet",
        categories: ["Productivity", "Mobile", "Management"],
      },
    },
    {
      id: "project_car_scraper",
      text: "Car Scraper (AutoMine) – A two-phase scraping system for German car websites developed by Abdul Rafay...",
      metadata: {
        project: "Car Scraper",
        categories: ["Scraping", "Automation", "Automotive"],
      },
    },
    {
      id: "project_doc_alert",
      text: "Doc Alert – An automation system that monitors a medical portal for new appointment requests developed by Abdul Rafay...",
      metadata: {
        project: "Doc Alert",
        categories: ["Healthcare", "Automation", "Cloud"],
      },
    },
    {
      id: "achievements",
      text: "Delivered 70+ successful projects with 98% client satisfaction. Automated complex workflows reducing client costs by up to 40%.",
      metadata: { section: "achievements" },
    },
    {
      id: "portfolio_links",
      text: "Portfolio & Code Repositories",
      metadata: {
        github: "https://github.com/rafayabdul9888",
        linkedin:
          "https://www.linkedin.com/in/abdul-rafay-mubashar-software-engineer/",
        upwork: "https://www.upwork.com/freelancers/~011dea6c56fcda93a3",
      },
    },
    {
      id: "services",
      text: "Services: Web Development, Mobile Development, AI & Automation, Cloud Deployment.",
      metadata: { section: "services" },
    },
    {
      id: "working_model",
      text: "Available for Full-time, Part-time, or Contract work. Timezone: GMT+5 (Pakistan Standard Time). Communication: Slack, Zoom, Google Meet, Upwork messages.",
      metadata: { section: "working_model" },
    },
    {
      id: "availability_delivery",
      text: "Availability: Part-time & Full-time freelance. Typical delivery: MVP in 2–3 weeks, larger platforms in 1–3 months.",
      metadata: { section: "availability" },
    },
    {
      id: "preferred_projects",
      text: "Preferred Projects: AI integrations, SaaS platforms, dashboards, automation tools, and mobile apps.",
      metadata: { section: "preferences" },
    },
    {
      id: "project_management_tools",
      text: "Tools: Jira, Trello, Asana, GitHub, Bitbucket, GitLab, Notion.",
      metadata: { section: "tools" },
    },
    {
      simple: {
        "one-page": {
          time: "3-4 days",
          note: "Basic static or marketing page. Minimal backend.",
        },
        "landing page": {
          time: "3-4 days",
          note: "Single-page marketing site.",
        },
        "two-page": {
          time: "5-7 days",
          note: "Simple features, contact form, 1-2 integrations.",
        },
        "three-page": {
          time: "8-10 days",
          note: "Basic navigation, forms, some dynamic content.",
        },
      },
      complex: {
        "e-commerce": {
          note: "Complex project (catalog, payments, orders). Please schedule a meeting for exact quote.",
        },
        "truck dispatch": {
          note: "Dispatch systems need routing, driver tracking, admin panels and integrations. Please schedule a meeting for exact quote.",
        },
        marketplace: {
          note: "Multi-vendor marketplace — requires planning and detailed scope. Please schedule a meeting.",
        },
        saas: {
          note: "SaaS platforms require architectural design and pricing discussion. Please schedule a meeting.",
        },
      },
      unknown_response: "I don't know. what you talking about",
    },
  ];

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);

async function getChatAnswer(prompt) {
  const res = await fetch("https://my-key-api-beta.vercel.app/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });
  const data = await res.json();
  return data.answer;
}

  const askOpenAI = async (question) => {
    var api_key = process.env.REACT_APP_API_KEY;

    console.log(api_key);
    const newConversation = [
      ...conversation,
      { role: "user", content: question },
    ];
    setConversation(newConversation);

    const memoryText = newConversation
      .map((m) => `${m.role}: ${m.content}`)
      .join("\n");

    const prompt = `
You are Abdul Rafay's assistant.
if someone talk to you wth pronoun you then it is talking abuot abdul rafay so answer in that
Answer ONLY using the provided context below.
you got json data type
You are given old chat also so if context is unclear check it
If they ask about Abdul Rafay always provide positive comment 
If They Ask bad thing about Abdul Rafay Just Ask him Behave Your Self
If the answer is not in the context, reply exactly with: "I don't know. what you talking about"
You can do complementary chat like hi, hello, how are you? etc

Context:
${JSON.stringify(data)}

Conversation:
${memoryText}

Question: ${question}
Answer:
`;

try {
  

    setTyping(true);
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`, // ⚠️ replace with secure storage
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0,
      }),
    });

    const jsonData = await response.json();
    var answer = jsonData.choices[0].message.content;
    // var answer = await getChatAnswer(prompt)
    } catch (error) {
      setTyping(false);
      setConversation((prev) => [
      ...prev,
      { role: "assistant", content: "sorry for now i can not answer you" },
    ]);
        setMessages((prev) => [...prev, { text: answer, sender: "assistant" }]);

    return

}
    console.log(answer)
    setConversation((prev) => [
      ...prev,
      { role: "assistant", content: answer },
    ]);
    setMessages((prev) => [...prev, { text: answer, sender: "assistant" }]);
          setTyping(false);

    return answer;
    
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    await askOpenAI(input);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="chat-btn-wrapper">
        <div className="chat-btn" onClick={toggleChat}>
          {isOpen ? "×" : "💬"}
        </div>
        {!isOpen && <div className="chat-hint">Lets talk about Rafay!</div>}
      </div>
      {/* <div className="chat-btn" onClick={toggleChat}>
        {isOpen ? "×" : "💬"}
      </div> */}

      {/* Chat Box */}
      <div className={`chat-box ${isOpen ? "active" : ""}`}>
        <div className="chat-header">Chat About Rafay</div>
        <div className="box">
          {messages.map((msg, idx) =>
            msg.sender === "assistant" ? (
              <div key={idx} className="person-a">
                <div className="icon"></div>
                <div className="message">{msg.text}</div>
              </div>
            ) : (
              <div key={idx} className="person-b">
                <div className="message">{msg.text}</div>
              </div>
            )
          )}

          {typing === true ? (
            <div className="person-a">
              <div className="icon"></div>
              <div className="typing-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ) : null}

          <div ref={messagesEndRef}></div>
        </div>

        <div className="chat-footer">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
}
