#include<iostream>
#include<vector>
#include<cmath>
#include<limits.h>
#include<algorithm>
using namespace std;
int maxElement(vector<int> &arr){
    int maxi=INT_MIN;
    for(int i=0;i<arr.size();i++){
        if(maxi<arr[i]){
            maxi=arr[i];
        }
    }
    return maxi;
}
int isPossible(vector<int> &arr,int mid,int h){
    int sum=0;
    for(int i=0;i<arr.size();i++){
        sum+=ceil((double)arr[i]/(double)mid);
    }
    return sum;
}
int minimumTime(vector<int> &arr,int h){
    int low=0;
    int high=maxElement(arr);
    int ans=-1;
    while(low<=high){
        int mid=low+(high-low)/2;
        if(isPossible(arr,mid,h)<=h){
            ans=mid;
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    return ans;
}
int main(){
    vector<int> arr={7,15,6,3};
    // int n=sizeof(arr)/sizeof(int);
    int h=8;
    cout<<minimumTime(arr,h)<<endl;
    return 0;
}