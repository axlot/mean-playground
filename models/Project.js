var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
    name: String,
    client: String,
    estimation: Number,
    staff: {},
    start_date: { type: Date },
    end_date: { type: Date },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', ProjectSchema);