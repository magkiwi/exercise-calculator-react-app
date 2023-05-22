import { useContext } from 'react'
import { Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { ExercisesContext } from 'contexts/ExercisesContext/ExercisesContext'
import { Edit } from '@mui/icons-material'

export const ExercisesList = () => {
  const { allExercises } = useContext(ExercisesContext)

  return (
        <Grid item xs={12} sm={6} mt={2} display="flex" justifyContent='center'>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Exercise</strong></TableCell>
                            <TableCell><strong>Duration</strong></TableCell>
                            <TableCell><strong>Kcal</strong></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allExercises.map((exercise, index) => (
                            <TableRow key={index}>
                                <TableCell> {exercise.exercise?.label} </TableCell>
                                <TableCell> {exercise.duration} </TableCell>
                                <TableCell> {exercise.kcal} </TableCell>
                                <TableCell width={90}>
                                    <IconButton onClick={() => console.log('')}>
                                        <Edit cursor='pointer'/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Grid>

  )
}
