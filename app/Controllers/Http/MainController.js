'use strict'

class MainController {

  async greeting({ request, response }) {
    return response.json({
      status: true
    })
  }

  async login({ request, response }) {
    const userData = request.all()
    return response.json({
      status: true,
      ...userData
    })
  }

}

module.exports = MainController
