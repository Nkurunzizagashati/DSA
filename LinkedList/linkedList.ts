class ListNode<T> {
	value: T;
	next: ListNode<T> | null = null;

	constructor(value: T) {
		this.value = value;
	}
}

class LinkedList<T> {
	head: ListNode<T> | null = null;

	// Add a new element to the list
	add(value: T): void {
		const newNode = new ListNode(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
	}

	// Remove an element from the list
	remove(value: T): boolean {
		if (!this.head) return false;

		if (this.head.value === value) {
			this.head = this.head.next;
			return true;
		}

		let current = this.head;
		while (current.next && current.next.value !== value) {
			current = current.next;
		}

		if (current.next) {
			current.next = current.next.next;
			return true;
		}

		return false;
	}

	// Find an element in the list
	find(value: T): ListNode<T> | null {
		let current = this.head;
		while (current) {
			if (current.value === value) {
				return current;
			}
			current = current.next;
		}
		return null;
	}

	// Display the elements in the list
	display(): void {
		let current = this.head;
		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}
}

const linkedList = new LinkedList<number>();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.display();
linkedList.remove(2);
linkedList.display();
console.log(linkedList.find(3));
console.log(linkedList.find(2));
