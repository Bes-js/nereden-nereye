import axios from 'axios';
import express from 'express';
import cheerio from 'cheerio';
import moment from 'moment';
import 'moment-duration-format';
const app = express();
import ejs from 'ejs';
import path from 'path';
import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine("ejs", ejs.renderFile);
app.set("view engine", "ejs");
app.set("views", path.join("views"));

app.use("/public/", express.static(path.join("public")));

app.get('/ne-kadar-sikildin',async(_,res) => {
  res.render("index");
});

app.get("/", function(_, res) {
  res.render("index");
});

app.get("/api", async function(_, res) {
var date = Math.floor(Date.now() - new Date("2001-08-14").getTime());
try{
var x = await axios.get(`https://uzmanpara.milliyet.com.tr/dolar-kuru/`);
var $ = cheerio.load(`${x.data}`);
var obj = {yuzde:$(`#doviz_tbl_1 > tbody > tr:nth-child(2) > td.degisim.up`).text(),kur:$(`#doviz_tbl_1 > tbody > tr:nth-child(2) > td:nth-child(3)`).text()}
res.json({ message: `💡 Tarafından ${moment.duration(date).format("y [Yıl], d [Gün], h [Saat], m [Dakika], s [Saniye]")}'dir ${obj.kur} TL İle ${obj.yuzde} Oranında S*k*l*yorsun...` })
}catch(err){
 res.json({ message: err.message });   
}
});

app.listen(443,function(){
 console.log("Port Ready"); 
});