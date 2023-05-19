import { Paper } from '@mui/material'
import { ExerciseCalculatorForm } from './partials/ExerciseCalculatorForm'

export const Calculator = () => {
  return (
        <Paper sx={{ marginLeft: 10, padding: 4 }}>
            <ExerciseCalculatorForm />
        </Paper>
  )
}
