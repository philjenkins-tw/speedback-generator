import {getRoundCombos, rotateNextRound} from "../main/speedback-engine";


describe('Speedback Journey', () => {

    const meetingMap = new Map();

    it('should run through a whole session with no duplicate meetings', () => {
        let users = ['A', 'B', 'C', 'D', 'E', 'F'];

        for(let user of users) {
            meetingMap.set(user, []);
        }

        for(let i=0; i < users.length -1; i++) {
            const results = getRoundCombos(users)
            for (let pair of results) {
                meetingMap.set(pair.left, meetingMap.get(pair.left).concat(pair.right))
                meetingMap.set(pair.right, meetingMap.get(pair.right).concat(pair.left))
            }
            users = rotateNextRound(users)
        }

        for(let [user, meetings] of meetingMap) {
            expect(meetings.length).toBe(users.length - 1)
            expect(meetings.some(m => m === user)).toBe(false)
            expect(isArrayUnique(meetings)).toBe(true)
        }
    })
})

const isArrayUnique = arr => Array.isArray(arr) && new Set(arr).size === arr.length;