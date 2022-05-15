import dotenv from 'dotenv'
import express from 'express'
import db from './app/models/index.js'
import trip from "./app/routes/trip.js"
import applyDotenv from './dotenv/applyDotenv.js'


async function startServer() {
  const app = express();
  app.use(express.static('public'));
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());
  const {mongoUri, port } = applyDotenv(dotenv)
  app.use("/trip", trip);
  db
        .mongoose
        .connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log(' ### 몽고DB 연결 성공 ### ')
        })
        .catch(err => {
            console.log(' 몽고DB와 연결 실패', err)
            process.exit();
        });
        app.all("*", function (_req, res) {
          return getResponse.notFoundResponse(res, "페이지를 찾을 수 없습니다");
      });
  
    app.listen(port, () => {
        console.log('***************** ***************** *****************')
        console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
        console.log('***************** ***************** *****************')
    })
}
startServer()