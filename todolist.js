const todoList = {
    items: [
        {
            text: 'Завершить текущий челлендж',
            completed: false,
        },
        {
            text: 'Отдохнуть во время перерыва',
            completed: false,
        },
        {
            text: 'Помочь напарнику понять код',
            completed: false,
        },
        {
            text: 'Выиграть в мафию',
            completed: true,
        },
    ],

    printAll: function () {
        for (let i = 0; i < todoList.items.length; i++) {
            todoList.print(i)
        }
    },

    add: function (text) {
        const oneMoreText = {
            text: text,
            completed: false
        }
        this.items.unshift(oneMoreText)
    },

    remove: function (index) {
        todoList.items.splice(index, 1)
    },

    print: function (index) {
        if (todoList.items[index].completed === false) {
            console.log(`[]${todoList.items[index].text}`)
        } else {
            console.log(`[x]${todoList.items[index].text}`)
        }
    },

    complete: function (index) {
        todoList.items[index].completed = true
    },
};

todoList.complete(0)
todoList.printAll()
