 let x=Math.random();
    let comp;
    if(x>=0 && x<0.33)
    {
        comp="rock";
    }
    else if(x>=0.33 && x<0.66)
    {
        comp="paper";
    }
    else {
        comp="scissors";
    }
    return comp;