//if condition
a=3;
if(a<=3)
{
    console.log('number is greater than equal to 3');
}


//if...else condition
b=5;
if(b%2==0)
{
    console.log('even number');
}
else{
    console.log('odd number');
}


//if...elseif
c=10;
if(c<0)
{
    console.log('negative number');
}
else if(c>0)
{
    console.log('Positive number');
}
else{
    console.log('number is zero');
}

//nested if...else
d=10;
if(d>0)
{
    if(d%2==0){
    console.log('number is positive and even');
    }
    else{
        console.log('number is positive and odd');
    }
}
else if(d<0)
{
    console.log('number is negative');
}
else{
    console.log('number is zero');
}

