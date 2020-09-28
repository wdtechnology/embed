import { open, openOnMobile, waitForEmbed } from '../../cypress-utils'

describe('Embed Widget', () => {
  describe('Basic', function () {
    it('Basic Embed Widget - Desktop', () => {
      open('/widget.html')
      waitForEmbed()
      cy.matchImageSnapshot()
    })

    it('Basic Embed Widget - Mobile', () => {
      openOnMobile('/widget.html')
      waitForEmbed()
      cy.matchImageSnapshot()
    })
  })

  describe('Full Page', () => {
    it('Full Page Embed Widget - Desktop', () => {
      open('/full.html')
      waitForEmbed()
      cy.matchImageSnapshot()
    })

    it('Full Page Embed Widget - Mobile', () => {
      openOnMobile('/full.html')
      waitForEmbed()
      cy.matchImageSnapshot()
    })
  })
})
