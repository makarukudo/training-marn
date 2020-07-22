'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class User
 */
class User extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'UserHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * User's schema
   */
  static get schema () {
    return {
      name:     { type: String, default: '', required: true },
      email:    { type: String, default: '' },
      password: { type: String }
    }
  }
}

module.exports = User.buildModel('User')
