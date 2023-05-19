import React, { createContext, type FC, type ReactNode, useMemo, useState } from 'react'

import { type CalculatorFields, type ContextProps } from './ExercisesContext.types'

const defaultContext: ContextProps = {
  setCalculatorExercise: () => null,
  calculatorExercise: undefined,
  currentExercise: undefined,
  userWeight: undefined,
  exerciseDuration: undefined
}

export const ExercisesContext = createContext(defaultContext)

export const ExercisesContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [calculatorExercise, setCalculatorExercise] = useState<CalculatorFields>()

  const currentExercise = useMemo(() => calculatorExercise?.exercise, [calculatorExercise])
  const userWeight = useMemo(() => calculatorExercise?.weight, [calculatorExercise])
  const exerciseDuration = useMemo(() => calculatorExercise?.duration, [calculatorExercise])

  return (
        <ExercisesContext.Provider
            value={{
              calculatorExercise,
              setCalculatorExercise,
              currentExercise,
              userWeight,
              exerciseDuration
            }}
        >
            {children}
        </ExercisesContext.Provider>
  )
}
