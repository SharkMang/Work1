class HeaderInput {
    constructor(header, handleCheckbox, handleAddTodo) {
        this.header = header;

        this.checkBoxAll = document.createElement('input');
	    this.checkBoxAll.type = 'checkbox';
        this.checkBoxAll.addEventListener('change', handleCheckbox);

        this.input = document.createElement('input');
        this.input.type = 'text';
        this.input.className = 'headerInput';
        this.input.placeholder = 'What needs to be done?';
        this.input.addEventListener('keydown', handleAddTodo);
        this.input.addEventListener("blur", (event) => {
            event.target.value = '';
            event.target.placeholder = 'What needs to be done?';
        });
    }

    render() {
        this.header.appendChild(this.checkBoxAll);
        this.header.appendChild(this.input);
    }

    // eventChangeStyleForAll(event) {
    //     let todos = this.todoList;

    //     for(let i = 0; i < todos.length; i++) {
    //         if(event.target.checked){
    //             todos[i].isChecked = true;
    //         } else {
    //             todos[i].isChecked = false;
    //         }
    //     }
        
	//     this.render();
    // }

    // eventAddTodo(event) {
    //     if(event.keyCode === 13 && event.target.value) {
            
    //         this.todoList.push({
    //             todoName: event.target.value,
    //             isChecked: false
    //         });

    //         event.target.value = '';    
    //         this.render();
    //     }
    // }
}