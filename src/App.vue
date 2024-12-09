<template>
  <div id="app">
    <h1>Chat with Our Bot</h1>
    <div class="chat-container">
      <div v-for="(message, index) in messages" :key="index" :class="['message', message.sender]">
        <p>{{ message.text }}</p>
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <input
        type="text"
        v-model="userInput"
        placeholder="Type your message..."
        @keyup.enter="sendMessage"
        autofocus
      />
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      userInput: '',
      messages: [],
    };
  },
  methods: {
    async sendMessage() {
      if (this.userInput.trim() === '') return;

      // Add user's message to the messages array
      this.messages.push({ text: this.userInput, sender: 'user' });

      // Prepare the conversation history (up to 20 messages)
      const conversationHistory = this.messages.slice(-39).map((msg) => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text,
      }));

      // Send the message to the backend API
      try {
        const response = await axios.post('https://your-api-gateway-endpoint', {
          messages: conversationHistory,
        });

        // Add bot's response to the messages array
        this.messages.push({ text: response.data.reply, sender: 'bot' });
      } catch (error) {
        console.error(error);
        this.messages.push({ text: 'Sorry, something went wrong.', sender: 'bot' });
      }

      // Clear the input field
      this.userInput = '';
    },
  },
};
</script>

<style>
#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.chat-container {
  border: 1px solid #ccc;
  padding: 10px;
  max-height: 500px;
  overflow-y: auto;
  margin-bottom: 10px;
}
.message {
  margin-bottom: 10px;
}
.message.user {
  text-align: right;
}
.message.bot {
  text-align: left;
}
form {
  display: flex;
}
input[type='text'] {
  flex: 1;
  padding: 10px;
  font-size: 16px;
}
button {
  padding: 10px;
  font-size: 16px;
}
</style>