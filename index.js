import axios from 'axios';
import express from 'express';
import cheerio from 'cheerio';
import moment from 'moment';
import 'moment-duration-format';
const app = express();
import ejs from 'ejs';
import path from 'path';
import bodyParser from "body-parser";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.engine("ejs", ejs.renderFile);
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));
  app.use("/public/", express.static(path.join(__dirname, "public")));

["/", "/ne-kadar-sikildin"].forEach(function(route) {
app.get(route, function(_, res) {
  res.render("index");
});
});

app.get("/api", async function(_, res) {
const date = Math.floor(Date.now() - new Date("2001-08-14").getTime());
try {
const res2 = await axios.get(`https://uzmanpara.milliyet.com.tr/dolar-kuru/`);
const $ = cheerio.load(`${res2.data}`);
const data = { yuzde: $(`#doviz_tbl_1 > tbody > tr:nth-child(2) > td.degisim.up`).text(), kur: $(`#doviz_tbl_1 > tbody > tr:nth-child(2) > td:nth-child(3)`).text() };
  res.json({ message: `${moment.duration(date).format("y [Yıl], d [Gün], h [Saat], m [Dakika], s [Saniye]")}'dir ${data.kur} TL İle ${data.yuzde} Oranında S*k*l*yorsun...` })
} catch(err) {
 res.json({ message: err.stack });   
}
});

app.listen(443, function() {
 console.log("Port Ready"); 
});
