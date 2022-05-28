export const increase= (num) =>{
    return(
        {
            type:"INCREASE",
            payload: num
        });
}

export const decrease = (num) =>{
    return(
        {
            type:"DECREASE",
            payload:num
        }
    );
}