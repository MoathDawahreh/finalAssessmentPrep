//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...

function MakeRbkStudents (name,age,education,nationality){
	return{
		name:name,
		age:age,
		education:education,
		nationality:nationality
	};
}
 var student1=MakeRbkStudents('Ahmad',21,"Eng","Jordanian");
 var student2=MakeRbkStudents('salim',22,"CS","Syrian");
 var studentsArr=[];
 studentsArr.push(student1);
 studentsArr.push(student2);



function DisplayStudent(ob){
	return ob.name+' , Age: '+ob.age+' , Major : '+ob.education+' , Nationality: '+ob.nationality;
}

function showFriend(){

}

function averageStudents(studentsArr){
	var sum=0;
	var ages=studentsArr.map(ob=>ob.age);
	for (var i = 0; i < ages.length; i++) {
		sum=sum+ages[i];
	}

	return sum/studentsArr.length;
	


}

/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,12,16,100];
*/
// write your code here ...
function square(num){
	return num*num;
}

function rangeSquared(num1,num2){
	var smallnum=0,bignum=0,numbersList=[];
	if (num1<num2) {
		smallnum=num1;
		bignum=num2;
	}else{
		smallnum=num2;
		bignum=num1;
	}

	for (var i = smallnum; i <= bignum.length; i++) {

		numbersList.push(i)
		
	}
		var ages=studentsArr.map(function(element){
			return square(element)
		});


}


/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....


 function leaders(arr){
 	var sli=arr;
 	var ledersArr=[];
 	var first=arr[0]
 	for (var i = 0; i < sli.length; i++) {
 		if (first>sli[i]) {
 			ledersArr.push(first)
 			sli=sli.slice(1)


 		}else{
 			leader=arr[i]
 			sli=slice
 		 	}
 		}


  }


 // function leaders(arr){
 // 	if (arr[i]===undefined) {
 		
 // 	}




 // 	return arr,leaders(arr.slice(1))
 // }