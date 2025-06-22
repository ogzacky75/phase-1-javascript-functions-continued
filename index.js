// code your solution here

function saturdayFun(action='roller-skate'){
	return `This Saturday, I want to ${action}!`
	
}

let mondayWork = function(action='go to the office'){
	return `This Monday, I will ${action}.`
}

function wrapAdjective(highLight = "*"){
	
	return function(special="a dedicated programmer"){
		return`You are ${highLight}${special}${highLight}!`

		
	}
}