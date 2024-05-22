const taskSchema = require("../models/task");



exports.createTask = async (req, res) => {
	try {

		const { taskName, taskDesc, Deadline } = req.body;

		if (!taskName || !taskDesc || !Deadline) {
			return res.status(404)
				.json({
					success: false,
					message: "please provide all details"
				})
		}

		const response = await taskSchema.create({ taskName, taskDesc, Deadline });


		return res.status(200)
			.json({
				success: true,
				message: "Task is created succesfully ",
				data: response
			})

	}
	catch (error) {
		console.log(error)
		return res.status(500)
			.json({
				success: false,
				message: "Internal error occured"
			})
	}
}



exports.getAllTask = async (req, res) => {
	try {


		const response = await taskSchema.find({});

		return res.status(200)
			.json({
				success: true,
				message: "All tasks are retrieved ",
				data: response
			})


	}
	catch (error) {
		console.log(error)
		return res.status(500)
			.json({
				success: false,
				message: "Internal error occured"
			})
	}
}


exports.updateTask = async (req, res) => {
	try {

		const { taskId, taskName, taskDesc, Deadline } = req.body;

		if (!taskId) {
			return res.status(404)
				.json({
					success: false,
					message: "Please provide an ID"
				})
		}

		if (!taskName || !taskDesc || !Deadline) {
			return res.status(404)
				.json({
					success: false,
					message: "Please provide all details"
				})

		}

		const response = await taskSchema.findByIdAndUpdate({ _id: taskId }, { taskDesc, taskName, Deadline }, { new: true })
		return res.status(200)
			.json({
				success: true,
				message: "Task is updated succesfully",
				data: response
			})

	}
	catch (error) {
		console.log(error)
		return res.status(500)
			.json({
				success: false,
				message: "Internal error occured"
			})
	}
}



exports.deleteTask = async (req, res) => {
	try {

		const { taskId } = req.body;


		if (!taskId) {
			return res.status(404)
				.json({
					success: false,
					message: "Please provide an ID"
				})
		}

		const response = await taskSchema.findByIdAndDelete({ _id: taskId })

		return res.status(200)
			.json({
				success: true,
				message: "Task is deleted succesfully",
				data: response
			})
	}
	catch (error) {
		console.log(error)
		return res.status(500)
			.json({
				success: false,
				message: "Internal error occured"
			})
	}
}