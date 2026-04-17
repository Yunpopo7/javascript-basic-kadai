const event = new Date(Date.UTC(2024, 9, 12,));
const options = { year: "numeric", month: "long", day: "numeric" };

console.log(event.toLocaleDateString("ja-JP", options));