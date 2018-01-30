function a(a1){
	var b = 0
	if(a1>35){
		if(a1%5==4 ){
			 b = a1 + 1
		}
		else if (a1 % 5 == 3 ){
			 b = a1 + 2 
		}
		else {
			 b = a1
		}

	}

	else {
		b = a1
	}
	return b
}

document.write (a(33))