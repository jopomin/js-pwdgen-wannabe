var nome = prompt('Inserisci il tuo nome');
console.log(nome);
document.getElementById('nome').innerHTML = nome;

var cognome = prompt('Inserisci il tuo cognome');
console.log(cognome);
document.getElementById('cognome').innerHTML = cognome;

var colore = prompt('Inserisci il tuo colore preferito');
console.log(colore);
document.getElementById('colore').innerHTML = colore;

const finale = '19';
console.log(finale);

var password = nome+cognome+colore+finale;
console.log(password);
document.getElementById('password').innerHTML = password;
