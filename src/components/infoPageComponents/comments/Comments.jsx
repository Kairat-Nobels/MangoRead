import { Box, CircularProgress, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  addComment,
  getComment
} from '../../../store/asyncActions/ActionsComment'
import { ButtonForm } from '../../muiComponentsStyle'
import { commentsStyle } from '../muiStyleInfoPage'
import Comment from './Comment'

function Comments() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const handleAddComm = () => {
    dispatch(addComment(id))
  }
  const { comment, loading } = useSelector(state => state.comments)

  useEffect(() => {
    dispatch(getComment(`${id}/comments`))
  }, [id])
  return (
    <>
      {loading ? (
        <div style={{ width: '200px', height: '200px', margin: '20px auto' }}>
          {' '}
          <CircularProgress
            style={{ width: '200px', height: '200px' }}
            color='third'
          />
        </div>
      ) : (
        <Box sx={commentsStyle}>
          <Typography mb='33px' fontSize={35} fontWeight={500}>
            Топ рецензий
          </Typography>
          <ButtonForm style={{ marginBottom: '30px' }} onClick={handleAddComm}>
            Add comment
          </ButtonForm>
          {comment?.length !== 0 ? (
            comment?.map(comment => (
              <Comment
                key={comment?.id}
                comm={comment?.text}
                user={comment?.user}
              />
            ))
          ) : (
            <Typography variant='h3'>Нету рецензий</Typography>
          )}
        </Box>
      )}
    </>
  )
}

export default Comments
