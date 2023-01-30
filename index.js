//express 서버만들기
const express = require("express");
const cors = require("cors");

//서버생성
const app = express();
//포트번호 지정
const port = 3005;
//json형식 데이터를 처리하도록 설정
app.use(express.json());
//cors이슈를 막기위해 사용
app.use(cors());

const posts = [
    {
        id: 1,
        title: "리덕스를 배워봅시다.",
        desc: "리덕스에 대해서 배워봅시다."
    },
    {
        id: 2,
        title: "리덕스 미들웨어를 배워봅시다.",
        desc: "리덕스 미들웨어에 대해서 배워봅시다."
    },
    {
        id: 3,
        title: "redux-thunk를 배워봅시다.",
        desc: "redux-thunk에 대해서 배워봅시다."
    },
]
//get요청
app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.get("/posts/:id",(req, res)=>{
    const {id} =req.params;
    res.send(posts.find(po=>po.id == Number(id))) //find 원하는거 하나 찾아줌  // post id 값과 선택한 값이 일치하면 보내줌
})

app.listen(port, ()=>{
    console.log('서버가 돌고있습니다.')
})

//어떤 요청이 오더라도 응답해주는게 서버