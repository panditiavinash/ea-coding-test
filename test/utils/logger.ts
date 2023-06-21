import { appendFile } from "fs";
import request from "supertest";
import { RequestParams } from "./request-utils";
import { expect } from "@jest/globals";

export class Logger {
  public logData(request: RequestParams, response: request.Response, fileName) {
    appendFile(
      fileName,
      `\n------------------------Starting Test Execution: ${
        expect.getState().currentTestName
      }--------------------------------------`,
      (err) => {
        if (err) console.log(err);
      }
    );
    
    appendFile(fileName, `\n Request: ${JSON.stringify(request)} \nRequest Method: ${JSON.parse(JSON.stringify(response)).req.method}`, (err) => {
      if (err) console.log(err);
    });

    appendFile(
      fileName,
      `\n Response: ${JSON.stringify(response.body)}`,
      (err) => {
        if (err) console.log(err);
      }
    );

    appendFile(
      fileName,
      `\n------------------------Ending Test Execution--------------------------------------`,
      (err) => {
        if (err) console.log(err);
      }
    );
  }
}
