import { type FC, useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Autocomplete, Button, Grid, InputAdornment, TextField } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { common } from '@mui/material/colors'
import data from 'data/exercises.json'
import { type CalculatorFields } from 'contexts/ExercisesContext/ExercisesContext.types'

const defaultValues = {
  exercise: null,
  weight: undefined,
  duration: undefined
}

interface Props {
  onSubmitRequest: (values: CalculatorFields) => void
}

export const ExerciseCalculatorForm: FC<Props> = ({ onSubmitRequest }) => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    setValue,
    formState: { isSubmitting, errors }
  } = useForm<CalculatorFields>({
    defaultValues: {
      ...defaultValues
    }
  })

  const onSubmit = useCallback(async (data: CalculatorFields) => {
    reset()
    return onSubmitRequest(data)
  }, [onSubmitRequest])

  return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container gap={2} justifyContent="space-between">
                <Grid item xs={12} sm={4}>
                    <Controller
                        name='exercise'
                        control={control}
                        rules={{ required: 'This field is required' }}
                        render={({ field }) => (
                            <Autocomplete
                                {...field}
                                isOptionEqualToValue={(option, value) => option.label === value.label}
                                options={data}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        label='Exercise'
                                        placeholder='Exercise'
                                        error={!!errors.exercise}
                                        helperText={errors.exercise?.message}
                                    />
                                }
                                groupBy={(option) => option.group}
                                onChange={(event, value) => setValue('exercise', value)}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        {...register('weight', {
                          required: 'This field is required',
                          validate: weight => (weight && weight > 0) || 'Weight has to be greater then 0'
                        })}
                        fullWidth
                        type="number"
                        InputProps={{
                          endAdornment: (<InputAdornment position="end"> KG </InputAdornment>)
                        }}
                        variant="outlined"
                        label='Weight'
                        name="weight"
                        error={!!errors.weight}
                        helperText={errors.weight?.message}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        {...register('duration', {
                          required: 'This field is required',
                          validate: duration => (duration && duration > 0) || 'Exercise duration has to be greater then 0'
                        })}
                        fullWidth
                        type="number"
                        InputProps={{
                          endAdornment: (<InputAdornment position="end"> MIN </InputAdornment>)
                        }}
                        variant="outlined"
                        label='Duration'
                        name="duration"
                        error={!!errors.duration}
                        helperText={errors.duration?.message}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} mt={2} display="flex" justifyContent="end" gap={2}>
                <Button variant="outlined" onClick={() => reset()}>
                    RESET VALUES
                </Button>
                <LoadingButton
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    sx={{ color: common.white, fontFamily: 'Lora Bold' }}
                >
                    CALCULATE
                </LoadingButton>
            </Grid>
        </form>
  )
}
