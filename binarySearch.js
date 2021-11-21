function binarySearch(arr, goal) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    mid = Math.floor((start + end) / 2); // creating floored middle point
    if (goal === arr[mid]) {
      // exit statment.
      return mid;
    }
    if (goal > arr[mid]) {
      start = mid + 1;
    } else if (goal < arr[mid]) {
      end = mid - 1;
    }
  }
}

const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];

console.log(binarySearch(arr, 23));
