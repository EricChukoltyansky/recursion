function validAnagram(str1, str2) {
  let sorted1 = str1
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
  let sorted2 = str2
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
  console.log(sorted1);
  console.log(sorted2);
  if(sorted1 === sorted2) {
      return true;
  } return false;
}

console.log(validAnagram("aaz", "zza"));
