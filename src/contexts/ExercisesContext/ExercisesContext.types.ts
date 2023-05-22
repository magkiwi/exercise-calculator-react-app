export interface ContextProps {
  setCalculatorExercise: (open: CalculatorFields) => void
  calculatorExercise?: CalculatorFields
  currentExercise?: Exercise | null
  userWeight?: number
  exerciseDuration?: number
  totalBurnedCalories: number
  allExercises: CalculatorFieldsAll[]

}

export interface CalculatorFields {
  duration: number
  weight: number
  exercise: Exercise | null
}

export interface CalculatorFieldsAll extends CalculatorFields {
  kcal: number
}

export interface Exercise {
  group: string
  label: string
  MET: number
}
