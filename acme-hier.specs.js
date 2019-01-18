const expect = require('chai').expect
const showManagementStructure = require('./acme-hier')

describe('showManagementStructure', () => {
  it('exists', () => {
    expect(showManagementStructure).to.be.ok
  })

  it('does not return anything', () => {
    expect(showManagementStructure()).to.eql()
  })
})
