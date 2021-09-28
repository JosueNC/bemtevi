import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Restaurantes extends BaseSchema {
  protected tableName = 'restaurantes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('nome').unique().notNullable();
      table.string('logradouro').notNullable();
      table.string('numero').notNullable();
      table.string('cep',8).notNullable();
      table.string('bairro').notNullable();
      table.string('cidade').notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
