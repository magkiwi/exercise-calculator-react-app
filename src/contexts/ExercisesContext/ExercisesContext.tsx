import React, { createContext, type FC, type ReactNode, useEffect, useMemo, useState } from 'react'

import { type CalculatorFields, type CalculatorFieldsAll, type ContextProps } from './ExercisesContext.types'
import { calculateCalories } from '../../shared/helpers/calculateCalories'

const defaultContext: ContextProps = {
  setCalculatorExercise: () => null,
  calculatorExercise: undefined,
  currentExercise: undefined,
  userWeight: undefined,
  exerciseDuration: undefined,
  totalBurnedCalories: 0,
  allExercises: []
}

export const ExercisesContext = createContext(defaultContext)

export const ExercisesContextProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [calculatorExercise, setCalculatorExercise] = useState<CalculatorFields>()
  const [allExercises, setAllExercises] = useState<CalculatorFieldsAll[]>([])
  const [totalBurnedCalories, setTotalBurnedCalories] = useState<number>(0)

  const currentExercise = useMemo(() => calculatorExercise?.exercise, [calculatorExercise])
  const userWeight = useMemo(() => calculatorExercise?.weight, [calculatorExercise])
  const exerciseDuration = useMemo(() => calculatorExercise?.duration, [calculatorExercise])

  useEffect(() => {
    if (calculatorExercise) {
      setAllExercises([...allExercises, {
        ...calculatorExercise,
        kcal: calculateCalories(calculatorExercise)
      }])
    }
  }, [calculatorExercise])

  useEffect(() => {
    if (allExercises.length > 0) {
      const total: number = allExercises.reduce(
        function (acc, obj) {
          return acc + calculateCalories(obj)
        }, 0)
      setTotalBurnedCalories(total)
    }
  }, [allExercises])

  return (
        <ExercisesContext.Provider
            value={{
              allExercises,
              calculatorExercise,
              setCalculatorExercise,
              currentExercise,
              userWeight,
              exerciseDuration,
              totalBurnedCalories
            }}
        >
            {children}
        </ExercisesContext.Provider>
  )
}
