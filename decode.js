const decodeString = (str) => {
    if (str.indexOf("[") === -1) return str;
    const startBracet = str.indexOf("[");
    let counter = 1;
    let endBracet = 1;
    let subString = "";
    for (let i = startBracet + 1; i < str.length; i++) {
      if (!counter) {
        i === str.length;
      } else if (str[i] === "[") {
        counter++;
      } else if (str[i] === "]") {
        counter--;
        if (!counter) {
          subString = str.substring(startBracet + 1, i);
          endBracet = i;
        }
      }
    }
    return decodeString(
      str.slice(0, startBracet - 1) +
        subString.repeat(Number(str[startBracet - 1])) +
        str.slice(endBracet + 1)
      // only works for single-digit numbers currently
    );
  };
  
  console.log(decodeString("2[abc]3[cd]ef"));
  