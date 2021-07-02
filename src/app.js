class App {
  	constructor(selector) {
      	this.container = document.getElementById(selector);
		this.todoList = [
            {
                todoName: 'first',
                isChecked: false
            },
            {
                todoName: 'second',
                isChecked: false
            },
        ];
		
  	}

	render() {
		new HeaderInput(this.header, this.eventChangeStyleForAll, this.eventAddTodo.bind(this)).render();
		new TodoList(this.container).render(this.todoList, this.eventChangeStyle, this.eventChangeTodo, this.eventRemove);
	}

	eventChangeStyleForAll(event) {
        let todos = this.todoList;

        for(let i = 0; i < todos.length; i++) {
            if(event.target.checked){
                todos[i].isChecked = true;
            } else {
                todos[i].isChecked = false;
            }
        }
        
	    this.render();
    }

	eventRemove(event) {
        let elem = event.target.parentNode;
        let index = parseInt(elem.getAttribute('data-index'));
        this.todoList.splice(index, 1);

        this.render();
    }

	eventChangeTodo(event) {
        let elem = event.target;
	
        elem.innerHTML = "";
        let input1 = document.createElement("INPUT");
        input1.type = "text";

        input1.addEventListener("keydown", this.eventNewTodo.bind(this));
        input1.addEventListener("blur", this.eventBlurTodo.bind(this));

        elem.appendChild(input1);
        input1.focus();
    }

	eventNewTodo(event) {
        let self = this;

        if(event.keyCode === 13 && event.target.value) {
    
            let todo = event.target.value;
    
            let div = event.target.closest('div');
            let index = parseInt(div.getAttribute('data-index'));
    
            self.todoList[index].todoName = todo;
    
            self.render();
        }
    }

	eventBlurTodo(event) {
        let div = event.target.closest('div');
        let label = event.target.closest('label');
        let index = div.getAttribute('data-index');
        
        label.innerHTML = this.todoList[index].todoName;
    }

    eventAddTodo(event) {
		// console.log(this.todoList);

        if(event.keyCode === 13 && event.target.value) {
            
            this.todoList.push({
                todoName: event.target.value,
                isChecked: false
            });

            event.target.value = '';  
			
			
            TodoList(this.container).render(this.todoList, this.eventChangeStyle, this.eventChangeTodo, this.eventRemove);
        }
    }

	eventChangeStyle(event) {
        const indexOfElem = event.target.parentElement.getAttribute('data-index');
        let todo = this.todoList[indexOfElem];
        
        todo.isChecked = !todo.isChecked;
        this.render();
    }

	init() {
		this.container.classList.add('container');

		this.header = document.createElement('header');
		this.header.classList.add('header');
		this.container.appendChild(this.header);

		const h1 = document.createElement('h1');
		h1.innerHTML = 'Todos';
		h1.classList.add('h1');
		this.header.appendChild(h1);

		this.render();
	}
}

window.onload = function() {
	(new App('root')).init();
}