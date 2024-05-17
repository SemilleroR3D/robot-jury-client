import { useState } from 'react'
import { ICriterion } from '../../services/juries'
import { IInscription } from '../../services/registerCompetition'
import { addNote } from '../../services/note'
import { Navigate, useParams } from 'react-router-dom'
import useUserStore from '../../store/userStore'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import BorderColorIcon from '@mui/icons-material/BorderColor'

interface IInscriptionItem {
  inscription: IInscription;
  criterion: ICriterion;
}

const InscriptionItem = ({ inscription, criterion }: IInscriptionItem) => {
  const { id } = useParams()
  const accessToken = useUserStore((state) => state.user?.accessToken)
  const [currentNote, setCurrentNote] = useState(
    inscription.notes.find(
      (note) => note.evaluationCriterionId === criterion.id
    )
  )
  if (!accessToken) return <Navigate to='/login' />

  return (
    <>
      <Typography variant='h6' sx={{ margin: '1%' }}>Robot: {inscription.robot.name}</Typography>
      <Typography variant='body1' sx={{ margin: '1%' }}>Equipo: {inscription.robot.description}</Typography>
      <Typography
        variant='body1'
        sx={{ margin: '1%' }}
      >
        {!currentNote
          ? 'No has calificado este item'
          : `Nota Actual: ${currentNote.note / 10}`}
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const { note } = Object.fromEntries(new FormData(e.currentTarget))
          if (isNaN(Number(note))) return

          addNote(accessToken, {
            note: Number(note) * 10,
            competitionRegistrationId: inscription.id,
            evaluationCriterionId: Number(id)
          }).then(setCurrentNote)
        }}
        style={{ width: '50%', margin: 'auto' }}
      >
        <TextField
          label='Nota'
          type='number'
          name='note'
          defaultValue={!currentNote ? 0 : currentNote.note / 10}
          InputProps={{
            inputProps: { min: '0', max: '5', step: '0.1' }
          }}
          required
        />
        <Button
          type='submit'
          sx={{ margin: '1%' }}
        >
          <BorderColorIcon />
        </Button>
      </form>
    </>
  )
}

export default InscriptionItem
