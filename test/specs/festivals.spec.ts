
import request from 'supertest';
import { FestivalsHelper } from 'test/api-helpers/festivals-helper';

describe('EA Coding Test', () => {
    const festivalsHelper = new FestivalsHelper();
    it('festivals - positive scenario', async () => {
        const response: request.Response = await festivalsHelper.getFestivalResponse();
        const res = JSON.stringify(response);
        festivalsHelper.validateFestivalsResponse(response);
    })

    it('festivals - negative scenario', async () => {
        const response: request.Response = await festivalsHelper.postFestivalResponse();
        expect(response.statusCode).toBe(404)
        expect(JSON.stringify(response)).toContain('Not Found');
    })

})