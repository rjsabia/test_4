import React from 'react'

const List = ({deleteTodo, todos}) => (

	<ul>
		
		{todos.map((todos, index) => (

			<li key={index}>
				{todos.id} -=-=-=-=- {todos.text}

				<button onClick={ () => deleteTodo(todos.id)}>Delete Todo</button>
			</li>
		))}

	</ul>

)

export default List