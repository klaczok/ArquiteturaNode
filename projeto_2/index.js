const fs = require("fs");
fs.mkdir("./teste", function(){
    console.log("Criei o diretório teste");
});

fs.writeFile("./teste/abcd.txt", "Olá NODE", function(){
   console.log("Criei o arquivo");
})

fs.readFile("./teste/abcd.txt",function(err, data){
    console.log("O meu arquivo possui os dados, "+data);
})