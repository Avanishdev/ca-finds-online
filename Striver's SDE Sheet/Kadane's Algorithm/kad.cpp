// //Maximum subarray sum
// #include<iostream>
// using namespace std;
// int maxSubarraySum(int arr[]){
//     int N=sizeof(arr)/sizeof(int);
//     for(int i=0;i<N;i++){
//         for(int j=i;j<N;j++){
//             int sum=0;
//             for(int k=i;k<=j;k++){
                
//             }
//             }
//         }
//     }
// }
// int main(){
//     int arr[]={-2,1,-3,4,-1,2,1,-5,4};
//     cout<<maxSubarraySum(arr)<<endl;
//     return 0;
// }



#include <bits/stdc++.h>
using namespace std;

long long maxSubarraySum(int arr[], int n) {
    long long maxi = LONG_MIN; // maximum sum
    long long sum = 0;

    
    int ansStart = -1, ansEnd = -1;
    for (int i = 0; i < n; i++) {

        if (sum == 0) ansStart = i; // starting index

        sum += arr[i];

        if (sum > maxi) {
            maxi = sum;
            
            ansEnd = i;
        }

        // If sum < 0: discard the sum calculated
        if (sum < 0) {
            sum = 0;
            
        }
    }

    //printing the subarray:
    cout << "The subarray is: [";
    for (int i = ansStart; i <= ansEnd; i++) {
        cout << arr[i] << " ";
    }
    cout << "]n";

    // To consider the sum of the empty subarray
    // uncomment the following check:

    //if (maxi < 0) maxi = 0;

    return maxi;
}

int main()
{
    int arr[] = { -2, 1, -3, 4, -1, 2, 1, -5, 4};
    int n = sizeof(arr) / sizeof(arr[0]);
    long long maxSum = maxSubarraySum(arr, n);
    cout << "The maximum subarray sum is: " << maxSum << endl;
    return 0;
}

