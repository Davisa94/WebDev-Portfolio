class TodoItem {
    constructor(body="", done=false) {
        this.body = body;
        this.done = done;
    }
    // Returns the list in its proper format
    display(){
        doneClass
        if(this.done){
            doneClass = "done"
        }
        else{
            doneClass ="incomplete"
        }
        listItem = 
        `<div class="listItem"><div class="checkbox row ${doneClass}"></div><p class="listItemBody row">${this.body}</p><div class="listItemDelete row"></div></div>`
        return listItem
    }
}

class TodoList {
    constructor(itemList=[new TodoItem()], ){
        this.itemList = itemList
    }
    display(){
        footer = 
    }
}

