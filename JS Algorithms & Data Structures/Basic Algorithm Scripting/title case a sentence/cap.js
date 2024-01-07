// capitalize the first letter of each word in the sentence
// let p = "free";
// console.log(p[0]. toUpperCase() + p.substring(1));

const s = "this is great";
const w = s.split(" ");

for (let i = 0; i < w.length; i++) {
    w[i] = w[i][0].toUpperCase() + w[i].substring(1);
}

console.log(w.join(" "));
// console.log(w);

 