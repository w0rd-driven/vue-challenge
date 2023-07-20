import { render } from '@testing-library/vue'
import GPA from '@/components/GPA.vue'

describe('GPA.vue', () => {
  it('renders school GPA percentiles to 2 decimal places', () => {
    const athleteGpa = 3.8
    const schoolGpa = {
      "min": 2.7,
      "25%": 3.28,
      "50%": 3.52,
      "75%": 3.8,
      "max": 4.0
    }
    const { getByText } = render(GPA, {
      props: { athleteGpa, schoolGpa }
    })
    getByText("2.70")
    getByText("3.28")
    getByText("3.52")
    getByText("3.80")
    getByText("4.00")
  })
})
