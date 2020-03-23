const mongoose = require('mongoose');
const { Schema } = mongoose;

class BasicSchema extends Schema {
  constructor(fields) {
    const newFields = {
      ...fields,
      modifiedAt: Date,
      modifiedBy: String,
      deleted: Boolean,
    };
    super(newFields);
  }
}

module.exports = BasicSchema;
