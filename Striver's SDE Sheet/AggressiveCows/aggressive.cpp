#include<iostream>
#include<vector>
#include<limits.h>
#include<algorithm>
using namespace std;

bool isPlaced(vector<int> &stalls,int mid,int k){
    int countCows=1;//C1 is placed
    int last=stalls[0];//last cow is placed here
    for(int i=1;i<stalls.size();i++){
        //logic
        if(stalls[i]-last>=mid){
            countCows++;
            last=stalls[i];
        }
    }
    if(countCows>=k){
        return true;
    }
    else{
        return false;
    }
}
int maximumMinimum(vector<int> &stalls,int k){
    int N=stalls.size();
    sort(stalls.begin(),stalls.end());
    int low=1;
    int high=stalls[N-1]-stalls[0];
    int ans=INT_MAX;
    while(low<=high){
        int mid=(low+high)/2;
        if(isPlaced(stalls,mid,k)==1){
            ans=mid;
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    return ans;
}
int main(){
    vector<int> stalls={0,3,4,7,10,9};
    int k=4;//no of cows
    cout<<maximumMinimum(stalls,k)<<endl;
    return 0;
}