import { type CalculatorFields } from 'contexts/ExercisesContext/ExercisesContext.types'

export const calculateCalories = (calculatorExercise: CalculatorFields): number => {
  const minutes = calculatorExercise?.duration
  const weight = calculatorExercise?.weight
  const MET = calculatorExercise?.exercise?.MET
  if (minutes && MET && weight) return Number(Number((3.5 * minutes * MET * weight) / 200).toFixed(0))
  return 0
}
