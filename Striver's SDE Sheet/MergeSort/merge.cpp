#include <bits/stdc++.h>
using namespace std;
int merge(vector<int> &a, int s, int mid, int e)
{
    int count = 0;

    int len1 = mid - s + 1;
    int len2 = e - mid;

    int *arr1 = new int[len1];
    int *arr2 = new int[len2];

    int k = s;
    for (int i = 0; i < len1; i++)
    {
        arr1[i] = a[s + i];
    }
    k = mid + 1;
    for (int i = 0; i < len2; i++)
    {
        arr2[i] = a[mid + 1 + i];
    }

    int i = 0, j = 0;
    int mainIndex = s;
    while (i < len1 && j < len2)
    {
        if (arr1[i] <= arr2[j])
        {
            a[mainIndex] = arr1[i++];
        }
        else
        {
            count += (mid - s + 1);
            a[mainIndex] = arr2[j++];
        }
        mainIndex++;
    }
    while (i < len1)
    {
        a[mainIndex] = arr1[i];
        mainIndex++;
        i++;
    }
    while (j < len2)
    {
        a[mainIndex] = arr2[j];
        mainIndex++;
        j++;
    }
    delete[] arr1;
    delete[] arr2;
    return count;
}
int mergeSort(vector<int> &a, int s, int e)
{
    int count = 0;
    // base case
    if (s >= e)
    {
        return count;
    }
    // ek case sambhalo
    int mid = s + (e - s) / 2;
    count += mergeSort(a, s, mid);
    count += mergeSort(a, mid + 1, e);
    count+=merge(a, s, mid, e);
    return count;
}
int main()
{
    // vector<int> a = {3, 1, 2, 4, 1, 5, 2, 6, 4};
    vector<int> a = {5, 4, 3, 2, 1};
    cout << mergeSort(a, 0, a.size() - 1) << endl;
    // for (int i = 0; i < a.size(); i++)
    // {
    //     cout << a[i] << " ";
    // }
    // cout << endl;
    return 0;
}