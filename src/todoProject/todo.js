class TodoItem {
    constructor(body="", done=false) {
        this.body = body;
        this.done = done;
    }
    // Returns the list in its proper format
    display(){
        doneClass = ""
        //add a class for the body based on if it is completed
        bodyClass = ""
        if(this.done){
            doneClass = "done"
            bodyClass = "done"
        }
        else{
            doneClass ="incomplete"
        }
        listItem = 
        `<div class="listItem"><div class="checkbox row ${doneClass}"></div><p class="listItemBody row ${bodyClass}">${this.body}</p><div class="listItemDelete row"></div></div>`
        return listItem
    }
}

class TodoList {
    constructor(itemList=[new TodoItem()], ){
        this.itemList = itemList
    }
    display(){
        footer = '<div class="listItem"><div class="checkbox row"></div><p class="listItemBody row"></p><div class="listItemDelete row"></div></div>'
        rawHTML = ""
        for (item in this.itemList){
            rawHTML += item.display()
        }
        return rawHTML + footer
    }
}

function generateListeners(){
    document.set
}

// Get the new item from the DOM
function getNewItem(){

}

// add the item to the main list
function addListItem(itemContent){

}

function main(){
    todoList = new TodoList()

}