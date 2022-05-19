function sayHello(name){ // sayHello함수에 parameter가 존재한다.
	let msg = `Hello`; // 실행된다.
	if(name){ // name에 null이므로 if 루프가 작동하지 않는다.
		msg = `Hello, ${name}`;
	}
	console.log(msg); // 실행된다.
}

sayHello(); // parameter를 호출하지 않았다.