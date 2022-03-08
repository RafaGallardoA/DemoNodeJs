const { readings } = require("../readings/readings");
const { readingsData } = require("../readings/readings.data")
const { getReadings } = readings(readingsData);

const average = (readings) => {
    return (
        readings.reduce((prev, next) => prev + next.reading, 0) /
        readings.length
    );
};

const timeElapsedInHours = (readings) => {
    readings.sort((a, b) => a.time - b.time);
    const seconds = readings[readings.length - 1].time - readings[0].time;
    const hours = Math.floor(seconds / 3600);
    return hours;
};

const usage = (readings) => {
    return average(readings) / timeElapsedInHours(readings);
};

const usageCost = (readings, rate) => {
    return usage(readings) * rate;
};

const usageForAllPricePlans = (pricePlans, readings) => {
    return Object.entries(pricePlans).map(([key, value]) => {
        return {
            [key]: usageCost(readings, value.rate),
        };
    });
};

const calculateCostUsage = (meterId, planId) => {
    const readingsMeter = getReadings(meterId)
    let totalReading = 0
    readingsMeter.map(reading => {
        totalReading += reading.reading
    })
    const avgReading = totalReading/readingsMeter.length

    readingsMeter.sort(function(a, b) {
        if (a.time < b.time) return -1;
        if (a.time > b.time) return 1;
        return 0;
    })
    let totalTime = Math.abs(readingsMeter[readingsMeter.length-1].time-readingsMeter[0].time)
    totalTime = totalTime/3600

}

module.exports = {
    average,
    timeElapsedInHours,
    usage,
    usageCost,
    usageForAllPricePlans,
    calculateCostUsage
};
