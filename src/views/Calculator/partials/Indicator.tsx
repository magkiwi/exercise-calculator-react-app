import { useContext, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import { Grid, TextField } from '@mui/material'
import { ExercisesContext } from 'contexts/ExercisesContext/ExercisesContext'

export const Indicator = () => {
  const { totalBurnedCalories } = useContext(ExercisesContext)
  const [goal, setGoal] = useState(200)

  return (
        <Grid item xs={12} sm={6} mt={2} display="flex" justifyContent='center'>
            <PieChart
                style={{
                  maxHeight: 150,
                  maxWidth: 150
                }}
                data={[{ value: 1, color: '#d6d0b8' }]}
                reveal={(totalBurnedCalories / goal) > 1 ? 100 : (totalBurnedCalories / goal) * 100}
                lineWidth={20}
                background="#bfbfbf"
                lengthAngle={270}
                rounded
                label={() => 'Total: ' + totalBurnedCalories + ' kcal'}
                labelPosition={0}
                labelStyle={{
                  opacity: 0.75,
                  fontSize: 10
                }}
            />
            <TextField
                value={goal}
                type='number'
                size='small'
                onChange={(event) => setGoal(Number(event.target.value))}
                label='Your Goal'
            />
        </Grid>

  )
}
