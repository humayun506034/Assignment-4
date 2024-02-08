
function calculateMoney(ticketSale){

    const ticketPrice=120;
    const numberOfStaff=8;
    const  perStaffLunch=50;
    const guradSelary=500;
    
    if(typeof ticketSale !== 'number'){
        return 'Provide Number value'
    }
    else if(ticketSale <0){
        return "Invalid Number"
    }
    else{
        return (ticketSale*ticketPrice -(guradSelary+(numberOfStaff*perStaffLunch)));
    }
}

function checkName(name){

    if(typeof name !== 'string'){
        return 'invalid';
    }
    const inputName=name.toLowerCase();
    const indicator=['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    const lastCharacter=inputName.charAt(inputName.length-1);
    if(indicator.includes(lastCharacter)){
        return "Good Name"
    }
    else{
        return "Bad Name"
    }
}

function deleteInvalids(array){
    if(Array.isArray(array) !== true){
        return "Invalid Array"
    }
    let finalArray=[];
    for(const item of array){
        if(typeof item === 'number' && !isNaN(item)){
            finalArray.push(item);
        }
    }
    return finalArray;
}

function password(obj) {
    if (!obj.name || !obj.birthYear || !obj.siteName) {
        return "invalid"
    }
    else if (obj.birthYear.toString().length !== 4) {
        return "invalid"
    }
    else {
        const firstLetterUpperCase = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
        const password = firstLetterUpperCase + '#' + obj.name + '@' + obj.birthYear;
        return password;
    }
}

function monthlySavings(array, livingCost) {
    if (Array.isArray(array) !== true || typeof livingCost !== 'number') {
        return "invalid input"
    }
    let totalIncome = 0;
    for (const item of array) {
        if (item < 3000) {
            totalIncome = totalIncome + item;
        }
        else {
            const tax = item * 0.20;
            const income = item - tax;
            totalIncome = totalIncome + income;
        }
    }
    const saving = totalIncome - livingCost;
    if (saving >= 0) {
        return saving;
    }
    else {
        return "earn more";
    }
}
