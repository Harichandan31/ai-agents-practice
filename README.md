# AI Agents Practice

A Node.js project for experimenting with local LLM models using node-llama-cpp.

## Overview

This project demonstrates how to run a quantized language model completely locally on your machine without any cloud services. It uses the Qwen 3 1.7B model in GGUF format.

## Prerequisites

- Node.js (with ES modules support)
- npm or yarn

## Setup

1. Install dependencies:

    ```bash
    npm install node-llama-cpp
    ```

2. Download a GGUF model file and place it in the `models/` directory:

    ```bash
    npx --no node-llama-cpp pull --dir ./models hf:Qwen/Qwen3-1.7B-GGUF:Q8_0
    ```

    Or download GGUF models manually from Hugging Face

3. Update the model path in `basic-llm-chat-session.js` if you use a different model

## Usage

Run the basic chat session example:

```bash
node ./basic-llm-chat-session.js
```

This will demonstrate a multi-turn conversation with the local LLM model.

## Features

- **100% Local**: No internet connection required after model download
- **System Prompts**: Configure the model's behavior and context
- **Chat Sessions**: Maintain conversation context across multiple prompts
- **Memory Management**: Proper disposal of resources
