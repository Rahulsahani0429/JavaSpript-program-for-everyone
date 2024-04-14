// nested loop
// let heros=[['rahul', 'vinay','sandeep'],['anil','guddu','munid']];
// for(let i=0; i<heros.length; i++){
//     console.log('name of hero $[i]');
//     console.log(i,heros[i],heros[i].length);
// //     console.log("name of second index hero $[i]")
// //     console.log("name of hero",heros[1]);
// for(let j=0; j<heros[i].length;j++){
//     console.log('j=${j}, ${heros[i][j]}')
// }

// }

let studens=[['rahul',98],['santosh',87],['vinay',97]];
for(let i=0; i<studens.length; i++){
    console.log('info of student ',i);
    for(let j=0; j<studens[i].length; j++){
        
        console.log(studens[i][j]);
     }

}
