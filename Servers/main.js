const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const OpenAI = require('openai');
const dotenv=require('dotenv')
const cors = require('cors'); // You missed this import
const { PDFLoader } = require("@langchain/community/document_loaders/fs/pdf");
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");
const readlineSync=require('readline-sync')
app.use(cors());

const upload = multer({ dest: 'uploads/' });
dotenv.config()
const client = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
});

app.post('/api/upload', upload.single('resume'), async (req, res) => {
  try {
    const filePath = req.file.path;
    console.log("Uploaded PDF path:", filePath);

    const loader = new PDFLoader(filePath);
    const data = await loader.load();

    const fullContent = data.map(doc => doc.pageContent).join("\n\n");

    //todo train the ans 

    
    //todo spliiter for later use 
    // const splitter = new RecursiveCharacterTextSplitter({
    //     chunkSize: 500,
    //     chunkOverlap: 100,
    //   });
    
    //   const chunks = await splitter.createDocuments([fullContent]);
    //   console.log(chunks);

    res.status(200).json({
      message: "File uploaded and loaded successfully!",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error occurred while processing PDF" });
  }
});

function TrainModel(){


}
function Schedule(){

    const systemPrompt="this is a resume train youself with it ill ask some ques for it  "+fullContent;
    console.log(systemPrompt)
    
    const messages = [{ role: "system", content: System_Prompt }]

}

app.get('/api/', (req, res) => res.send('External Server is Running'));

app.listen(port, () => console.log(` Server listening on port ${port}!`));
