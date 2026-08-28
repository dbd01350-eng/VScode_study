let a = "안녕";
console.log(a);

//a = a + "하세요?";
a += "하세요?";
console.log(a);

//노드추가
const con = document.querySelector("#container");
console.log(con);
con.innerHTML += `<p>❤❤❤❤❤❤❤</p>`;
con.innerHTML += `<p>떡볶이</p>`;
con.innerHTML += `<p>순대</p>`;
