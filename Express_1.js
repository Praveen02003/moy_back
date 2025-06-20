import express from 'express';
import mongoose from 'mongoose';
import { User } from './Express_2.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 7000;


app.use(express.json());
app.use(cors());

//const MONGO_URL = 'mongodb+srv://Praveen:Praveen19112003@foodcartcluster.cbsx3vp.mongodb.net/moy?retryWrites=true&w=majority&appName=foodcartcluster'; 

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('❌ MongoDB Connection Error:', err));

app.get('/', async(req, res) => {
  const data=await User.find()
  res.send(data)
  //console.log(data);
    
});
app.post('/userdata', async (req, res) => {
  const { name, city, location, nickname, amount } = req.body;

  const data = await User.create({
    name: name,
    city: city,
    location: location,
    nickname: nickname,
    amount: amount
  });

  //console.log(data); // Logs the inserted document
  res.json({ message: 'Data Added Successfully' });
});
app.post('/delete', async(req, res) => {
  const{_id}=req.body
  const deleteddata=await User.deleteOne({_id:_id})
  //console.log(deleteddata);
  res.json({message:'Deleted Successfully'})
    
});
app.post('/searchdata', async(req, res) => {
  const{name}=req.body
  const finddata=await User.find({name:name})
  //console.log(finddata);
  res.json({message:finddata})
    
});
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
