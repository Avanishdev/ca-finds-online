#include<iostream>
using namespace std;
class Node{
    public:
    int data;
    Node* next;
    Node(int d){
        this->data=d;
        this->next=NULL;
    }
};
void print(Node* &head){
    Node* temp=head;
    while(temp!=NULL){
        cout<<temp->data<<" ";
        temp=temp->next;
    }cout<<endl;
}
Node* detectAndRemoveLoop(Node* &head){
    
    if (head == NULL) {
        return NULL;
    }
    int flag = 0;
    Node* slow = head;
    Node* fast = head;
    
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            flag = 1;
            break;
        }
    }
    
    if (flag != 0) {
        fast = head;
        while (slow != fast) {
            slow = slow->next;
            fast = fast->next;
        }
        //remove loop
        Node* tail=fast;
        while(tail->next!=slow){
            tail=tail->next;
        }
        tail->next=NULL;
        return slow;
    }
    
    return NULL;
}

    

int main(){
    Node* head = new Node(50);
    head->next = head;
    head->next = new Node(20);
    head->next->next = new Node(15);
    head->next->next->next = new Node(4);
    head->next->next->next->next = new Node(10);
 
    /* Create a loop for testing */
    head->next->next->next->next->next = head;
 
    // printf("Linked List before removing loop \n");
    // print(head);

    head=detectAndRemoveLoop(head);
 
    printf("Linked List after removing loop \n");
    print(head);
 
    return 0;
}