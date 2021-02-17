import { createWidget } from '../factories/create-widget'
import { includeCss } from '../utils'

const WIDGET_ATTRIBUTE = 'data-tf-widget'

export const initializeWidgets = () => {
  const widgetElements = document.querySelectorAll<HTMLElement>(`[${WIDGET_ATTRIBUTE}]`)

  if (widgetElements.length > 0) {
    includeCss('./lib/css/widget.css')
  }

  Array.from(widgetElements).forEach((container, index) => {
    const formId = container.getAttribute(WIDGET_ATTRIBUTE)
    if (!formId) {
      throw new Error(`Invalid ${WIDGET_ATTRIBUTE}=${formId} for widget embed #${index}`)
    }
    createWidget(formId, { container })
  })
}
