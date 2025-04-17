

class Atleta {
        constructor(nome, idade, peso, altura, notas){
            this.nome = nome;
            this.idade = idade;
            this.peso = peso;
            this.altura = altura;
            this.notas = notas;
        }


    calculaCategoria(){
        
        if(this.idade >= 9 && this.idade <= 11){
            return "Infantil";
        }else if(this.idade >=12 && this.idade <= 13){
            return "Juvenil";
        }else if(this.idade >= 14 && this.idade <= 15){
            return "Intermediário";
        }else if(this.idade >= 16 && this.idade <= 30){
            return "Adulto"
        }else{
            return "Sem categoria"
        };
    };

    calculaIMC(){
        let IMC = this.peso / (this.altura * this.altura);
        return IMC;
    };

    calculaMediaValida(){
        let notas = this.notas.sort((a, b) => a - b);
        let notasComputadas = notas.slice(1,4);
        let somaDasNotas = notasComputadas.reduce((a, b) => {
            return a + b;
            }, 0) / notasComputadas.length;
        return somaDasNotas;
    };

    obtemNomeAtleta(){
        return console.log(`Nome: ${this.nome}`);
    };
   
    obtemIdadeAtleta(){
        return console.log(`Idade: ${this.idade}`);
    };

    obtemPesoAtleta(){
        return console.log(`Peso: ${this.peso}`);
    };

    obtemAlturaAtleta(){
        return console.log(`Altura: ${this.altura}`);
    }

    obtemNotasAtleta(){
        return console.log(`Notas: ${this.notas.join(",")}`);
    };

    obtemCategoria(){
        return console.log(`Categoria: ${this.calculaCategoria()}`);
    };

    obtemIMC(){
        return console.log(`IMC: ${this.calculaIMC()}`);
    };

    obtemMediaValida(){
        return console.log(`Média válida: ${this.calculaMediaValida()}`);
    };
    

    

};


const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

const atleta2 = new Atleta("Fernando Beiramar",
    10, 60, 1.50,
    [10, 9.34, 8.42, 10, 7.88]);

atleta.obtemNomeAtleta();
atleta.obtemIdadeAtleta();
atleta.obtemPesoAtleta();
atleta.obtemAlturaAtleta();
atleta.obtemNotasAtleta();
atleta.obtemCategoria();
atleta.obtemMediaValida();


atleta2.obtemNomeAtleta();
atleta2.obtemIdadeAtleta();
atleta2.obtemPesoAtleta();
atleta2.obtemAlturaAtleta();
atleta2.obtemNotasAtleta();
atleta2.obtemCategoria();
atleta2.obtemMediaValida();
