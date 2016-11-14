export class Init {

	load() {
		var todos = localStorage.getItem('todos');
		if (todos === null || todos == 'undefined') {
			console.log('No Todos Found...Creating....');
			var newTodos = [
				{
					text: 'Pickup kids at school'
				}, {
					text: 'Meeting with boss'
				}, {
					text: 'Dinner with wife'
				}
			];
			localStorage.setItem('todos', JSON.stringify(newTodos));
			return
		} else {
			console.log('Found Todos...');
		}
	}
}
