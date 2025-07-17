/**
 * Deforge AI Agent Chatbot Widget
 * Version: 1.0.0
 * A Node editor for making AI Agents
 */
(function (global) {
  "use strict";

  // Default configuration
  const DEFAULT_CONFIG = {
    workflowId: null,
    theme: "deforge-light",
    position: "bottom-right",
    // Default company info (change these values as needed)
    defaultCompanyName: "Deforge Assistant",
    defaultCompanyDescription: "Your AI Agent is ready to help!",
    defaultCompanyLogo: `<svg width="100%" height="100%" viewBox="0 0 1906 1906" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
      <path d="M106.127,105.939c-171.021,170.916 -128.975,497.201 80.308,846.483c-205.602,342.77 -253.536,673.672 -80.308,846.914c171.022,171.127 497.39,128.976 846.484,-80.308c342.769,205.603 673.672,253.536 846.914,80.308c171.021,-170.917 129.081,-497.202 -80.308,-846.483c205.602,-342.77 253.536,-673.673 80.308,-846.914c-112.263,-112.263 -292.53,-133.284 -505.167,-72.634c-35.738,10.091 -56.448,47.406 -46.252,83.145c10.197,35.633 47.406,56.342 83.144,46.143c170.39,-48.563 301.464,-33.321 373.151,38.473c174.28,174.28 -0.316,666.218 -418.573,1084.58c-32.06,32.059 -64.857,62.962 -98.176,92.605c-27.749,24.702 -30.168,67.168 -5.466,94.917c24.702,27.749 67.168,30.273 94.917,5.571c35.319,-31.325 69.902,-64.014 103.854,-97.966c97.441,-97.441 183.214,-199.19 255.637,-301.571c152.204,278.349 175.33,517.464 67.798,625.02c-174.28,174.28 -666.218,-0.315 -1084.58,-418.573c-32.06,-32.059 -62.962,-64.856 -92.606,-98.175c-24.701,-27.749 -67.273,-30.273 -95.021,-5.571c-27.749,24.701 -30.168,67.273 -5.466,95.021c31.325,35.214 64.014,69.903 97.966,103.854c97.441,97.441 199.19,183.214 301.571,255.637c-278.026,151.995 -517.383,175.435 -625.02,67.798c-174.281,-174.28 0.315,-666.218 418.573,-1084.58c34.371,-34.371 69.479,-67.273 105.112,-98.808l56.868,-47.301c66.221,-55.185 161.455,-58.339 231.145,-7.673l61.597,44.674c18.711,13.56 44.885,9.356 58.445,-9.355c9.985,-13.875 10.616,-32.374 1.471,-46.881l-42.465,-67.063c-44.148,-69.797 -37.735,-160.194 15.767,-223.054l49.088,-57.496c15.767,-18.501 13.56,-46.357 -4.941,-62.123c-13.454,-11.457 -32.374,-13.77 -48.143,-5.992l-110.476,54.658c-61.07,30.273 -133.706,25.122 -189.941,-13.454l-81.148,-55.606c-19.446,-13.349 -45.934,-8.409 -59.178,11.038c-9.671,14.085 -9.986,32.584 -0.841,46.986l39.311,61.703c47.092,73.79 37.106,170.284 -24.071,232.826l-47.196,48.353c-35.843,31.745 -71.056,64.962 -105.535,99.438c-97.441,97.441 -183.214,199.19 -255.638,301.572c-152.099,-278.242 -175.329,-517.465 -67.797,-625.021c56.552,-56.552 149.577,-78.311 272.025,-60.441c36.685,5.256 70.847,-20.181 76.207,-56.972c5.361,-36.79 -20.182,-70.846 -56.972,-76.207c-160.931,-23.335 -296.109,8.094 -386.39,98.493l0.01,0.012Zm1154.16,394.704c-25.963,26.699 -25.333,69.27 1.366,95.13c8.094,7.883 16.188,15.872 24.177,23.861c50.769,50.769 98.598,103.326 143.06,156.934c23.756,28.591 66.116,32.48 94.707,8.83c28.591,-23.756 32.584,-66.221 8.829,-94.812c-47.091,-56.763 -97.756,-112.368 -151.469,-166.081c-8.514,-8.515 -17.028,-16.924 -25.543,-25.228c-26.699,-25.858 -69.27,-25.227 -95.129,1.367l0.002,-0.001Z" style="fill:currentColor;fill-rule:nonzero;"/>
    </svg>`,
    zIndex: 10000,
    enableTypingIndicator: true,
    typingDelay: 1000,
    enablePersistence: true,
    maxMessages: 100,
    enableAnalytics: false,
    analyticsCallback: null,
  };

  // Theme configurations
  const THEMES = {
    "deforge-light": {
      primary: "#1d1f26",
      primaryHover: "#2a2d36",
      textColor: "#1d1f26",
      backgroundColor: "#fefcea",
      bubbleColor: "#fefcea",
      bubbleIconColor: "#1d1f26",
      headerTextColor: "#fefcea",
      buttonTextColor: "#fefcea",
      chatBg: "#fefcea",
      messageBg: "#ffffff",
      userMessageBg: "#1d1f26",
      userMessageText: "#fefcea",
      borderColor: "#e5e7eb",
    },
    "deforge-dark": {
      primary: "#fefcea",
      primaryHover: "#f0f3d0",
      textColor: "#fefcea",
      backgroundColor: "#1d1f26",
      bubbleColor: "#1d1f26",
      bubbleIconColor: "#fefcea",
      headerTextColor: "#1d1f26",
      buttonTextColor: "#1d1f26",
      chatBg: "#1d1f26",
      messageBg: "#2a2d36",
      userMessageBg: "#fefcea",
      userMessageText: "#1d1f26",
      borderColor: "#374151",
    },
  };

  class ChatbotWidget {
    constructor(options = {}) {
      this.config = { ...DEFAULT_CONFIG, ...options };
      this.workflowId = this.config.workflowId;
      this.sessionId = this.getOrCreateChatId();
      this.isOpen = false;
      this.messages = [];
      this.theme = THEMES[this.config.theme] || THEMES["deforge-light"];
      this.isInitialized = false;
      this.isLoading = false;
      this.workflowConfig = null;
      this.isWorkflowValid = false; // Track workflow validity

      // Workflow-specific data
      this.companyName = this.config.defaultCompanyName;
      this.companyDescription = this.config.defaultCompanyDescription;
      this.companyLogo = this.config.defaultCompanyLogo;
      this.introMessage = "Hello! How can I help you today?";
      this.status = null; // Add status field

      // Bind methods
      this.toggleChat = this.toggleChat.bind(this);
      this.closeChat = this.closeChat.bind(this);
      this.sendMessage = this.sendMessage.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.handleInput = this.handleInput.bind(this);

      this.init();
    }

    getOrCreateChatId() {
      const storageKey = `deforge-chat-id-${this.workflowId}`;

      try {
        // Check if we have an existing chat ID for this workflow
        const existingChatId = localStorage.getItem(storageKey);
        if (existingChatId) {
          return existingChatId;
        }
      } catch (e) {
        console.warn("Failed to read chat ID from localStorage:", e);
      }

      // Generate new random chat ID
      const newChatId = this.generateRandomChatId();

      try {
        // Save the new chat ID to localStorage
        localStorage.setItem(storageKey, newChatId);
      } catch (e) {
        console.warn("Failed to save chat ID to localStorage:", e);
      }

      return newChatId;
    }

    generateRandomChatId() {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < 12; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return `chat_${result}`;
    }

    async init() {
      if (this.isInitialized) return;

      this.injectStyles();
      this.createWidget();
      this.bindEvents();

      // Validate workflow and fetch config
      if (this.workflowId) {
        await this.validateAndFetchWorkflow();
      } else {
        this.showErrorMessage("No workflow ID provided");
        this.isWorkflowValid = false;
      }

      this.isInitialized = true;
      this.trackEvent("widget_initialized", {
        sessionId: this.sessionId,
        workflowId: this.workflowId,
        theme: this.config.theme,
      });
    }

    async validateAndFetchWorkflow() {
      console.log("Starting workflow validation for:", this.workflowId);

      try {
        this.setLoading(true);

        const response = await fetch(
          `https://api.deforge.io/api/widget/init/${this.workflowId}`
        );
        const data = await response.json();

        if (!data.success) {
          this.showErrorMessage("Workflow validation failed");
          this.isWorkflowValid = false;
          return;
        }

        this.companyName = data?.companyName || this.config.defaultCompanyName;
        this.companyDescription =
          data?.companyDescription || this.config.defaultCompanyDescription;
        this.companyLogo = data?.companyLogo || this.config.defaultCompanyLogo;
        this.introMessage =
          data?.introMessage || this.config.defaultIntroMessage;
        this.status = data?.status || this.config.defaultStatus;

        this.isWorkflowValid = data?.valid || false;

        this.workflowConfig = {
          companyName: data?.companyName || this.config.defaultCompanyName,
          companyDescription:
            data?.companyDescription || this.config.defaultCompanyDescription,
          companyLogo: data?.companyLogo || this.config.defaultCompanyLogo,
          introMessage: data?.introMessage || this.config.defaultIntroMessage,
          status: data?.status || this.config.defaultStatus,
          isWorkflowValid: data?.valid || false,
        };

        // Update the header with fetched info
        this.updateHeader();

        // Clear any previous error messages and add intro message
        this.messages = []; // Clear all messages including errors
        this.renderMessages(); // Re-render empty chat
        this.addIntroMessage();

        this.setLoading(false);
        console.log("Workflow validation completed successfully");
      } catch (error) {
        console.error("Error in workflow validation:", error);
        this.isWorkflowValid = false; // Mark workflow as invalid
        this.setLoading(false);
        this.showErrorMessage("The workflow is not valid");
        this.disableInput(); // Disable input when workflow is invalid
      }
    }

    updateHeader() {
      const headerTitle = document.querySelector(
        `#chatbot-widget-${this.sessionId} .chat-header h3`
      );
      const headerDescription = document.querySelector(
        `#chatbot-widget-${this.sessionId} .chat-header p`
      );
      const headerLogo = document.querySelector(
        `#chatbot-widget-${this.sessionId} .chat-header .company-logo`
      );

      if (headerTitle) headerTitle.textContent = this.companyName;
      if (headerDescription)
        headerDescription.textContent = this.companyDescription;
      if (headerLogo) headerLogo.innerHTML = this.companyLogo;
    }

    setLoading(loading) {
      this.isLoading = loading;
      const messageInput = document.getElementById(
        `messageInput-${this.sessionId}`
      );
      const sendButton = document.getElementById(
        `sendButton-${this.sessionId}`
      );

      if (messageInput) {
        // Only disable input if workflow is invalid, not when loading
        messageInput.disabled = !this.isWorkflowValid;

        if (!this.isWorkflowValid) {
          messageInput.placeholder = "Workflow not available";
        } else if (loading) {
          messageInput.placeholder = "AI is thinking...";
        } else {
          messageInput.placeholder = "Type your message...";
        }
      }

      if (sendButton) {
        // Disable send button when loading OR workflow is invalid
        sendButton.disabled = loading || !this.isWorkflowValid;

        if (loading) {
          sendButton.textContent = "...";
        } else {
          sendButton.textContent = "Send";
        }
      }
    }

    disableInput() {
      const messageInput = document.getElementById(
        `messageInput-${this.sessionId}`
      );
      const sendButton = document.getElementById(
        `sendButton-${this.sessionId}`
      );

      if (messageInput) {
        messageInput.disabled = true;
        messageInput.placeholder = "Workflow not available";
        messageInput.value = "";
      }

      if (sendButton) {
        sendButton.disabled = true;
        sendButton.textContent = "Send";
      }
    }

    showErrorMessage(message) {
      console.log("Showing error message:", message);
      this.addMessage(message, "error", false);
    }

    addIntroMessage() {
      console.log(
        "Adding intro message. Current messages count:",
        this.messages.length
      );
      console.log("Is workflow valid?", this.isWorkflowValid);

      if (this.messages.length === 0 && this.isWorkflowValid) {
        // Add test mode message first if status is TEST
        if (this.status === "TEST") {
          console.log("Adding test mode message");
          this.addMessage("⚠️ This workflow is in Test Mode", "bot", false);
        }

        console.log("Adding intro message:", this.introMessage);
        this.addMessage(this.introMessage, "bot", false);
      }
    }

    injectStyles() {
      const existingStyles = document.getElementById(
        `chatbot-widget-styles-${this.sessionId}`
      );
      if (existingStyles) existingStyles.remove();

      // Import Lexend Deca font
      const fontLink = document.createElement("link");
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&display=swap";
      fontLink.rel = "stylesheet";
      fontLink.id = `chatbot-font-${this.sessionId}`;

      // Only add font if it doesn't already exist
      if (!document.getElementById(`chatbot-font-${this.sessionId}`)) {
        document.head.appendChild(fontLink);
      }

      const styles = `
                .chatbot-widget-${this.sessionId} {
                    position: fixed;
                    ${this.getPositionStyles()}
                    z-index: ${this.config.zIndex};
                    font-family: 'Lexend Deca', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                
                .chatbot-widget-${this.sessionId} * {
                    box-sizing: border-box;
                    font-family: 'Lexend Deca', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                
                .chatbot-widget-${this.sessionId} .chat-bubble {
                    width: 60px;
                    height: 60px;
                    background: ${this.theme.bubbleColor};
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                
                .chatbot-widget-${this.sessionId} .chat-bubble:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
                }
                
                .chatbot-widget-${this.sessionId} .chat-bubble::before {
                    content: '';
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    right: -2px;
                    bottom: -2px;
                    background: ${this.theme.bubbleColor};
                    border-radius: 50%;
                    z-index: -1;
                    animation: chatbot-rotate-${
                      this.sessionId
                    } 3s linear infinite;
                }
                
                @keyframes chatbot-rotate-${this.sessionId} {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                .chatbot-widget-${this.sessionId} .chat-bubble svg {
                    width: 24px;
                    height: 24px;
                    fill: ${this.theme.bubbleIconColor};
                }
                
                .chatbot-widget-${this.sessionId} .chat-window {
                    position: absolute;
                    ${this.getWindowPositionStyles()}
                    width: 350px;
                    height: 500px;
                    background: ${this.theme.chatBg};
                    border-radius: 15px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                    display: none;
                    flex-direction: column;
                    overflow: hidden;
                    transform: translateY(20px);
                    opacity: 0;
                    transition: all 0.3s ease;
                }
                
                .chatbot-widget-${this.sessionId} .chat-window.active {
                    display: flex;
                    transform: translateY(0);
                    opacity: 1;
                }
                
                .chatbot-widget-${this.sessionId} .chat-header {
                    background: ${this.theme.primary};
                    color: ${this.theme.headerTextColor};
                    padding: 20px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                
                .chatbot-widget-${this.sessionId} .chat-header .company-logo {
                    width: 32px;
                    height: 32px;
                    flex-shrink: 0;
                }
                
                .chatbot-widget-${this.sessionId} .chat-header .company-info {
                    flex: 1;
                }
                
                .chatbot-widget-${this.sessionId} .chat-header h3 {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 600;
                }
                
                .chatbot-widget-${this.sessionId} .chat-header p {
                    margin: 5px 0 0 0;
                    font-size: 14px;
                    opacity: 0.9;
                }
                
                .chatbot-widget-${this.sessionId} .close-chat {
                    position: absolute;
                    top: 15px;
                    right: 20px;
                    background: none;
                    border: none;
                    color: ${this.theme.headerTextColor};
                    font-size: 24px;
                    cursor: pointer;
                    opacity: 0.8;
                    transition: opacity 0.2s;
                }
                
                .chatbot-widget-${this.sessionId} .close-chat:hover {
                    opacity: 1;
                }
                
                .chatbot-widget-${this.sessionId} .chat-messages {
                    flex: 1;
                    padding: 20px;
                    overflow-y: auto;
                    background: ${this.theme.backgroundColor};
                    color: ${this.theme.textColor};
                }
                
                .chatbot-widget-${this.sessionId} .message {
                    margin-bottom: 15px;
                    animation: chatbot-fadeIn-${this.sessionId} 0.3s ease;
                }
                
                @keyframes chatbot-fadeIn-${this.sessionId} {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .chatbot-widget-${this.sessionId} .message.bot {
                    text-align: left;
                }
                
                .chatbot-widget-${this.sessionId} .message.user {
                    text-align: right;
                }
                
                .chatbot-widget-${this.sessionId} .message.error {
                    text-align: center;
                }
                
                .chatbot-widget-${this.sessionId} .message-content {
                    display: inline-block;
                    padding: 12px 16px;
                    border-radius: 18px;
                    max-width: 80%;
                    word-wrap: break-word;
                    font-size: 14px;
                    line-height: 1.4;
                }
                
                .chatbot-widget-${
                  this.sessionId
                } .message.bot .message-content {
                    background: ${this.theme.messageBg};
                    color: ${this.theme.textColor};
                    border-bottom-left-radius: 6px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
                
                .chatbot-widget-${
                  this.sessionId
                } .message.user .message-content {
                    background: ${this.theme.userMessageBg};
                    color: ${this.theme.userMessageText};
                    border-bottom-right-radius: 6px;
                }
                
                .chatbot-widget-${
                  this.sessionId
                } .message.error .message-content {
                    background: #fee2e2;
                    color: #dc2626;
                    border-radius: 18px;
                    text-align: center;
                    font-weight: 500;
                }
                
                .chatbot-widget-${this.sessionId} .chat-input {
                    display: flex;
                    padding: 20px;
                    background: ${this.theme.chatBg};
                    border-top: 1px solid ${this.theme.borderColor};
                    gap: 10px;
                }
                
                .chatbot-widget-${this.sessionId} .chat-input input {
                    flex: 1;
                    padding: 12px 16px;
                    border: 1px solid ${this.theme.borderColor};
                    border-radius: 25px;
                    outline: none;
                    font-size: 14px;
                    font-family: 'Lexend Deca', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    background: ${this.theme.messageBg};
                    color: ${this.theme.textColor};
                    transition: border-color 0.2s;
                }
                
                .chatbot-widget-${this.sessionId} .chat-input input:focus {
                    border-color: ${this.theme.primary};
                }
                
                .chatbot-widget-${
                  this.sessionId
                } .chat-input input::placeholder {
                    color: ${this.theme.textColor};
                    opacity: 0.6;
                }
                
                .chatbot-widget-${this.sessionId} .chat-input input:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                
                .chatbot-widget-${this.sessionId} .chat-input button {
                    padding: 12px 20px;
                    background: ${this.theme.primary};
                    color: ${this.theme.buttonTextColor};
                    border: none;
                    border-radius: 25px;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 500;
                    font-family: 'Lexend Deca', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    transition: all 0.2s;
                    min-width: 60px;
                }
                
                .chatbot-widget-${
                  this.sessionId
                } .chat-input button:hover:not(:disabled) {
                    background: ${this.theme.primaryHover};
                    transform: translateY(-1px);
                }
                
                .chatbot-widget-${this.sessionId} .chat-input button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                    transform: none;
                }
                
                .chatbot-widget-${this.sessionId} .typing-indicator {
                    display: flex;
                    align-items: center;
                    padding: 12px 16px;
                    background: ${this.theme.messageBg};
                    border-radius: 18px;
                    border-bottom-left-radius: 6px;
                    max-width: 60px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    width: fit-content;
                }
                
                .chatbot-widget-${this.sessionId} .typing-dots {
                    display: flex;
                    gap: 4px;
                }
                
                .chatbot-widget-${this.sessionId} .typing-dot {
                    width: 8px;
                    height: 8px;
                    background: ${this.theme.textColor};
                    opacity: 0.6;
                    border-radius: 50%;
                    animation: chatbot-typingDots-${
                      this.sessionId
                    } 1.4s infinite;
                }
                
                .chatbot-widget-${this.sessionId} .typing-dot:nth-child(1) {
                    animation-delay: 0s;
                }
                
                .chatbot-widget-${this.sessionId} .typing-dot:nth-child(2) {
                    animation-delay: 0.2s;
                }
                
                .chatbot-widget-${this.sessionId} .typing-dot:nth-child(3) {
                    animation-delay: 0.4s;
                }
                
                @keyframes chatbot-typingDots-${this.sessionId} {
                    0%, 60%, 100% { 
                        transform: scale(0.8) translateY(0); 
                        opacity: 0.5; 
                    }
                    30% { 
                        transform: scale(1.2) translateY(-4px); 
                        opacity: 1; 
                    }
                }
                
                @media (max-width: 480px) {
                    .chatbot-widget-${this.sessionId} .chat-window {
                        width: calc(100vw - 40px);
                        height: calc(100vh - 100px);
                    }
                }
            `;

      const styleSheet = document.createElement("style");
      styleSheet.id = `chatbot-widget-styles-${this.sessionId}`;
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }

    getPositionStyles() {
      switch (this.config.position) {
        case "bottom-left":
          return "bottom: 20px; left: 20px;";
        case "bottom-right":
          return "bottom: 20px; right: 20px;";
        case "top-left":
          return "top: 20px; left: 20px;";
        case "top-right":
          return "top: 20px; right: 20px;";
        default:
          return "bottom: 20px; right: 20px;";
      }
    }

    getWindowPositionStyles() {
      switch (this.config.position) {
        case "bottom-left":
          return "bottom: 80px; left: 0;";
        case "bottom-right":
          return "bottom: 80px; right: 0;";
        case "top-left":
          return "top: 80px; left: 0;";
        case "top-right":
          return "top: 80px; right: 0;";
        default:
          return "bottom: 80px; right: 0;";
      }
    }

    createWidget() {
      const widget = document.createElement("div");
      widget.className = `chatbot-widget-${this.sessionId}`;
      widget.id = `chatbot-widget-${this.sessionId}`;

      widget.innerHTML = `
                <div class="chat-bubble" id="chatBubble-${this.sessionId}">
                    <svg viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                </div>
                
                <div class="chat-window" id="chatWindow-${this.sessionId}">
                    <div class="chat-header">
                        <div class="company-logo">${this.companyLogo}</div>
                        <div class="company-info">
                            <h3>${this.companyName}</h3>
                            <p>${this.companyDescription}</p>
                        </div>
                        <button class="close-chat" id="closeChat-${this.sessionId}">&times;</button>
                    </div>
                    
                    <div class="chat-messages" id="chatMessages-${this.sessionId}"></div>
                    
                    <div class="chat-input">
                        <input type="text" id="messageInput-${this.sessionId}" placeholder="Type your message...">
                        <button id="sendButton-${this.sessionId}">Send</button>
                    </div>
                </div>
            `;

      document.body.appendChild(widget);
      this.widgetElement = widget;
    }

    bindEvents() {
      const chatBubble = document.getElementById(
        `chatBubble-${this.sessionId}`
      );
      const closeChat = document.getElementById(`closeChat-${this.sessionId}`);
      const sendButton = document.getElementById(
        `sendButton-${this.sessionId}`
      );
      const messageInput = document.getElementById(
        `messageInput-${this.sessionId}`
      );

      chatBubble.addEventListener("click", this.toggleChat);
      closeChat.addEventListener("click", this.closeChat);
      sendButton.addEventListener("click", this.sendMessage);
      messageInput.addEventListener("keypress", this.handleKeyPress);
      messageInput.addEventListener("input", this.handleInput);
    }

    handleKeyPress(e) {
      if (e.key === "Enter" && !this.isLoading && this.isWorkflowValid) {
        this.sendMessage();
      }
    }

    handleInput(e) {
      const sendButton = document.getElementById(
        `sendButton-${this.sessionId}`
      );
      if (sendButton) {
        // Disable send button if no text, loading, or workflow invalid
        sendButton.disabled =
          !e.target.value.trim() || this.isLoading || !this.isWorkflowValid;
      }
    }

    toggleChat() {
      const chatWindow = document.getElementById(
        `chatWindow-${this.sessionId}`
      );
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        chatWindow.style.display = "flex";
        setTimeout(() => {
          chatWindow.classList.add("active");
          const messageInput = document.getElementById(
            `messageInput-${this.sessionId}`
          );
          if (!this.isLoading && this.isWorkflowValid) {
            messageInput.focus();
          }
        }, 10);
        this.trackEvent("chat_opened", { sessionId: this.sessionId });
      } else {
        this.closeChat();
      }
    }

    closeChat() {
      const chatWindow = document.getElementById(
        `chatWindow-${this.sessionId}`
      );
      chatWindow.classList.remove("active");
      setTimeout(() => {
        chatWindow.style.display = "none";
      }, 300);
      this.isOpen = false;
      this.trackEvent("chat_closed", { sessionId: this.sessionId });
    }

    loadPersistedMessages() {
      if (!this.config.enablePersistence) return;

      try {
        const saved = localStorage.getItem(
          `deforge-messages-${this.workflowId}-${this.sessionId}`
        );
        if (saved) {
          this.messages = JSON.parse(saved);
          this.renderMessages();
        }
      } catch (e) {
        console.warn("Failed to load persisted messages:", e);
      }
    }

    saveMessages() {
      if (!this.config.enablePersistence) return;

      try {
        const toSave = this.messages.slice(-this.config.maxMessages);
        localStorage.setItem(
          `deforge-messages-${this.workflowId}-${this.sessionId}`,
          JSON.stringify(toSave)
        );
      } catch (e) {
        console.warn("Failed to save messages:", e);
      }
    }

    renderMessages() {
      const chatMessages = document.getElementById(
        `chatMessages-${this.sessionId}`
      );
      chatMessages.innerHTML = "";

      this.messages.forEach((message) => {
        this.renderMessage(message);
      });
    }

    renderMessage(message) {
      const chatMessages = document.getElementById(
        `chatMessages-${this.sessionId}`
      );
      const messageDiv = document.createElement("div");
      messageDiv.className = `message ${message.sender}`;
      messageDiv.innerHTML = `<div class="message-content">${message.text}</div>`;

      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    addMessage(text, sender, save = true) {
      const message = {
        text,
        sender,
        timestamp: Date.now(),
        sessionId: this.sessionId,
        workflowId: this.workflowId,
      };

      this.messages.push(message);
      this.renderMessage(message);

      // Note: Message persistence removed - only sessionId is stored
      // if (save) {
      //   this.saveMessages();
      // }

      this.trackEvent("message_sent", {
        sessionId: this.sessionId,
        workflowId: this.workflowId,
        sender,
        messageLength: text.length,
      });
    }

    async sendMessage() {
      // Prevent sending if workflow is invalid
      if (this.isLoading || !this.isWorkflowValid) return;

      const messageInput = document.getElementById(
        `messageInput-${this.sessionId}`
      );
      const message = messageInput.value.trim();

      if (!message || !this.workflowId) return;

      this.addMessage(message, "user");
      messageInput.value = "";

      this.setLoading(true);

      if (this.config.enableTypingIndicator) {
        this.showTypingIndicator();
      }

      try {
        // TODO: Replace with actual API call to your Deforge server
        // const response = await fetch(this.config.chatEndpoint, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     workflowId: this.workflowId,
        //     message: message,
        //     sessionId: this.sessionId
        //   })
        // });

        const response = await fetch(
          `https://api.deforge.io/api/widget/send/${this.workflowId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Message: message,
              queryId: this.sessionId,
            }),
          }
        );

        const data = await response.json();

        if (!data.success) {
          throw new Error(data.message);
        }

        const botReply = data?.value?.Message;

        this.hideTypingIndicator();
        this.addMessage(
          botReply || "Sorry, I couldn't process your request.",
          "bot"
        );

        // Auto-focus on input after bot responds
        this.focusMessageInput();
      } catch (error) {
        this.hideTypingIndicator();
        this.addMessage(
          "Sorry, I'm having trouble processing your request. Please try again.",
          "bot"
        );

        // Auto-focus on input even after error
        this.focusMessageInput();

        console.error("Error sending message:", error);
      } finally {
        this.setLoading(false);
      }
    }

    focusMessageInput() {
      // Focus the message input if chat is open and workflow is valid
      if (this.isOpen && this.isWorkflowValid && !this.isLoading) {
        const messageInput = document.getElementById(
          `messageInput-${this.sessionId}`
        );
        if (messageInput && !messageInput.disabled) {
          setTimeout(() => {
            messageInput.focus();
          }, 100); // Small delay to ensure everything is rendered
        }
      }
    }

    showTypingIndicator() {
      const chatMessages = document.getElementById(
        `chatMessages-${this.sessionId}`
      );
      const typingDiv = document.createElement("div");
      typingDiv.className = "message bot";
      typingDiv.id = `typingIndicator-${this.sessionId}`;
      typingDiv.innerHTML = `
                <div class="typing-indicator">
                    <div class="typing-dots">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                </div>
            `;

      chatMessages.appendChild(typingDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    hideTypingIndicator() {
      const typingIndicator = document.getElementById(
        `typingIndicator-${this.sessionId}`
      );
      if (typingIndicator) {
        typingIndicator.remove();
      }
    }

    trackEvent(eventName, data) {
      if (this.config.enableAnalytics && this.config.analyticsCallback) {
        this.config.analyticsCallback(eventName, data);
      }
    }

    // Public API methods
    show() {
      if (!this.isOpen) {
        this.toggleChat();
      }
    }

    hide() {
      if (this.isOpen) {
        this.closeChat();
      }
    }

    destroy() {
      if (this.widgetElement) {
        this.widgetElement.remove();
      }

      const styles = document.getElementById(
        `chatbot-widget-styles-${this.sessionId}`
      );
      if (styles) {
        styles.remove();
      }

      // Remove font link when destroying widget
      const fontLink = document.getElementById(
        `chatbot-font-${this.sessionId}`
      );
      if (fontLink) {
        fontLink.remove();
      }

      this.trackEvent("widget_destroyed", {
        sessionId: this.sessionId,
        workflowId: this.workflowId,
      });
    }

    updateConfig(newConfig) {
      this.config = { ...this.config, ...newConfig };
      if (newConfig.theme) {
        this.theme = THEMES[newConfig.theme] || THEMES["deforge-light"];
        this.injectStyles();
      }
    }

    sendCustomMessage(message, sender = "bot") {
      this.addMessage(message, sender);
    }

    getMessages() {
      return [...this.messages];
    }

    clearMessages() {
      this.messages = [];
      const chatMessages = document.getElementById(
        `chatMessages-${this.sessionId}`
      );
      if (chatMessages) {
        chatMessages.innerHTML = "";
      }
      this.addIntroMessage();
      // Note: Message persistence removed - no need to save
    }

    getChatId() {
      return this.sessionId;
    }

    getSessionId() {
      return this.sessionId;
    }

    // Clear chat history and generate new chat ID
    startNewChat() {
      const storageKey = `deforge-chat-id-${this.workflowId}`;

      // Generate new chat ID
      this.sessionId = this.generateRandomChatId();

      try {
        // Save the new chat ID to localStorage
        localStorage.setItem(storageKey, this.sessionId);

        // Clear old messages from localStorage
        const oldMessagesKey = `deforge-messages-${this.workflowId}-${this.sessionId}`;
        localStorage.removeItem(oldMessagesKey);
      } catch (e) {
        console.warn("Failed to update chat ID in localStorage:", e);
      }

      // Clear current messages and add intro message
      this.clearMessages();

      return this.sessionId;
    }

    getWorkflowId() {
      return this.workflowId;
    }

    getWorkflowConfig() {
      return this.workflowConfig;
    }

    getStatus() {
      return this.status;
    }
  }

  global.ChatbotWidget = ChatbotWidget;
})(window);

// Demo functionality
let currentWidget = null;
let analyticsEvents = [];

function logAnalytics(event, data) {
  analyticsEvents.push({
    event,
    data,
    timestamp: new Date().toLocaleTimeString(),
  });
  updateAnalyticsDisplay();
  updateUI();
}

function updateAnalyticsDisplay() {
  const log = document.getElementById("analyticsLog");
  if (!log) return;

  const recent = analyticsEvents.slice(-10).reverse();
  log.innerHTML =
    "<strong>Analytics Events:</strong><br>" +
    recent
      .map(
        (item) =>
          `<span style="color: #4ade80;">[${item.timestamp}]</span> ${
            item.event
          }: ${JSON.stringify(item.data)}`
      )
      .join("<br>");
}

function updateUI() {
  const sessionInfo = document.getElementById("sessionInfo");
  const statusInfo = document.getElementById("statusInfo");
  const messageCount = document.getElementById("messageCount");
  const workflowInfo = document.getElementById("workflowInfo");
  const workflowStatus = document.getElementById("workflowStatus");

  if (currentWidget) {
    if (sessionInfo) sessionInfo.textContent = currentWidget.getSessionId();
    if (statusInfo) statusInfo.textContent = "Active";
    if (messageCount)
      messageCount.textContent = currentWidget.getMessages().length;
    if (workflowInfo)
      workflowInfo.textContent = currentWidget.getWorkflowId() || "None";
    if (workflowStatus)
      workflowStatus.textContent = currentWidget.getStatus() || "None";
  } else {
    if (sessionInfo) sessionInfo.textContent = "None";
    if (statusInfo) statusInfo.textContent = "Destroyed";
    if (messageCount) messageCount.textContent = "0";
    if (workflowInfo) workflowInfo.textContent = "None";
    if (workflowStatus) workflowStatus.textContent = "None";
  }
}

// Initialize the widget
function initializeWidget() {
  currentWidget = new ChatbotWidget({
    workflowId: this.workflowId,
    theme: "deforge-light",
    position: "bottom-right",
    enableAnalytics: true,
    analyticsCallback: logAnalytics,
  });
  updateUI();
}

// Control functions
function showWidget() {
  if (currentWidget) {
    currentWidget.show();
  }
}

function hideWidget() {
  if (currentWidget) {
    currentWidget.hide();
  }
}

function sendCustomMessage() {
  if (currentWidget) {
    const messages = [
      "🎯 This is a custom message from the Deforge system!",
      "💡 Your AI Agent is working perfectly.",
      "🚀 The workflow is running smoothly!",
      "⭐ Thanks for using Deforge!",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    currentWidget.sendCustomMessage(randomMessage, "bot");
  }
}

function clearMessages() {
  if (currentWidget) {
    currentWidget.clearMessages();
  }
}

function createNewWidget() {
  if (currentWidget) {
    currentWidget.destroy();
  }
  initializeWidget();
}

function destroyWidget() {
  if (currentWidget) {
    currentWidget.destroy();
    currentWidget = null;
    updateUI();
  }
}

function changeTheme() {
  const themeSelect = document.getElementById("themeSelect");
  if (!themeSelect) return;

  const theme = themeSelect.value;
  if (currentWidget) {
    currentWidget.updateConfig({ theme });
  }
}

function changePosition() {
  const positionSelect = document.getElementById("positionSelect");
  if (!positionSelect) return;

  const position = positionSelect.value;
  if (currentWidget) {
    currentWidget.destroy();
    currentWidget = new ChatbotWidget({
      workflowId: "demo-workflow-123",
      theme: document.getElementById("themeSelect")?.value || "deforge-light",
      position: position,
      enableAnalytics: true,
      analyticsCallback: logAnalytics,
    });
    updateUI();
  }
}
