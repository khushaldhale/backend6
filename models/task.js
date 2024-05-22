const mongoose = require("mongoose");



const taskSchema = new mongoose.Schema(
	{
		taskName: {
			type: String,
			required: true
		},
		taskDesc: {
			type: String,
			required: true
		},
		Deadline: {
			type: Date,
			required: true
		}
	}
)

module.exports = mongoose.model("TASK", taskSchema)