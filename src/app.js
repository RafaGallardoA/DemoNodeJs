const express = require("express");
const bodyParser = require("body-parser");
const { readings } = require("./readings/readings");
const { readingsData } = require("./readings/readings.data");
const { read, store } = require("./readings/readings-controller");
const { recommend, compare } = require("./price-plans/price-plans-controller");

const { calculate, prueba } = require("./example/example")
const { calculateCostUsage } = require("./usage/usage")

const app = express();
app.use(bodyParser.json());

const { getReadings, setReadings } = readings(readingsData);

app.get("/readings/read/:smartMeterId", (req, res) => {
    res.send(read(getReadings, req));
});

app.post("/readings/store", (req, res) => {
    res.send(store(setReadings, req));
});

app.get("/price-plans/recommend/:smartMeterId", (req, res) => {
    res.send(recommend(getReadings, req));
});

app.get("/price-plans/compare-all/:smartMeterId", (req, res) => {
    res.send(compare(getReadings, req));
});

app.get("/test/test/:value", (req, res) => {
    res.send(calculate(req.params.value));
})

app.get("/usage/cost/meter/:smartMeterId/plan/:planId", (req, res) => {
    res.send(calculateCostUsage(req.params.smartMeterId, req.params.planId))
});

app.get("/prueba/:value", (req, res) => {
    res.send(prueba(req.params.value));
})

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`🚀 app listening on port ${port}`);
