const todoList = {
    tasks: [],

    addTask(task) {

        //^ if task exists and has a value
        if (task && task.trim() !== '') {
            this.tasks.push(task.trim());

            console.log(`Task added: "${task}"`);
            return true;
        }
        console.log('Please enter a valid task!');
        return false;
    },

    //? task [working Out At gym, studying Algorithms]
    removeTask(task) {
        const index = this.tasks.indexOf(task); //& Edge case (0)

        //? is it found?
        if (index > -1) {
            this.tasks.splice(index, 1); //! deep copy
            console.log(`Task removed: "${task}"`);
            return true;
        }
        console.log(`Task not found: "${task}"`);
        return false;
    },

    listTasks() {
        console.log("Todo List:");
        
        if (this.tasks.length === 0) {
            console.log("Empty Task");
        }
        else {
            this.tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }
    }
};

//^ Function Calls
todoList.addTask('Working Out at gym');
todoList.addTask('Studying Algorithms');
todoList.listTasks(); //! before removal

todoList.removeTask('Working Out at gym');
todoList.listTasks(); //! after Removal
