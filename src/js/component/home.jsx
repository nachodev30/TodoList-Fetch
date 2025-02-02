import React, { useContext, useState } from "react";
import { Context } from "../appContext";


const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const {store, actions} = useContext(Context);
	return (
		<div className="container form">
			<h1> TodosList </h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								actions.createTodo({label:inputValue});
								setInputValue("");
							}
						}}
						placeholder="Add a Task" className="pregunta"></input>
				</li>
				{store.listTodos.map((item, index) => (
					<li className="line" key={item.id}>
						<p className="item-name">{item.label}{""}</p>

						<button
							className="button"
							onClick={() =>
								actions.deleteTodo(item.id)

							}
						>Delete</button>
					</li>
				))}
			</ul>
			<div>{store.listTodos.length} task</div>
		</div>
	);
};

export default Home;