let stall1 = {
    stallName: "Sam's Western Food",
    stallCuisine: "Western",
    stallStatus: "Closed"
}

let stall2 = {
    stallName: "Crazy Noodles",
    stallCuisine: "Local",
    stallStatus: "Open"
}

let stall3 = {
    stallName: "Emily's Chicken Rice",
    stallCuisine: "Local",
    stallStatus: "Open"
}

// each stall in their respective position represents the stall queue (0 for stall1, 3 for stall2, etc.)
let stalls = [stall1, stall2, stall3];
let stallqueue = [0, 3, 1];

module.exports = {

    addStall(stallName, stallCuisine) {
        for (let i = 0; i < stalls.length; i++) {
            if (stalls[i].stallName == stallName) {
                return "There is already a stall with this name."
            }
        }
        stalls.push({ stallName: stallName, stallCuisine: stallCuisine, stallStatus: "Closed"});
        stallqueue.push(0);
        return "New stall added.";
    },

    getAllStalls() {
        return stalls
    },

    getOneStall(stallName) {
        for (let i = 0; i < stalls.length; i++) {
            if (stalls[i].stallName == stallName) {
                return stalls[i];
            }
        }
        return "No stall found."
    },

    updateStallName(stallName, newStallName) {
        for (let i = 0; i < stalls.length; i++) {
            if (stalls[i].stallName == stallName) {
                stalls[i].stallName = newStallName;
                return "Stall name changed."
                }
        }
        return "No stall with that name can be found."
    },

    updateStallCuisine(stallName, newStallCuisine) {
        for (let i = 0; i < stalls.length; i++) {
            if (stalls[i].stallName == stallName) {
                stalls[i].stallCuisine = newStallCuisine;
                return "Stall cuisine changed."
                }
        }
        return "No stall with that name can be found."
    },

    updateStallStatus(stallName) {
        for (let i = 0; i < stalls.length; i++) {
            if (stalls[i].stallName == stallName) {
                if (stalls[i].stallStatus == "Open") {
                    if (stallqueue[i] > 0) {
                        return "Unable to close store as customers are still queueing."
                    }
                    else {
                        stalls[i].stallStatus = "Closed";
                        return "Stall closed."
                    }
                }
                else {
                    stalls[i].stallStatus = "Open";
                    return "Stall opened."
                }
            }
        }
        return "No stall with that name can be found."
    },

    removeStall(stallName) {
        for (let i = 0; i < stalls.length; i++) {
            if (stalls[i].stallName == stallName) {
                stalls.splice(i, 1);
                stallqueue.splice(i, 1);
                return "Stall removed.";
            }
        }
        return "No stall with that name can be found.";
    },

    getAllStallQueue() {
        let result = [];
        for (let i = 0; i < stalls.length; i++) {
            result.push({
                stallName: stalls[i].stallName,
                stallCuisine: stalls[i].stallCuisine,
                stallStatus: stalls[i].stallStatus,
                queueLength: stallqueue[i]
            });
        }
        return result;
    },

    getOneStallQueue(stallName) {
        for (let i = 0; i < stalls.length; i++) {
            if (stalls[i].stallName == stallName) {
                return stallqueue[i];
            }
        }
        return "No stall with that name exists.";
    },

    updateStallQueue(stallName, newQueueNum) {
        if (!Number.isInteger(newQueueNum) || newQueueNum < 0) {
            return "Queue number must be a non-negative number.";
        }
        for (let i = 0; i < stalls.length; i++) {
            if (stalls[i].stallName == stallName) {
                if (stalls[i].stallStatus == "Closed") {
                    return "Stall is closed. Open the stall to update the queue."
                } else {
                    stallqueue[i] = newQueueNum;
                    return "Stall queue updated.";
                }
            }
        }
        return "No stall with that name can be found.";
    },
}