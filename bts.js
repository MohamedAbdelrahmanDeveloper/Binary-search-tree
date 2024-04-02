
class Node {
    constructor (value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BTS {
    constructor() {
        this.root = null
        this.count = 0
    }

    size() {
        return this.count
    }

    insert(value) {
        let newNode = new Node(value)
        this.count++
        if (!this.root) {
            this.root = newNode
        } else {
            let currentNode = this.root;
            while (true) {
                if (newNode.value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }

    min() {
        let currentNode = this.root;
        while (currentNode.left) {
            currentNode = currentNode.left
        }
        return currentNode.value
    }

    max() {
        let currentNode = this.root;
        while (currentNode.right) {
            currentNode = currentNode.right
        }
        return currentNode.value
    }

    search(value) {
        if (!this.root) return false

        let current = this.root
        let found = false
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value){
                current = current.right
            } else {
                found = current
            }
        }

        if (!found) return undefined
        return found
    }
}

export default BTS
