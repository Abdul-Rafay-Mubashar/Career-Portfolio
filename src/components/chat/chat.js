import { useState, useRef, useEffect } from "react";

const GREEN = "rgb(24,75,68)";
const GOLD = "#f5da91";

const styles = {
  chatIcon: {
    position: "fixed",
    right: "25px",
    bottom: "25px",
    width: "65px",
    height: "65px",
    background: GREEN,
    color: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    border: "none",
    zIndex: 1000,
  },
  chatHidden: {
    position: "fixed",
    right: "25px",
    bottom: "100px",
    width: window.innerWidth <= 411 ? "310px" : "440px",
    height: "470px",
    background: "white",
    borderRadius: "22px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 15px 40px rgba(0,0,0,0.18)",
    opacity: 0,
    transform: "translateY(30px) scale(0.9)",
    pointerEvents: "none",
    transition: "opacity 0.35s, transform 0.35s",
    zIndex: 999,
  },


  chatVisible: {
    opacity: 1,
    transform: "translateY(0) scale(1)",
    pointerEvents: "auto",
  },
  header: {
    height: "55px",
    background: GREEN,
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 16px",
    flexShrink: 0,
  },
  closeBtn: {
    cursor: "pointer",
    background: "none",
    border: "none",
    color: "white",
    fontSize: "16px",
  },
  messages: {
    flex: 1,
    padding: "15px",
    overflowY: "auto",
    overflowX: "hidden",
  },
  msgBot: {
    padding: "10px 14px",
    borderRadius: "18px",
    marginBottom: "10px",
    maxWidth: "75%",
    width: "fit-content",
    overflowWrap: "anywhere",
    wordBreak: "break-word",
    background: "#eee",
    lineHeight: "1.6",
  },
  msgUser: {
    padding: "10px 14px",
    borderRadius: "18px",
    marginBottom: "10px",
    maxWidth: "75%",
    width: "fit-content",
    overflowWrap: "anywhere",
    wordBreak: "break-word",
    background: GREEN,
    color: "white",
    marginLeft: "auto",
    lineHeight: "1.6",
  },
  voiceBox: {
    height: "65px",
    background: "#111",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    flexShrink: 0,
  },
  voiceBtn: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  timer: {
    fontSize: "14px",
  },
  bottom: {
    // height: "60px",
    // display: "flex",
    // alignItems: "center",
    // gap: "8px",
    // padding: "10px",
    // borderTop: "1px solid #ddd",
    // flexShrink: 0,
    height: "60px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    padding: "10px",
    borderTop: "1px solid #ddd",
    flexShrink: 0,
  },
  input: {
    height: "40px",
    flex: 1,
    borderRadius: "25px",
    border: "1px solid #ddd",
    padding: "0 15px",
    outline: "none",
    fontSize: "14px",
  },
  count: {
    fontSize: "11px",
    color: "#999",
    whiteSpace: "nowrap",
  },
  sendBtn: {
    width: "40px",
    height: "40px",
    background: GREEN,
    color: "white",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    flexShrink: 0,
  },
  micBtn: {
    width: "40px",
    height: "40px",
    background: GREEN,
    color: "white",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    flexShrink: 0,
  },
  micBtnRecording: {
    background: "red",
  },


};

const API_BASE = "https://personal-pvq7kjnmh-abdul-rafays-projects-62206a19.vercel.app";

// ─── Helper: format bot text with paragraphs + clickable links ───────────────
function formatBotText(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;



  return text.split("\n").map((line, i, arr) => {
    const parts = line.split(urlRegex);
    return (
      <span key={i}>
        {parts.map((part, j) =>
          urlRegex.test(part) ? (
            <a
              key={j}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "blue",
                textDecoration: "underline",
                wordBreak: "break-all",
              }}
            >
              {part}
            </a>
          ) : (
            <span key={j}>{part}</span>
          )
        )}
        {i < arr.length - 1 && <br />}
      </span>
    );
  });
}
// ─────────────────────────────────────────────────────────────────────────────

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello 👋 Let's talk about Abdul Rafay. I can help you explore his skills, experience, education, and projects. You can ask about AI projects like Audio NLP, Link Scrape, and AI Hospital Assistant. Keep your message under 500 characters. Voice messages should be under 1 minute. You can ask up to 100 questions.", isHtml: false },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [limitReached, setLimitReached] = useState(false);
  const [mode, setMode] = useState("text"); // "text" | "voice"
  const [recording, setRecording] = useState(false);
  const [paused, setPaused] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [loading, setLoading] = useState(false);
  const historyRef = useRef([]);

  const messagesRef = useRef(null);
  const recorderRef = useRef(null);
  const chunksRef = useRef([]);
  const streamRef = useRef(null);
  const timerRef = useRef(null);
  const sendingRef = useRef(false);


  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("userData"));


    if (!userData) {

      userData = {
        device_id: crypto.randomUUID(),
        count: 0
      };


      localStorage.setItem(
        "userData",
        JSON.stringify(userData)
      );

    }


    function checkLimit() {

      let data = JSON.parse(
        localStorage.getItem("userData")
      );


      if (data.count >= 100) {

        setLimitReached(true)

      }

    }


    checkLimit();
  }, [])
  // Toggle chat open/close with animation
  const toggleChat = () => {
    if (open) {
      setVisible(false);
      setTimeout(() => setOpen(false), 350);
    } else {
      setOpen(true);
      setTimeout(() => setVisible(true), 10);
    }
  };

  // Scroll to bottom on new messages
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (text, type, isHtml = false) => {
    setMessages((prev) => [...prev, { type, text, isHtml }]);
  };

  const sendMsg = async () => {
    let data = JSON.parse(
      localStorage.getItem("userData")
    );


    if (data.count >= 100) {
      setLimitReached(true)

      return;
    }


    data.count += 1;


    localStorage.setItem(
      "userData",
      JSON.stringify(data)
    );
    if (!inputVal.trim() || loading) return;

    const val = inputVal.trim();
    setInputVal("");
    addMessage(val, "user");

    historyRef.current.push({ role: "user", content: val });

    setLoading(true);
    addMessage("...", "bot-typing");

    try {
      const formData = new FormData();
      formData.append("message_type", "text");
      formData.append("message", val);
      formData.append("history", JSON.stringify(historyRef.current.slice(-7)));

      const res = await fetch(`${API_BASE}/chat`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      const answer = data.answer || "Sorry, something went wrong.";

      setMessages((prev) => {
        const updated = prev.filter((m) => m.type !== "bot-typing");
        return [...updated, { type: "bot", text: answer, isHtml: false }];
      });

      historyRef.current.push({ role: "assistant", content: answer });
    } catch (err) {
      setMessages((prev) => {
        const updated = prev.filter((m) => m.type !== "bot-typing");
        return [
          ...updated,
          {
            type: "bot",
            text: "⚠️ Connection error. Please try again.",
            isHtml: false,
          },
        ];
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMsg();
  };

  // Timer helpers
  const startTimer = (currentSeconds) => {
    stopTimer();
    timerRef.current = setInterval(() => {
      currentSeconds++;
      setSeconds(currentSeconds);
      if (currentSeconds >= 60) {
        sendVoice();
      }
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return (m < 10 ? "0" : "") + m + ":" + (sec < 10 ? "0" : "") + sec;
  };

  // Voice recording
  const recordVoice = async () => {
    if (!recording) {
      if (!streamRef.current) {
        streamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      }
      const recorder = new MediaRecorder(streamRef.current);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.start();
      recorderRef.current = recorder;
      setPaused(false);
      setRecording(true);
      setMode("voice");
      setSeconds(0);
      startTimer(0);
    } else {
      recorderRef.current.stop();
      setRecording(false);
      stopTimer();
    }
  };

  const togglePause = () => {
    if (!paused) {
      recorderRef.current.pause();
      setPaused(true);
      stopTimer();
    } else {
      recorderRef.current.resume();
      setPaused(false);
      startTimer(seconds);
    }
  };

  const deleteVoice = () => {
    if (recorderRef.current) recorderRef.current.stop();
    chunksRef.current = [];
    stopTimer();
    setSeconds(0);
    setRecording(false);
    setPaused(false);
    setMode("text");
  };

  const sendVoice = () => {
    let data = JSON.parse(
      localStorage.getItem("userData")
    );


    if (data.count >= 100) {
      setLimitReached(true)

      return;
    }


    data.count += 1;


    localStorage.setItem(
      "userData",
      JSON.stringify(data)
    );
    if (sendingRef.current) return;
    sendingRef.current = true;

    if (recorderRef.current && recorderRef.current.state !== "inactive") {
      recorderRef.current.stop();
    }

    setTimeout(async () => {
      if (chunksRef.current.length === 0) {
        sendingRef.current = false;
        return;
      }

      const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      const url = URL.createObjectURL(blob);

      addMessage(url, "user-audio", false);

      chunksRef.current = [];
      stopTimer();
      setSeconds(0);
      setRecording(false);
      setPaused(false);
      setMode("text");
      sendingRef.current = false;

      setLoading(true);
      addMessage("...", "bot-typing");

      try {
        const formData = new FormData();
        formData.append("message_type", "audio");
        formData.append("audio", blob, "recording.webm");
        formData.append("history", JSON.stringify(historyRef.current.slice(-7)));

        const res = await fetch(`${API_BASE}/chat`, {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        const answer = data.answer || "Sorry, something went wrong.";

        setMessages((prev) => {
          const updated = prev.filter((m) => m.type !== "bot-typing");
          return [...updated, { type: "bot", text: answer, isHtml: false }];
        });

        historyRef.current.push({ role: "user", content: "[Voice Message]" });
        historyRef.current.push({ role: "assistant", content: answer });
      } catch (err) {
        setMessages((prev) => {
          const updated = prev.filter((m) => m.type !== "bot-typing");
          return [
            ...updated,
            {
              type: "bot",
              text: "⚠️ Connection error. Please try again.",
              isHtml: false,
            },
          ];
        });
      } finally {
        setLoading(false);
      }
    }, 300);
  };

  const chatStyle = {
    ...styles.chatHidden,
    width: window.innerWidth <= 411 ? "330px" : "440px",
    ...(visible ? styles.chatVisible : {}),
  };

  return (
    <>
      {/* Chat Icon */}
      <button style={styles.chatIcon} onClick={toggleChat}>
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div style={chatStyle}>
          {/* Header */}
          <div style={styles.header}>
            <span>AI Assistant 🤖</span>
            <button style={styles.closeBtn} onClick={toggleChat}>
              ✖
            </button>
          </div>

          {/* Messages */}
          <div style={styles.messages} ref={messagesRef}>
            {messages.map((msg, i) => {
              if (msg.type === "user-audio") {
                return (
                  <div key={i} style={styles.msgUser}>
                    🎤 Voice Message
                    <br />
                    <audio
                      controls
                      src={msg.text}
                      style={{ width: "100%", maxWidth: "220px" }}
                    />
                  </div>
                );
              }
              if (msg.type === "bot-typing") {
                return (
                  <div key={i} style={styles.msgBot}>
                    <span style={{ letterSpacing: "2px" }}>●●●</span>
                  </div>
                );
              }
              return (
                <div
                  key={i}
                  style={msg.type === "user" ? styles.msgUser : styles.msgBot}
                >
                  {/* Bot messages: render paragraphs + clickable links */}
                  {msg.type === "bot"
                    ? formatBotText(msg.text)
                    : msg.text}
                </div>
              );
            })}
          </div>

          {/* Voice Recording Bar */}
          {mode === "voice" && (
            <div style={styles.voiceBox}>
              <span style={styles.timer}>🎙 {formatTime(seconds)}</span>
              <button style={styles.voiceBtn} onClick={togglePause}>
                {paused ? "▶" : "⏸"}
              </button>
              <button style={styles.voiceBtn} onClick={deleteVoice}>
                🗑
              </button>
              <button style={styles.voiceBtn} onClick={sendVoice}>
                ➤
              </button>
            </div>
          )}

          {/* Text Input Bar */}
          {mode === "text" && (
            <div style={styles.bottom}>
              <input
                style={styles.input}
                placeholder={loading ? "Waiting for response..." : "Write message..."}
                maxLength={500}
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
              />
              <span
                style={{
                  ...styles.count,
                  display: window.innerWidth <= 411 ? "none" : "block",
                }}
              >
                {inputVal.length}/500
              </span>
              <button
                style={{ ...styles.sendBtn, opacity: (loading || limitReached) ? 0.5 : 1 }}
                onClick={sendMsg}
                disabled={loading || limitReached}
              >
                ➤
              </button>
              <button
                style={{
                  ...styles.micBtn,
                  ...(recording ? styles.micBtnRecording : {}),
                  opacity: (loading || limitReached) ? 0.5 : 1,
                }}
                onClick={recordVoice}
                disabled={loading || limitReached}
              >
                🎤
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}