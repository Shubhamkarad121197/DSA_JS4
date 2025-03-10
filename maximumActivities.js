

// Given a list of activities with start and end times, find the maximum number of activities that can be performed by a single person, assuming that a person can only work on a single activity at a time.

function maxActivities(activities) {
    activities.sort((a, b) => a[1] - b[1]);
    let count = 1, end = activities[0][1];
    for (let i = 1; i < activities.length; i++) {
        if (activities[i][0] >= end) {
            count++;
            end = activities[i][1];
        }
    }
    return count;
}

console.log(maxActivities([[1, 3], [2, 5], [3, 9], [6, 8]])); //2

// Expected: 2
// Explanation: The maximum number of activities that can be performed by a single person is 2. The activities [1, 3] and [6, 8] can be performed by a single person.
// Time Complexity: O(nlogn) where n is the number of activities
// Space Complexity: O(1) as we are using constant space
