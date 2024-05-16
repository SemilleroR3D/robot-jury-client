import { useState } from 'react'
import { ICriterion } from '../../services/juries'
import { IInscription } from '../../services/registerCompetition'
import { addNote } from '../../services/note'
import { Navigate, useParams } from 'react-router-dom'
import useUserStore from '../../store/userStore'

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
    <div>
      <h4>{inscription.robot.name}</h4>
      <p>{inscription.robot.description}</p>
      <p>
        {!currentNote
          ? 'No has calificado este item'
          : `Tiene una nota de es este item: ${currentNote.note / 10}`}
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const { note } = Object.fromEntries(
            new window.FormData(e.currentTarget)
          )
          if (isNaN(Number(note))) return

          addNote(accessToken, {
            note: Number(note) * 10,
            competitionRegistrationId: inscription.id,
            evaluationCriterionId: Number(id)
          }).then(setCurrentNote)
        }}
      >
        <input
          type='number'
          name='note'
          defaultValue={!currentNote ? 0 : currentNote.note / 10}
          placeholder='5'
          max={5}
          min={0}
          step='0.1'
          required
        />
        <input type='submit' value='Calificar' />
      </form>
    </div>
  )
}

export default InscriptionItem
