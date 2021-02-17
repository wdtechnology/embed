import { createPopup } from '../factories/create-popup'
import { includeCss } from '../utils'

const POPUP_ATTRIBUTE = 'data-tf-popup'

export const initializePopups = () => {
  const popupElements = document.querySelectorAll<HTMLElement>(`[${POPUP_ATTRIBUTE}]`)

  if (popupElements.length > 0) {
    includeCss('./lib/css/popup.css')
  }

  Array.from(popupElements).forEach((button, index) => {
    const formId = button.getAttribute(POPUP_ATTRIBUTE)
    if (!formId) {
      throw new Error(`Invalid ${POPUP_ATTRIBUTE}=${formId} for popup embed #${index}`)
    }
    const { toggle } = createPopup(formId)
    button.onclick = toggle
  })
}
