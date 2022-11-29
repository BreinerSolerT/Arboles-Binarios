class Node{
    constructor(dato){
        this.dato= dato;
        this.izquierdo = null;
        this.derecho = null;
    }
}
class arbol{
    constructor(){
        this.raiz = null;
    }
    insert(dato){
        var newNode = new Node(dato);
        if(this.raiz === null){
            this.raiz = newNode;
        }else{
            this.insertNode(this.raiz, newNode)
        }
    }
    
    insertNode(node, newNode){
        if(newNode.dato < node.dato){
            if(node.izquierdo === null){
                node.izquierdo = newNode;
            }else{
                this.insertNode(node.izquierdo, newNode)
            }
        }else{
            if(node.derecho === null){
                node.derecho = newNode;
            }else{
                this.insertNode(node.derecho,newNode)
            }
        }
    }
    remover(dato){
        this.raiz = this.removerNode(this.raiz, dato);
    }
    removerNode(node, key){
        if(node === null){
            return null;
        }else if(key < node.dato){
            node.izquierdo = this.removerNode(node.izquierdo, key);
            return node;
        }else if(key > node.dato){
            node.derecho = this.removerNode(node.derecho, key);
            return node;
        }else{
            //elimina a un nodo sin hijos, es decir, una hoja
            if(node.izquierdo ===null && node.derecho === null){
                node = null;
                return node;
            }
            //elimina a un nudo con un solo hijo
            if(node.izquierdo === null){
                node = node.derecho;
                return node;
            }else if(node.derecho === null){
                node = node.izquierdo;
                return node;
            }
            //borra el nodo con dos hijos
            var aux = this.nodomini(node.derecho);
            node.dato =aux.dato;

            node.derecho = this.removerNode(node.derecho, aux.dato)
            return node;
        }
    }

    In_Orden(node){
        if(node !== null){
            this.In_Orden(node.izquierdo);
            console.log(node.dato)+("-");
            this.In_Orden(node.derecho);
        }
    }

    Pre_Orden(node){
        if(node !== null){
            console.log(node.dato)+("-");
            this.Pre_Orden(node.izquierdo);
            this.Pre_Orden(node.derecho);
        }
    }

    Post_Orden(node){
        if(node!== null){
            this.Post_Orden(node.izquierdo);
            this.Post_Orden(node.derecho);
            console.log(node.dato);
        }
    }

    obRaizNode()
        {
            return this.raiz;
        }
}
var Arbol= new arbol();

Arbol.insert(27);
Arbol.insert(13);
Arbol.insert(42);
Arbol.insert(6);
Arbol.insert(17);
Arbol.insert(33);
Arbol.insert(48);

var raiz=Arbol.obRaizNode();

Arbol.In_Orden(raiz);
Arbol.Pre_Orden(raiz);
Arbol.Post_Orden(raiz);
Arbol.remover(17);



