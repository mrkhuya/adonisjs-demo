'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TagSchema extends Schema {
  up() {
    this.create('tags', table => {
      table.increments()
      table.string('name', 50).unique()
      table
        .string('slug')
        .notNull()
        .unique()
      table.boolean('actived').default(1)
      table.timestamps()
    })
  }

  down() {
    this.drop('tags')
  }
}

module.exports = TagSchema
