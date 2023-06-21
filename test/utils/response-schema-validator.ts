import Ajv from "ajv";

export class ResponseSchemaValidator {
  public validateSchema(schema: any, response: any) {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const valid = validate(response);
    if (!valid) console.log(validate.errors);
    expect(valid).toBeTruthy();
  }
}
