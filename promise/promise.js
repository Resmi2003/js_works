// task is lottery prediction. that is we took a lottery. here our lottery number is 1. so there is a chance to get lottery and chance to not getting lottery. so we are randomly taking a number as prizeNum. if that prizeNum matches our lottery number(lotNum) then we will won lottery. otherwise better luck next time will get. 

// pro is object of promise class

var pro = new Promise((resolve,reject)=>{    // 2 parameters there , we can put anything. 2 because a success case and an error case. Executes as an arrow function.
    let lotnum = 1;     // this is our lottery ticket number.
    let prizeNum = Math.floor(Math.random()*5);   // this is prize number. like random prediction.

    if(lotnum==prizeNum){
        resolve('You won the lottery');  // onFulfilment     // success
    }
    else{
        reject('Better luck next time');  // onRejection     // reject
    }

})
pro.then(msg=>console.log(msg))   // Result value from resolve()     // don't put coma or semicolon here, because then and catch must be in one line.  // then nnu parayunnath arrow functionayitanu workeyya, then callavanu. 'then' only handles success case. 'catch' only handles error case. 
.catch(err=>console.log(err));    // Result value from reject()

// if we done this without 'then' and 'catch', then in (refer promise-1 file) like this file we will get rejected description . we don't need that. we only need the thing to display to user. because user only understands this, the other (full rejection description) is for developers, because they can only understand that.
// resolvum rejectum proper aayit settled up answers therarilla (like promise-1.js). error adikkumbol full error aayitanu verunnath. so ath avoid cheyyan ayit correct aayit output usernu kodkan vendit aanu asychronous operations handle cheyyunna then and catch use cheyyunnath.
// here in last line msg and err we can put it anything of our choice, because it is just a message as passing arrow function.