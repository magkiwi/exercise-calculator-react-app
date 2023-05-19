import { useCallback } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Grid, InputAdornment, TextField } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { common } from '@mui/material/colors'

interface FormCrud {
  duration: number
  weight: number
}

const defaultValues = {
  duration: undefined,
  weight: undefined
}
export const ExerciseCalculatorForm = () => {
  const { handleSubmit, control, formState: { isSubmitting, errors } } = useForm<FormCrud>({
    defaultValues: {
      ...defaultValues
    }
  })

  const onSubmit = useCallback((data: FormCrud) => {
    try {
      console.log(data)
      return data
    } catch {
      console.log('erro')
    }
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container gap={3}>
            <Grid item xs={12} sm={4}>
                <Controller
                    name='weight'
                    control={control}
                    rules={{
                      required: 'This field is required',
                      validate: weight => weight > 0 || 'Weight has to greater then 0'
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            InputProps={{
                              endAdornment: (<InputAdornment position="end"> KG </InputAdornment>)
                            }}
                            variant="outlined"
                            label='Weight'
                            name="weight"
                            error={!!errors.weight}
                            helperText={errors.weight?.message}
                        />
                    )}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Controller
                    name='duration'
                    control={control}
                    rules={{
                      required: 'This field is required',
                      validate: duration => duration > 0 || 'Exercise duration has to greater then 0'
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            InputProps={{
                              endAdornment: (<InputAdornment position="end"> MIN </InputAdornment>)
                            }}
                            variant="outlined"
                            label='Exercise Duration'
                            name="duration"
                            error={!!errors.duration}
                            helperText={errors.duration?.message}
                        />
                    )}
                />
            </Grid>
        </Grid>
        <Grid item xs={12} mt={2} display="flex" justifyContent="end">
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
