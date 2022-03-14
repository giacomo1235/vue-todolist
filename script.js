const app = new Vue ({
    el:'#root',
    data:{
        newTodo: [],
        todos:[
            {text:'uscire cani',
             done: true
            },
            {text:'fare spesa',
             done: false
            },
            {text:'fare esercizio',
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
            this.todos.push({text: this.newTodo.trim(), done: false});
            this.newTodo= '';} 
        }
    }

});

// trim() pulisce spazi vuoti da stringa

 /* if (this.NewTodo.done) {
     
} */