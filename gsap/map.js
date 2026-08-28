const lunch = ["순대", "떡볶이","오뎅"];
const cost=lunch.map((a,b)=>`${a}:${b+500}원`)
//lunch.forEach((a,b)=>console.log(a,b))
console.log(cost);
