import request from "supertest";
import { Logger } from "test/utils/logger";

export interface RequestParams {
  baseUrl: string;
  apiUrl: string;
  headers?: any;
  queryParameters?: any;
  body?: any;
}

export class RequestUtils {
  logger = new Logger();
  public async get(requestParams: RequestParams) {
    const { baseUrl, apiUrl, headers, queryParameters } = requestParams;
    const response = await request(baseUrl)
      .get(apiUrl)
      .set(headers)
      .query(queryParameters);
    this.logger.logData(requestParams, response, "apiLogs.txt");
    return response;
  }

  public async post(requestParams: RequestParams) {
    const { baseUrl, apiUrl, headers, body } = requestParams;
    const response = await request(baseUrl)
      .post(apiUrl)
      .set(headers)
      .send(body);
    this.logger.logData(requestParams, response, "apiLogs.txt");
    return response;
  }
}
