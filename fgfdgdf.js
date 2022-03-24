var bets = ['a' , 'b' , 'c']
var filterdList = []
// bets.pop()
for(var i in bets){
    if(bets[i] !== 'c'){
        filterdList.push(bets[i])
    }
}

console.log("bets" , bets.slice(2 , 3))