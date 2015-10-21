var _THDAT = {};

function th(str){
	var base = null;
	var docall = false;
	/* the base is always returned, unless it's the window */
	/* if docall is true, it will call the function in the base*/
	if (str.charAt(0) == '!'){
		docall = true;
		str = str.substr(1,str.length-1); //remove the now unnecessary "!"
	}
	if (str == "."){
		return window;
	}
	/* 
	IF the first character is "."
	then it gets the base from the window.
	*/
	if (str.charAt(0) == '.'){
		var a = str.split(".");
		base = window[a[1]]; //the base is the window, now.
		var idx = 1;
		if (idx < a.length-1){
			while ( (base[a[idx] ]) ){ //run through the array until the final index is found.
				base = base[a[idx]]; 
				idx++;
			}
		}
	}
/*

IF the first is "$"
then it gets it from the _THDAT which is the 
data that all newly added references are 
located.

*/
	if (str.charAt(0) == '$'){
		str = str.substr(1,str.length-1);
		var a = str.split(".");
		base = _THDAT[a[0]]; //set the base the word in _THDAT
		var idx = 1;
		if (idx < a.length){
			while ( (a[idx-1] in base) ){
				base = base[a[idx]];
				idx++;
			}
		}
	}
	if (docall == false){
		return base;
	}
	else {
		if (typeof base == "function"){ //check if it's a function
			return base(); //run it if it is.
		}
	}
}

th.add = function(name, value){ //adds any kind of value to the _THDAT
	_THDAT[name] = value;		//adds it as a reference, so you don't	need to worry about speed.
}



/*

LOG

This is the log. It helps keep track of changes.

--------------------------------------------------

7/10/15
Corbbin Goldsmith

Created.

Added the dot(string) function to get a variable
in the window, based on the string fed into it.



--------------------------------------------------

17/10/15
Corbbin Goldsmith 

Questions:

Can arrays be accessed by numbers as string?

19/10/15
Answer: yes, arrays can also be accessed using
this method.

------------------------------------------------

21/10/15
Corbbin Goldsmith

Added the if statement that calls the function
fixed up the order in which things happened,
as well as having the base always be returned
as the variable "base", unless it's the window.

You can now do th(".") to get the window. Not 
sure why that is necessary, I may take it out 
later after checking whether it's needed.

Added heavy commenting to it.

Questions:

Can I do maths within this? And could it be 
applicable?

Is there a way to add arguments to a function
run by th?

------------------------------------------------

*/
