# Assignment 1 - Food Queue and Information Tracker

## Project Description

This node module is used to simulate a canteen and the various stalls, allowing the user to check the queue for a stalls, update data and more, with mock data included.

## Functions

1. addStall(stallName, stallCuisine) - Adds a new stall with a name, cuisine and set to be closed.
2. getAllStalls() - Displays a list of all the stalls in the canteen.
3. getOneStall(stallName) - Searches through and finds the stall that matches the name entered in.
4. updateStallName(stallName, newStallName) - Updates the stall name of an existing stall in the canteen.
5. updateStallCuisine(stallName, newStallCuisine) - Updates the stall cuisine of an existing stall in the canteen.
6. updateStallStatus(stallName) - Updates the stall status of an existing stall in the canteen, opening a closed stall and closing an opened stall only if it has no one left in queue.
7. removeStall(StallName) - Removes an existing stall in the canteen.
8. getAllStallQueue() - Gets the queue number of all the stalls in the canteen.
9. getOneStallQueue() - Searches through and finds the stall that matches the name entered in, getting the queue number for that stall.
10. updateStallQueue(stallName, newQueueNum) - Updates the stall queue and changes the number

## References
[NYP North Canteen - Food Ordering System](https://smartfoodp.com/smartSG-bs/scanCodeOrder/boothList.htm?sgId=127)