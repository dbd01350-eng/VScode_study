//named import
import { add, subtract } from "./utils.js";
console.log(add(5, 53));
console.log(subtract(5, 53));
//이름변경 임포트
import { multiply as m } from "./utils.js";
console.log(m(5, 53));
//한번에 몽땅 임포트
import * as u from "./utils.js";
console.log(u.add(10, 500));

//default import
import hi from "./utils.js";
import greet from "./utils.js";
console.log(hi("머리아파"));
console.log(greet("마이아파"));

//default+named
import greet, { divide } from "./utils.js";
