import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useCriterionStore } from '../store/criterionStore'
import { useInscriptionStore } from '../store/inscriptionStore'
import InscriptionItem from '../components/CalificationPage/InscriptionItem'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

const CalificationPage = () => {
  const inscriptions = useInscriptionStore((state) => state.inscriptions)
  const criteria = useCriterionStore((state) => state.criteria)
  const { id } = useParams()
  const [criterion] = useState(criteria.find((criterion) => criterion.id === Number(id)))

  if (!criteria.length || !criterion) return <Navigate to='/dashboard/juries' />

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant='h4' gutterBottom>
        {criterion.name}
      </Typography>
      <Typography variant='body1'>
        Tiene un peso en porcentaje de: {criterion.percent}%
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: 4 }}>
        {inscriptions.map((inscription) => (
          <Card key={inscription.id} sx={{ minWidth: 200 }}>
            <InscriptionItem inscription={inscription} criterion={criterion} />
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default CalificationPage
