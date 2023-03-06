const Express = require("express");
const bp = require("body-parser");
const app = Express();

app.use(Express.static(process.cwd() + "/public/"));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.post("/data", (req, res) => {
    console.log(req.body);
    res.redirect("/about-me");
});

var count = 0;

app.get("/", (req, res) => res.sendFile(process.cwd() + "/public/index.html"));
app.get("/trol", (req, res) => {
    res.send(`<html>
    <head>
        <meta http-equiv="refresh" content="0; URL=/trol" />
        <title>${count}</title>
    </head>
    <img style="width: 100%; height:500px" src="${count % 2 == 0 ? "/img/ad.png" : "/img/me.jpg"}" alt="hacked"/>
</html>
`);
    count++;
});
app.get("/interests", (req, res) => res.sendFile(process.cwd() + "/public/interests.html"));
app.get("/school", (req, res) => res.sendFile(process.cwd() + "/public/skola.html"));
app.get("/about-me", (req, res) => res.sendFile(process.cwd() + "/public/aboutme.html"));

app.listen(8080, () => console.log("Serving at: " + "http://localhost:8080/"));
