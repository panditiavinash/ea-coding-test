
import request from 'supertest';
import { FestivalsHelper } from 'test/api-helpers/festivals-helper';

describe('EA Coding Test', () => {
    const festivalsHelper = new FestivalsHelper();
    it('festivals - positive scenario', async () => {
        const response: request.Response = await festivalsHelper.getFestivalResponse(); // Triggers the transaction to the API and receives the response
        const res = JSON.stringify(response);
        festivalsHelper.validateFestivalsResponse(response); // validates the response schema
    })

    it('festivals - negative scenario', async () => {
        const response: request.Response = await festivalsHelper.postFestivalResponse(); // Triggers the transaction to the API and receives the response
        expect(response.statusCode).toBe(404)
        expect(JSON.stringify(response)).toContain('Not Found');
    })

})