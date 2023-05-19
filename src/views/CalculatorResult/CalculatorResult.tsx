import { useContext, useMemo } from 'react'
import { ExercisesContext } from 'contexts/ExercisesContext/ExercisesContext'
import { calculateCalories } from 'shared/helpers/calculateCalories'

export const CalculatorResult = () => {
  const { calculatorExercise } = useContext(ExercisesContext)

  const caloriesBurned = useMemo(() => {
    if (calculatorExercise) return calculateCalories(calculatorExercise)
    return undefined
  }, [calculatorExercise])

  return (
        <div>
            {caloriesBurned}
        </div>
  )
}
