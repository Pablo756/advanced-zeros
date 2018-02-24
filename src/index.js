module.exports = function getZerosCount(number, base) {

    let tempB = base,
        tempN = number;

    for(let i = 2; i <= base; i++){
        if(tempB %i === 0){

            let count = 0;

            while(tempB %i === 0){
                count++;
                tempB = Math.floor(tempB/i);
            }

            let j = 0;
            let countN = number;

            while (countN/i > 0){
                j = j + Math.floor(countN/i);
                countN = Math.floor(countN/i);
            }

            if(tempN > j/count){
                tempN = j/count;
            }
        }
    }

    return Math.floor(tempN);
}