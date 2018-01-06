var findDup=function(arr){
    var a = 0, found = {};
    while( !found[arr[a]] ) found[arr[a++]]=true;
    return arr[a]
  }

  console.log(findDup([1, 2, 3, 4, 8, 9, 9]));
