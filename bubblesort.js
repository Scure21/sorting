function swap(array, i, j){
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  var sw = true;

  while(sw){
    sw = false;
    for (var i = 0; i < array.length; i++){
      if (array[i] > array[i+1]) {
        swap(array,i, i+1);
        sw = true;
      }
    }
  }
  return array;
}



/*
We want the function to keep iterating over the array to sort the items; it knows to stop if after the final iteration, no swaps are made.

How do we indicate this with code? using a while loop...???
*/
