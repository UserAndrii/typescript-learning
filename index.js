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
