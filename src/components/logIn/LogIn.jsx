import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useMemorize } from '../../hooks/useMemorize'
import { dataModal } from '../../service/staticData/staticData'
import { getSignIn } from '../../store/asyncActions/ActionsAuth'
import { Capitalize } from '../../utils/fc'
import { ButtonForm, checkBoxStyle, InputForm } from '../muiComponentsStyle'

function LogIn() {
  const { checkBox, inp1, inp2, btn } = dataModal.SignInForm
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm()

  const dispatch = useDispatch()
  const handleSub = data => {
    dispatch(getSignIn(data))
    reset()
  }
  //запомни меня функия

  const { form, check, handleCheck, user } = useMemorize()

  return (
    <Box
      sx={{
        mt: 9,
        mb: 10,
        border: 'none',
        '& form': {
          height: 279,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }
      }}
    >
      <form ref={form} onSubmit={handleSubmit(handleSub)}>
        {errors?.username && (
          <Typography variant="error">
            {errors?.username?.message || 'Error!'}
          </Typography>
        )}
        <InputForm
          defaultValue={user?.username && user?.username}
          {...register(inp1, { required: 'fill the blank' })}
          name={inp1}
          placeholder={Capitalize(inp1)}
        />
        {errors?.password && (
          <Typography variant="error">
            {errors?.password?.message || 'Error!'}
          </Typography>
        )}
        <InputForm
          defaultValue={user?.password && user?.password}
          {...register(inp2, { required: 'fill the blank' })}
          name={inp2}
          placeholder={Capitalize(inp2)}
        />
        <FormControlLabel
          checked={check}
          onChange={handleCheck}
          disabled={!isValid}
          sx={{
            m: 0
          }}
          style={!isValid ? { cursor: 'not-allowed'} : {}}
          control={<Checkbox sx={checkBoxStyle} />}
          label={
            <Typography variant="regular" color="#878787">
              {checkBox}
            </Typography>
          }
        />
        <ButtonForm onSubmit={handleSubmit(handleSub)}>{btn}</ButtonForm>
      </form>
    </Box>
  )
}

export default LogIn
