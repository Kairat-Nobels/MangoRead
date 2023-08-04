import { Avatar, Box, Typography } from '@mui/material'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useGetImages } from '../../hooks/useGetImages'
import { dataModal } from '../../service/staticData/staticData'
import { getSignUp } from '../../store/asyncActions/ActionsAuth'
import { Capitalize } from '../../utils/fc'
import { ButtonForm, InputForm, signUpStyle } from '../muiComponentsStyle'

function SignUp() {
  const { imageURL, getImage } = useGetImages()
  const {
    errorImg,
    nickname,
    username,
    image,
    password,
    errorLength,
    errorField,
    erroPassord
  } = dataModal.SignUpform
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ mode: 'all' })
  const form = useRef()
  const dispatch = useDispatch()
  const handleSub = () => {
    dispatch(getSignUp(form.current))
    reset()
    getImage('')
  }

  return (
    <Box sx={signUpStyle}>
      <form ref={form} onSubmit={handleSubmit(handleSub)}>
        <label htmlFor='file'>
          <Avatar
            alt='Upload photo'
            src={imageURL && imageURL}
            sx={{ width: 181, height: 181 }}
          />
          <input
            id='file'
            {...register(image, { required: `${errorImg}` })}
            onChange={getImage}
            accept='image/*'
            type='file'
            hidden
          />
          <Typography variant='button'>{dataModal.addImg}</Typography>
          <br />
          {errors?.image_file && (
            <Typography variant='error'>
              {errors?.image_file?.message || 'Error!'}
            </Typography>
          )}
        </label>
        {errors?.username && (
          <Typography variant='error'>
            {errors?.username?.message || 'Error!'}
          </Typography>
        )}
        <InputForm
          className='inp'
          {...register(username, {
            required: `${errorField}`,
            minLength: { value: 10, message: errorLength }
          })}
          placeholder={Capitalize(username)}
        />
        {errors?.nickname && (
          <Typography variant='error'>
            {errors?.nickname?.message || 'Error!'}
          </Typography>
        )}
        <InputForm
          className='inp'
          {...register(nickname, {
            required: `${errorField}`,
            minLength: { value: 10, message: errorLength }
          })}
          placeholder={Capitalize(nickname)}
        />
        {errors?.password && (
          <Typography variant='error'>
            {errors?.password?.message || 'Error!'}
          </Typography>
        )}
        <InputForm
          className='inp'
          {...register(password, {
            required: `${errorField}`,
            minLength: { value: 8, message: erroPassord }
          })}
          placeholder={Capitalize(password)}
        />
        <ButtonForm onSubmit={handleSubmit(handleSub)}>
          {dataModal.singUp}
        </ButtonForm>
      </form>
    </Box>
  )
}

export default SignUp
