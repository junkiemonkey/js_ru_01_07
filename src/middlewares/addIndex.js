export default store => next => action => {		
	next({...action, commentID: generateID()});
}

function generateID(){
	function s4(a) {
    return Math.floor((a + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4(1) + s4(2) + s4(3) + s4(4);
}