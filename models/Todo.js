var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    name: String,
    user_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date:{ type: Date, default: Date.now()},
    status: String
});
 module.exports = mongoose.model('Todo', todoSchema);
