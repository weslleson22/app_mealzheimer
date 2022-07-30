import { Knex } from "knex";

export async function seed(knex: Knex){
   await knex('items').insert([
        {title: 'Avos', image: 'avos.svg'},
        {title: 'Amigos', image: 'amigos.svg'},
        {title: 'Pai', image: 'pai.svg'},
        {title: 'Mãe', image: 'mae.svg'},
        {title: 'Irmãos', image: 'irmaos.svg'},
        {title: 'Tios', image: 'tios.svg'},
        {title: 'Primos', image: 'primos.svg'},
        
    ]);
}