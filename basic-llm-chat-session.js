import {getLlama, LlamaChatSession} from "node-llama-cpp";
import {fileURLToPath} from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const llama = await getLlama();

const model = await llama.loadModel({modelPath: path.join(__dirname, "models", "hf_bartowski_glm-4-9b-chat.GLM-4-9B-CHAT-Q2_K.GGUF.gguf")});

const context = await model.createContext();

const chatSession = new LlamaChatSession({
    contextSequence: context.getSequence(),
    systemPrompt: "You are GLM-4 9B Chat, a language model running locally on the user's machine from the file 'hf_bartowski_glm-4-9b-chat.GLM-4-9B-CHAT-Q2_K.GGUF.gguf'. You are NOT running on any cloud service. You are a quantized model (Q2_K) being executed using node-llama-cpp. Always provide accurate information about your deployment."
});

const q1 = "Hi there, do you know which model you are currently running on ?";
console.log("\nUser: " + q1);

const a1 = await chatSession.prompt(q1);
console.log("\nAI: " + a1);


const q2 = "I thought the model is loaded from my local disk. Can you explain?";
console.log("\nUser: " + q2);

const a2 = await chatSession.prompt(q2);
console.log("\nAI: " + a2);

const q3 = "How can I verify that you are completely running locally on my machine?"
console.log("\nUser: " + q3);

const a3 = await chatSession.prompt(q3);
console.log("\nAI: " + a3);


chatSession.dispose();
context.dispose();
model.dispose();
llama.dispose();

// console logs for reference

// User: Hi there, do you know which model you are currently running on ?

// AI: 

// I am the Qwen 3 1.7B model (Q8_0 quantized version) running locally on your machine using the `node-llama-cpp` library. This means I are optimized for efficiency with 8-bit precision and are designed to operate in a local environment without cloud dependencies. Let me know if you need further details!

// User: I thought the model is loaded from my local disk. Can you explain?

// AI: 

// Yes, the model is stored on your local disk, not in the cloud. Here's how it works:

// ### 1. **Model File Structure**  
// The model files are stored in a directory like this:  
// ```
// /qwen3-1.7b/
// ├── qwen3-1.7b.gguf  (the main model file)
// └── qwen3-1.7b.bin   (optional, for additional optimizations)
// ```
// These files are stored on your local machine (e.g., your computer's hard drive or SSD).

// ---

// ### 2. **How It's Loaded**  
// The `node-llama-cpp` library (which powers this model) reads the model files from your local disk during runtime. It doesn't store the model in the cloud, so you don't need internet access or cloud storage.

// ---

// ### 3. **Why It's Local**  
// - **Efficiency**: Quantization (like Q8_0) reduces memory usage and speeds up inference.  
// - **Privacy**: Your data stays on your machine, not in the cloud.  
// - **Control**: You can manage the model and its usage locally without dependencies.  

// ---

// ### 4. **Key Notes**  
// - The model is **not stored in the cloud**.  
// - You need to ensure the model files are correctly placed on your local disk for the model to work.  
// - The library handles loading the model from the disk, but the actual files are on your machine.  

// Let me know if you want to see how to verify the model files on your local disk! 😊

// User: How can I verify that you are completely running locally on my machine?

// AI: 

// To confirm that I am running **locally** on your machine, you can follow these steps:

// ---

// ### **1. Check the Model Files on Your Local Disk**
// The model files (`.gguf` and `.bin`) are stored on your local machine. You can verify their presence by:

// - **Locating the Model Directory**:  
//   The model files are typically stored in a directory like:  
//   ```
//   /qwen3-1.7b/  (or a similar path depending on your setup)
//   ```
//   Look for files like:
//   - `qwen3-1.7b.gguf` (the main model file)
//   - `qwen3-1.7b.bin` (optional, for additional optimizations)

// - **Check File Permissions**:  
//   Ensure the files are accessible (e.g., not read-only or in a restricted directory).

// ---

// ### **2. Verify the Process Name**
// The model runs as a local process. You can check the process name using:

// ```bash
// ps aux | grep node-llama-cpp
// ```
// Look for a line like:
// ```
// node-llama-cpp  12345  0.1  0.0  12345678  98765  /usr/bin/node /path/to/llama_cpp.js
// ```
// This confirms the model is running locally.

// ---

// ### **3. Check Environment Variables**
// The model relies on certain environment variables. Verify they are set:

// ```bash
// env | grep -i llama
// ```
// Look for:
// - `LLAMA_CUBLAS_WORKSPACE_SIZE` (for GPU optimization)
// - `LLAMA_CUBLAS_DEVICE` (for GPU selection)

// ---

// ### **4. Confirm No Cloud Dependencies**
// - **No Internet Access**: The model is self-contained and does not require internet.
// - **No Cloud Storage**: The model files are stored locally, not in the cloud.

// ---

// ### **5. Test the Model Locally**
// Run a simple test to confirm the model is active:

// ```bash
// node -v  # Check Node.js version (should be installed)
// llama_cpp --version  # Check the model version
// ```

// ---

// ### **6. Check the Model’s Working Directory**
// Ensure the model is loaded from the correct local path. For example:

// ```bash
// ls /qwen3-1.7b/
// ```
// If the directory exists and contains the model files, the model is running locally.

// ---

// ### **If You’re Still Concerned**
// You can also check the model’s **output** by running a simple inference task (e.g., generating a short text). If the model returns a response, it’s running locally.

// ---

// Let me know if you’d like to see how to verify the files or the process! 😊
