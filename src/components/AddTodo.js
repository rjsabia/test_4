import React from 'react'

const AddTodo = ({addTodo}) => (

	<form onSubmit={ (event) => {
		event.preventDefault()
		
		const userInput = event.target.userInput.value

		addTodo(userInput)

		event.target.userInput.value = ''

	}}>
		<label>This is where you add your Todo's</label>
		<input type="text" name="userInput"/>
		<button>Add Todo!!!</button>
	</form>
)

export default AddTodo