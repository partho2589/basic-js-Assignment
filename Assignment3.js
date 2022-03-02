// Problem 1
function anaToVori (ana){
    if(ana < 0 ){
        return 'Sorry sir, Your input is not correct.'
    }
    let vori = ana / 16;
    return vori
}
// console.log(anaToVori(32));

//Problem 2 
function pandaCost (singara, samosa, jilapi){
    if(singara < 0 || samosa < 0 || jilapi < 0 ){
        return 'Sorry sir, Your input is not correct. '
    }
    let singaraPrice = singara * 7;
    let samosaPrice = samosa * 10 ;
    let jilapiPrice = jilapi * 15;
    let totalFoodPrice = singaraPrice + samosaPrice + jilapiPrice ;
    return totalFoodPrice;
}
// console.log(pandaCost(1, 1, 1));

// Problem 3 
function picnicBudget (number){
    if (typeof number !='number'){
        return 'Pleace correct your input.'
    }
    if (number <=100 ){
        totalCost = number * 5000;
    }
    else if (number <=200){
        let frist100Member = 100 * 5000;
        let secount100Member = ( number - 100) * 4000;
        totalCost = frist100Member + secount100Member;
    }
    else if ( number > 200){
        let frist100Member = 100 * 5000;
        let secount100Member = (200 -100) * 4000
        let lestMember = (number -200) *3000
        totalCost = frist100Member + secount100Member + lestMember ;
    }
    return totalCost;
}
// console.log ( picnicBudget ( 300))

// Problem 4
function  oddFriend (friendNames ){
    
    for( let i = 0; i<friendNames.length; i++){  
        if ( typeof friendNames[i] != 'string'){
            return 'Your input is incorrect.'
        }      
        let  oddName = friendNames[i]
        if ( oddName.length%2 == 1){ 
        return oddName
        } 
    }
}
// console.log(oddFriend(['Partho', 'nahar', 'rana']))
