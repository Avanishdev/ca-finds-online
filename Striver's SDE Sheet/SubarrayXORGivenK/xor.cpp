#include<unordered_map>
#include<iostream>
#include<vector>
using namespace std;
int solve(vector<int> &nums,int k){
    int n=nums.size();

        unordered_map <int,int>mp;
        int XOR=0;
        int count=0;

        //by deault add (0,1) i.e. XOR,count
        mp[XOR]=1;

        for(int i=0;i<n;i++){
            XOR^=nums[i];

            int element=XOR^k;
            //find function returns itr to element if found 
            //otherwise returns itr to the last element.

            // cout<<"XOR"<<XOR<<endl;
            // cout<<"hashmap"<<mp[element]<<endl;
            // cout<<"count"<<count<<endl;
            count+=mp[element];
            

            mp[XOR]+=1;
        }

        return count;
}
int main(){
    vector<int> a={4,2,2,6,4};
    int k=6;
    cout<<solve(a,k)<<endl;
    return 0;
}