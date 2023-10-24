// function domainName(url) {
//   const correctedUrl = url.startsWith("http") ? url : `http://${url}`;
//   const { host } = new URL(correctedUrl);

//   if (host.startsWith("www")) {
//     return host.split(".")[1];
//   }

//   return host.split(".")[0];
// }

// console.log(domainName("http://github.com/carbonfive/raygun")); // Output: github
// console.log(domainName("http://www.zombie-bites.com")); // Output: zombie-bites
// console.log(domainName("https://www.cnet.com")); // Output: cnet
// console.log(domainName("http://google.com")); // Output: google
// console.log(domainName("www.xakep.ru")); // Output: xakep

/**-------------------------------------------------------------------------------------------------------------------------- */

// function inArray(array1, array2) {
//   return array1
//     .filter((arr) => {
//       for (const arr2 of array2) {
//         if (arr2.includes(arr)) return true;
//       }
//     })
//     .sort((a, b) => a.localeCompare(b));
// }

// function inArray(array1, array2) {
//   return array1
//     .filter((arr) => array2.some((str) => str.includes(arr)))
//     .sort((a, b) => a.localeCompare(b));
// }

// const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
// const a1 = ["xyz", "live", "strong"];

// console.log(inArray(a1, a2));

/**-------------------------------------------------------------------------------------------------------------------------- */

// function bouncingBall(h, bounce, window) {
//   if (h <= 0 || 0 >= bounce || bounce >= 1 || window >= h) {
//     return -1;
//   }
//   let start = h * bounce;
//   let count = 1;

//   while (start > window) {
//     count += 2;
//     start = start * bounce;
//   }
//   return count;
// }

// console.log(bouncingBall(30.0, 0.66, 1.5)); // 15
// console.log(bouncingBall(3.0, 0.66, 1.5)); // 3
// console.log(bouncingBall(3.0, 1.0, 1.5)); // -1

/**-------------------------------------------------------------------------------------------------------------------------- */

// function cakes(recipe, available) {
//   return Math.min(
//     ...Object.keys(recipe).map((el) =>
//       Math.floor((available[el] ?? 0) / recipe[el])
//     )
//   );
// }

// let recipe = { flour: 500, sugar: 200, eggs: 1 };
// let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
// console.log(cakes(recipe, available)); // 2

// let recipe2 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
// let available2 = { sugar: 500, flour: 2000, milk: 2000 };
// console.log(cakes(recipe2, available2)); //0

// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// );

/**-------------------------------------------------------------------------------------------------------------------------- */

// function incrementString(s) {
//   const r = s.match(/\d*$/);
//   return s
//     .substr(0, r.index)
//     .concat((Number(r[0]) + 1).toString().padStart(r[0].length, "0"));
// }

// console.log(incrementString("foobar000"));
// console.log(incrementString("foobar999"));
// console.log(incrementString("foobar00999"));
// console.log(incrementString("344fo8o"));
// console.log(incrementString("foobar001"));
// console.log(incrementString("foobar1"));
// console.log(incrementString("1"));
// console.log(incrementString("009"));
// console.log(incrementString("fo99obar99"));

/**-------------------------------------------------------------------------------------------------------------------------- */

// function scramble(str1, str2) {
//   const count = (str) =>
//     str.split("").reduce((acc, char) => {
//       acc[char] = (acc[char] || 0) + 1;
//       return acc;
//     }, {});

//   return Object.keys(count(str2)).every(
//     (char) => count(str2)[char] <= (count(str1)[char] || 0)
//   );
// }

// console.log(scramble("rkqodlw", "world")); // ==> True
// console.log(scramble("cedewaraaossoqqyt", "codewars")); // ==> True
// console.log(scramble("katas", "steak")); // ==> False
// console.log(scramble("scriptjavx", "javascript")); // ==> False

/**-------------------------------------------------------------------------------------------------------------------------- */

// const a = {
//   John: "aye",
//   Michael: "aye",
//   Ivan: "aye",
//   Joe: "aye",
// };

// const b = {
//   John: "aye",
//   Michael: "aye",
//   Ivan: "aye",
//   Joe: "nay",
// };

// const isFire = (obj) => {
//   if (Object.values(obj).includes("nay")) {
//     return console.log("We are not ready!");
//   }
//   console.log("Fire!");
// };

// isFire(a);
// isFire(b);

/**----------------------------------------------------------------------------------------------------------------------------------- */

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 10];
// const result = array.filter((el) => el % 2 === 0);
// console.log(result);

/**----------------------------------------------------------------------------------------------------------------------------------- */

// function add(a, b) {
//   return (BigInt(a) + BigInt(b)).toString();
// }

// function add(a, b) {
//   let result = "";
//   let carry = 0;
//   const maxLength = Math.max(a.length, b.length);

//   for (let i = 0; i < maxLength; i++) {
//     const numA = parseInt(a[a.length - 1 - i]) || 0;
//     const numB = parseInt(b[b.length - 1 - i]) || 0;

//     let sum = numA + numB + carry;
//     carry = Math.floor(sum / 10);
//     result = (sum % 10).toString() + result;
//   }

//   if (carry > 0) {
//     result = carry.toString() + result;
//   }
//   return result;
// }

// console.log(add("1", "1")); // "2"
// console.log(add("123", "456")); // "579"
// console.log(add("888", "222")); // "1110"
// console.log(add("1372", "69")); // "1441"
// console.log(add("12", "456")); // "468"
// console.log(add("101", "100")); // "201"
// console.log(add("63829983432984289347293874", "90938498237058927340892374089")); // "91002328220491911630239667963"

/**----------------------------------------------------------------------------------------------------------------------------------- */

// const REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;

/**
 * ^: Початок рядка.
 * (?=.*[a-z]): - у рядку повинна бути принаймні одна мала літера.
 * (?=.*[A-Z]):  - у рядку повинна бути принаймні одна велика літера.
 * (?=.*\d):  - у рядку повинна бути принаймні одна цифра.
 * [a-zA-Z\d_]{6,}: Послідовність букв, цифр та підкреслень довжиною принаймні 6 символів.
 * $: Кінець рядка.
 */

/**----------------------------------------------------------------------------------------------------------------------------------- */
