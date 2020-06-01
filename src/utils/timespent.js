const moment = require('moment');

class Timespent {
  constructor(title) {
    this.title = title;
  }

  start() {
    this.startts = moment();
  }

  end() {
    this.endts = moment();
  }

  getDiff() {
    return this.endts.diff(this.startts);
  }

  getDiffString(log, data) {
    try {
      const duration = this.getDiff();
      log(`[${data}] timespent ${this.title}: ${duration}ms`);
    } catch (err) {
      return;
    }
  }
}

module.exports = Timespent;
