import { Fragment, useContext, useMemo } from 'react'
import { ExercisesContext } from 'contexts/ExercisesContext/ExercisesContext'
import { calculateCalories } from 'shared/helpers/calculateCalories'
import { Box, Divider, Grid, styled, Typography } from '@mui/material'
import { Favorite } from '@mui/icons-material'

const StyledBox = styled(Box)((theme) => ({
  padding: 4,
  border: `1px solid ${theme.theme.palette.secondary.main}`
}))

export const CalculatorResult = () => {
  const { calculatorExercise } = useContext(ExercisesContext)

  const caloriesBurned = useMemo(() => {
    if (calculatorExercise) return calculateCalories(calculatorExercise)
    return undefined
  }, [calculatorExercise])

  return (
        <Grid container>
            <Grid item xs={12} my={2}>
                <Typography variant='h2' color='secondary'> Your Result </Typography>
                <Divider><Favorite color='secondary' fontSize='large'/></Divider>
            </Grid>
            <Grid item xs={12}>
                <StyledBox>
                    {caloriesBurned &&
                        <Fragment>
                            <Typography>
                                {calculatorExercise?.exercise?.label} - {calculatorExercise?.duration} minutes
                            </Typography>
                            <Typography>
                                You have burned <strong>{caloriesBurned} kcal</strong>
                            </Typography>
                        </Fragment>
                    }
                    {!caloriesBurned &&
                        <Typography variant='body2' textAlign='center'>
                            Please enter some basic info in the form above
                        </Typography>
                    }
                </StyledBox>
            </Grid>
        </Grid>
  )
}
