'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentSchema extends Schema {
  up() {
    this.create('comments', table => {
      table.increments()
      table.integer('user_id').unsigned()
      table
        .foreign('user_id')
        .references('users.id')
        .onDelete('CASCADE')
      table.integer('post_id').unsigned()
      table
        .foreign('post_id')
        .references('posts.id')
        .onDelete('CASCADE')
      table.text('body')
      table.boolean('actived')
      table.timestamps()
    })
  }

  down() {
    this.drop('comments')
  }
}

module.exports = CommentSchema
