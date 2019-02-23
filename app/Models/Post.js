'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
  static boot() {
    super.boot()
    this.addTrait('@provider:Lucid/Slugify', {
      fields: {
        slug: 'title'
      },
      strategy: 'dbIncrement'
    })
  }

  categories() {
    return this.belongsTo('App/Models/Category')
  }

  users() {
    return this.belongsTo('App/Models/User')
  }

  tags() {
    return this.belongsToMany('App/Models/Tag').pivotTable('post_tag')
  }

  comments() {
    return this.hasMany('App/Models/Comment')
  }
}

module.exports = Post
