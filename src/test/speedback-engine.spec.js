import {getRoundCombos, rotateNextRound} from "../main/speedback-engine";


describe('Speedback Engine', () => {

    it('should rotate around array leaving last position fixed', () => {
        const startArray = ['A','B','C','D','E','F'];
        const endArray = ['E','A','B','C','D','F'];

        expect(rotateNextRound(startArray)).toEqual(endArray);
    })

    it('should put correct pairs together', () => {
        const people = ['A','B','C','D','E','F'];

        const results = getRoundCombos(people);

        expect(results.length).toBe(3);
        expect(results[0]).toEqual({left: 'A', right: 'F'})
        expect(results[1]).toEqual({left: 'B', right: 'E'})
        expect(results[2]).toEqual({left: 'C', right: 'D'})
    })
})