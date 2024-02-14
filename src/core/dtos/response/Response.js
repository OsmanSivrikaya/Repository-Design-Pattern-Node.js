module.exports = class Response {
  constructor(success, message, payload) {
    this.success = success;
    this.message = message;
    this.payload = payload;
  }
};
