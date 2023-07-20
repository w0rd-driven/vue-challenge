import { render } from '@testing-library/vue'
import TableRow from '@/components/TableRow.vue'

describe('TableRow.vue', () => {
  it('renders school name, division, conference, ranking, SAT and ACT ranges', () => {
    const school = {
      "school": "California State University, Northridge",
      "division": "III",
      "conference": "Big West Conference",
      "ranking": 151,
      "gpa": {
        "min": 2.7,
        "25%": 3.28,
        "50%": 3.52,
        "75%": 3.8,
        "max": 4.0
      },
      "sat": {
        "reading": {
          "min": 400,
          "max": 510
        },
        "math": {
          "min": 400,
          "max": 530
        }
      },
      "act": {
        "min": 16,
        "max": 22
      }
    }

    const { getByText } = render(TableRow, {
      props: { school }
    })
    getByText("California State University, Northridge")
    getByText("III")
    getByText("Big West Conference")
    getByText("151")
    getByText("400-510")
    getByText("400-530")
    getByText("16-22")
  })

  it('renders N/A SAT and ACT ranges as Not Reported', () => {
    const school = {
      "school": "Washington and Jefferson College",
      "division": "I",
      "conference": "President's Athletic Conference (PAC)",
      "ranking": 12,
      "gpa": {
        "min": 2.2,
        "25%": 3.3,
        "50%": 3.6,
        "75%": 3.9,
        "max": 4.0
      },
      "sat": {
        "reading": {
          "min": "N/A",
          "max": "N/A"
        },
        "math": {
          "min": "N/A",
          "max": "N/A"
        }
      },
      "act": {
        "min": "N/A",
        "max": "N/A"
      }
    }

    const { getAllByText } = render(TableRow, {
      props: { school }
    })
    expect(getAllByText("Not Reported")).toHaveLength(3)
  })
})
