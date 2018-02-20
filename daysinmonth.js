// function daysInMonth(month, leapYear) {
// 	let validMonths = ['January', 'February', 'March', 'April', 'May', 'June', 
// 	'July', 'August', 'September', 'October', 'November', 'December'];
// // 	if (!validMonths.includes(month)) {
// 		throw new Error('Must be a valid Month');
// 	}
// 	else if(month === 'February') {
// 		if (leapYear) {
// 			return 29;
// 		}
// 		return 28;
// 	}
// 	else if (month === 'January' || 'March' || 'May' ||  'July' ||  'August' ||  'October' ||  'December'){
// 		return 31;
// 	}
// 	else if (month === 'September' || 'April' || 'June' ||  'November') {
// 		return 30;
// 	} 
	
// }



function daysInMonth(month, leapYear) {
	let validMonths = ['January', 'February', 'March', 'April', 'May', 'June', 
	'July', 'August', 'September', 'October', 'November', 'December'];
	if (!validMonths.includes(month)) {
		throw new Error('Must be a valid Month');
	}
	switch (month) {
  	case 'February':
    	if (leapYear) {
			return 29;
		}
		return 28;
    	break;
  	case 'September': 
  	case 'April':
  	case 'June':  
  	case 'November':
   		return 30;
		break;
  	default:
    	return 31;
    	break;
	}
}

console.log(daysInMonth('February', true));


