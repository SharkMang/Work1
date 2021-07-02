class TodoList {
    constructor(container) {
        this.container = container;
       

        this.section = document.createElement('section');
	    this.section.className = 'section';
	    this.container.appendChild(this.section);

	    this.ul = document.createElement('ul');
	    this.ul.classList.add('ulStyle');
	    this.section.appendChild(this.ul);
    }

    render(todoList, handleDelTodo, handleNewTodo, handleChackbox) {
        
        this.ul.innerHTML = '';
    
        for(let i = 0; i < todoList.length; i++) {
            let li = document.createElement('li');
            li.classList.add("listItem");
            let div = document.createElement('div');
            div.setAttribute('data-index', i);
            
            div.classList.add('box');

            let checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.checked = todoList[i].isChecked;
            checkBox.addEventListener('change', handleChackbox);
            
            let label = document.createElement('label');
            if(todoList[i].isChecked) {
                label.classList.add('label-item-marced');
            } else {
                label.classList.add('label-item-notmarced');
            }
            label.innerHTML = todoList[i].todoName;
            label.classList.add('label-item');
            label.addEventListener('dblclick', handleNewTodo);

            let buttonDel = document.createElement('button');
            buttonDel.innerHTML = 'X';
            buttonDel.className = 'buttonDel';
            buttonDel.addEventListener('click', handleDelTodo);

            div.appendChild(checkBox);
            div.appendChild(label);
            div.appendChild(buttonDel);
            li.appendChild(div);

            this.ul.appendChild(li);
        }
        this.section.appendChild(this.ul);
    }
}