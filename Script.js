function testes(){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,2000, 'Testes')
    })
}

function testes2(){
    return new Promise(function(resolve,reject){
        setTimeout(resolve,1000, 'Testes 2')
    })
}

(
     async function(){
        await testes().then(function(val){
            console.log(val);
        });

        await testes2().then(function(val){
            console.log(val);
        });
    
         console.log('Chamando depois da função promise');
    }
)();
