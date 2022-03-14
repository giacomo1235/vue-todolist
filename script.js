const app = new Vue ({
    el:'#root',
    data:{
        newTodo: [],
        todos:[
            {todo:'uscire cani',
             done: false
            },
            {todo:'fare spesa',
             done: false
            },
            {todo:'fare esercizio',
             done: false
            },
        ]
    },
    methods: {
        deleteTodo(index) {
            this.todos.splice(index, 1 ); 
        },
        addTodo() {
            if (this.newTodo.trim() != ''){
            this.todos.push({todo: this.newTodo.trim(), done: false} );
            this.newTodo= '';}
        }
    }

});

// trim() pulisce spazi vuoti da stringa

// 