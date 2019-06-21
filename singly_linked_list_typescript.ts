console.log(`

##################################################################
#                                                                #
#             Hello World, the execution START now !!            #
#                                      -Subha Mathema            #
#                                                                #
##################################################################

`);

console.log(`Linked List using typescript. 
Linked List should have methods of pop, push, shift, count, and delete
`);

class myNode{
    public _data: string;
    public _next: myNode;    
}



class myLinkedList extends myNode {
    private _linkedlist: Array<myNode>;         // array of nodes
    private _head: myNode;                      // head node

    constructor (){             
        super();
        let head_node = new myNode();       
        head_node._data = "head"                //initialize the head node
        head_node._next = null
        this._head = head_node;

        this._linkedlist = [this._head];        // insert into the linked list
    }

    get linkedlist() : Array<myNode>{           // getter for the _linkedlist
        return this._linkedlist;
    }

    public push(item: any): void {              
        let node = new myNode();
        node._data = String(item);              // initialize the node to be added with the value sent
        node._next = null;                      // since node has to be inserted at the end of the linked list
        this._linkedlist[this._linkedlist.length-1]._next = node;           // point the next to the node being pushed
        this._linkedlist.push(node);                                        // push the node into the array
        console.log(`${item} pushed into the linked list`);
    }

    public pop(): any {
        // pop operation on the linked list
        this._linkedlist[this._linkedlist.length-2]._next = null;               // point the node before the poped node to null
        let item:any = this._linkedlist[this._linkedlist.length-1]._data;       // the value to be returned of the popped node
        this._linkedlist.pop();                                                 // pop the node from the array
        console.log(`${item} poped from the linked list`);
        return item;
    }

    public shift(): void {  
        // moves the last node to the position after the head node
        let last_node:myNode = this._linkedlist.pop();                  // node being shifted (i.e. the last node)
        this._head._next = last_node;                                   // point the head node to the node being shifted
        last_node._next = this._linkedlist[1];                          // pointing the shifted node to it next node
        this._linkedlist.splice(1,0,last_node);
        this._linkedlist[this._linkedlist.length-1]._next = null;       // set the new last node to point to null
        console.log(`linked list has been shifted`);
    }

    public delete(item: any): void {
        let deletedFlag: boolean = false;
        for (let index:number = 0; index < this._linkedlist.length; index++) {
            if (this._linkedlist[index]._data == item && index != 0 ) {   // the item is found and is not the head node
                if (index == this._linkedlist.length-1)                 // last node being deleted
                this._linkedlist[index-1]._next = null;
                else                                        // node besides last node and not head node
                    this._linkedlist[index-1]._next = this._linkedlist[index+1];         
                this._linkedlist.splice(index,1);           // delete the node
                deletedFlag = true;                     // indicates successful deletion
                console.log(`${item} has been deleted from the linked list`);
            }                
        }
        if (!deletedFlag)
            console.log("not available..not possible..");
    }

    public count(): number {
        return this._linkedlist.length-1;       // head is not count as node
    }


}

let someLinkedList = new myLinkedList();

someLinkedList.push("hello");
console.log(someLinkedList.linkedlist);
console.log();

someLinkedList.push("world");
console.log(someLinkedList.linkedlist);
console.log();

someLinkedList.push("TypeScript");
console.log(someLinkedList.linkedlist);
console.log();

someLinkedList.push("OkGoogle");
console.log(someLinkedList.linkedlist);
console.log();

someLinkedList.pop();
console.log(someLinkedList.linkedlist);
console.log();

someLinkedList.shift();
console.log(someLinkedList.linkedlist);
console.log();

someLinkedList.delete("hello");
console.log(someLinkedList.linkedlist);
console.log();

console.log("The current length of linked list is: " + someLinkedList.count());

console.log(`

##################################################################
#                                                                #
#             Hello World, the execution STOP now !!             #
#                                                                #
##################################################################

`);