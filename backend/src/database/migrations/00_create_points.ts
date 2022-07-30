//import Knex from 'knex';
import { Knex } from 'knex'
export async function up(knex: Knex) {
 return knex.schema.createTable('points', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('email').notNullable();
    table.string('name').notNullable();
    table.string('whatsapp').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude ').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('points')
}
//knex migrate:latest --knexfile knexfile.ts migrate:latest || npm run knex:migrate para obter o mesmo banco de dados.