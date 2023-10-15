#include<iostream>
#include<limits.h>
using namespace std;
int maxProdSubar(int arr[],int n){
    int maxProd=INT_MIN;
    int prod=1;
    for(int i=0;i<n;i++){
        prod*=arr[i];
        if(prod>maxProd){
            maxProd=prod;
        }
        if(prod<0){
            prod=1;
        }
    }
    return maxProd;
}
int main(){
    int arr[]={1,2,3,4,5,0};
    // int arr[]={1,2,-3,0,-4,-5};//not working
    int n=sizeof(arr)/sizeof(int);
    cout<<maxProdSubar(arr,n)<<endl;
    return 0;
}