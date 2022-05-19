let msg = 'Hello';

console.log("함수 호출 전")
function sayHello(name){
	if(name){
		msg += ', ' + name
//혹은 msg += `, ${name}`;
;
	}
    console.log("함수 내부")
}

sayHello('Mike');
console.log("함수 호출 후")