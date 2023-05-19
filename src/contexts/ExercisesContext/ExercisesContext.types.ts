export interface ContextProps {
  setCalculatorExercise: (open: CalculatorFields) => void
  calculatorExercise?: CalculatorFields
  currentExercise?: Exercise | null
  userWeight?: number
  exerciseDuration?: number

}

export interface CalculatorFields {
  duration: number
  weight: number
  exercise: Exercise | null
}

export interface Exercise {
  group: string
  label: string
  MET: number
}
