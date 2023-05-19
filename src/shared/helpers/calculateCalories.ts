import { type CalculatorFields } from 'contexts/ExercisesContext/ExercisesContext.types'

export const calculateCalories = (calculatorExercise: CalculatorFields) => {
  const minutes = calculatorExercise?.duration
  const weight = calculatorExercise?.weight
  const MET = calculatorExercise?.exercise?.MET
  if (minutes && MET && weight) return (3.5 * minutes * MET * weight) / 200
  return undefined
}
