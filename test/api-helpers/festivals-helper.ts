
import request from "supertest";
import { RequestParams } from "test/utils/request-utils";
import { eaURL } from "test/constants/baseUrl";
import { EAUrls } from "test/constants/apiUrls";
import { APIHeaders } from "test/utils/apiheaders";
import { RequestUtils } from "test/utils/request-utils";
import { festivalsSchema } from "test/responseSchema/festivals-schema";
import { ResponseSchemaValidator } from "test/utils/response-schema-validator";

export class FestivalsHelper {
  apiheaders = new APIHeaders();
  requestUtils = new RequestUtils();
  responseSchemaValidator = new ResponseSchemaValidator();

  public getFestivalResponse() {
    const requestParams: RequestParams = {
      baseUrl: eaURL,
      apiUrl: EAUrls.festivals,
      headers: this.apiheaders,
    };
    return this.requestUtils.get(requestParams);
  }

  public postFestivalResponse() {
    const requestParams: RequestParams = {
      baseUrl: eaURL,
      apiUrl: EAUrls.festivals,
      headers: this.apiheaders,
    };
    return this.requestUtils.post(requestParams);
  }

  public validateFestivalsResponse(response: request.Response) {

    if (response.body.length > 0) {
      expect(response.status).toBe(200)
      this.responseSchemaValidator.validateSchema(festivalsSchema, response.body);
    }
    else if (response.body.length == 0) expect(response.statusCode).toBe(200)
    else {
      expect(response.statusCode).toBe(429)
      expect(JSON.stringify(response)).toContain('Too many requests, throttling');
    }
  }
}
