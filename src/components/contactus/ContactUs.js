import React, { useEffect, useState } from "react";
import "./contactpage.css";
import download from "../../images/download.png";
import email from "../../images/email.png";
import location from "../../images/location.png";

const ContactUs = () => {
    const [youremail, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState(false);
    
  
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const sendMsg = async () => {
  if (msg === "" || youremail === "") {
    return;
  }
  setError(false)
  setSucess(false)
  if (!isValidEmail(youremail)) {
    setError(true);
    return;
  }
  try {
    const res = await fetch("https://my-key-api-beta.vercel.app/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: youremail,
        message: msg
      })
    });

    const data = await res.json();
    console.log(data); // { success: true, info: "Email sent!" }
    if (data.success === true)
    {
      setSucess(true)
      setEmail("")
      setMsg("")
    }

  } catch (err) {
    console.error("Failed to send email:", err);
  }
};



  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    const focusFunc = (event) => {
      let parent = event.target.parentNode;
      parent.classList.add("focus");
    };

    const blurFunc = (event) => {
      let parent = event.target.parentNode;
      if (event.target.value === "") {
        parent.classList.remove("focus");
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);

      return () => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      };
    });
  }, []);
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    // fetch("SamplePDF.pdf").then((response) => {
    //   response.blob().then((blob) => {
    //     // Creating new object of PDF file
    //     const fileURL = window.URL.createObjectURL(blob);
    //     // Setting various property values
    //     let alink = document.createElement("a");
    //     alink.href = fileURL;
    //     alink.download = "MuhammadRafehResume.pdf";
    //     alink.click();
    //   });
    // });
  };
  
  return (
    <>
      <div className="main-container">
        <div class="ccontainer" id="contact-section">
          <span class="big-circle"></span>
          <div class="form">
            <div class="contact-info">
              <h3 class="title a1">Let's get in touch</h3>
              <p class="text">
                If you have any inquiries or require further information, please
                don't hesitate to get in touch with us. We value your feedback
                and are here to assist you.
              </p>

              <div class="info">
                <div class="information">
                  <img src={email} class="icon-linkedin" alt="" />
                  <p class="asas">rafayabdul9888@gmail.com</p>
                </div>
                <div class="information">
                  <img src={location} class="icon-linkedin" alt="" />
                  <p class="asas">Lahore, Pakistan</p>
                </div>
                <div class="information">
                  {/* <i class="fa-solid fa-location-dot icon" color='green'></i> */}
                  <img src={download} class="icon-linkedin" alt="" />
                  <p class="asas">+923334755884</p>
                </div>
              </div>

              <div class="social-media">
                <div class="social-icons">
                  <a
                    href="https://www.linkedin.com/in/abdul-rafay-mubashar-software-engineer/"
                    target="_blank"
                  >
                    {/* <h1 class="fab fa-linkedin-in"></h1> */}
                    <h1
                      className="fab fa-linkedin-in"
                      style={{ color: "#1f4943" }}
                    ></h1>
                  </a>
                  <a
                    href="https://github.com/Abdul-Rafay-Mubashar"
                    target="_blank"
                  >
                    <h1
                      className="fab fa-github"
                      style={{ color: "#1f4943" }}
                    ></h1>
                  </a>
                  <a href="#" onClick={onButtonClick}>
                    <h1 class="fa fa-file" style={{ color: "#1f4943" }}></h1>
                  </a>
                </div>
              </div>
            </div>

            <div class="contact-form">
              <form action="index.html" autocomplete="off">
                {sucess === true?
                <div class="alert alert-success" role="alert">
                  Your message has sent to Rafay!
                </div>:null
                }
                {error === true?
                <div class="alert alert-danger" role="alert">
                  Please Enter Valid Email!
                </div>:null
                }
                <h3 class="title">Contact us</h3>
                <div class="input-container">
                  <input value={youremail} type="email" name="email" class="input" onInput={(e)=>{setEmail(e.target.value)}}
/>
                  <label for="">Email</label>
                  <span>Email</span>
                </div>
                <div class="input-container textarea">
                  <textarea value={msg} name="message" class="input"                       onInput={(e)=>{setMsg(e.target.value)}}
></textarea>
                  <label for="">Message</label>
                  <span>Message</span>
                </div>
                <div className="btn-div">
                  <div>
                    <input
                      className="btn-class"
                      type="button"
                      value="Send"
                      class="btn"
                      onClick={sendMsg}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
