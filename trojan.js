function th(inp){
	if (inp == "."){
		return window;
	}
	if (inp.charAt(0) == '.'){
		var a = inp.split(".");
		var base = window[a[1]];
		var idx = 1;
		if (idx < a.length -1){
			while ( (base[a[idx] ]) ){
				base = base[a[idx]];
				idx++;
			}
		}
		return base;
	}
}
