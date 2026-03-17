const nome = "Maiara ";
const idade = 36;
const cidade = "Pelotas";

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
    console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.🏢`);
console.log(`Meu nome é `);


function saudacao(nome) {   
    console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
}
saudacao("Maiara");
saudacao("João");   

function calcularAreaRetangulo(base, altura) {
    const area = base * altura;
    return area;
}   