console.log("Hello world!");
const express = require("express");
var cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// GET방식 #1. params를 이용한 방법
app.get("/user1/:id", (req, res) => {
  // 주소창에 입력한 'id' 값이 req로 들어옴.
  // http://localhost:3000/user/Jocoding
  const q = req.params;
  console.log(q);
  console.log(q.id);

  res.json({ userid: q.id });
});

// GET방식 #2. query를 이용한 방법
app.get("/user2/:id", (req, res) => {
  // 주소창에 입력한 'id' 값이 req로 들어옴.
  // http://localhost:3000/user/Jocoding?name=jo&age=20
  const q = req.query;
  console.log(q);
  console.log(q.name);
  console.log(q.age);

  res.json({ userid: q.name });
});

// 응용) name변수에 따라 다른 값 출력.
app.get("/sound/:name", (req, res) => {
  const { name } = req.params;
  // http://localhost:3000/sound/dog
  if (name == "dog") {
    res.json({ sound: "멍멍" });
    console.log("멍멍");
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
    console.log("야옹");
  } else if (name == "pig") {
    res.json({ sound: "꿀꿀" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
