import { Link } from 'react-router-dom'
import { ICriterion } from '../../services/juries'
import { TableRow, Typography, Button, TableCell, Tooltip } from '@mui/material'
import BorderColorIcon from '@mui/icons-material/BorderColor'

interface ICriteriaItem {
  criterion: ICriterion
}

const CriteriaItem = ({ criterion }: ICriteriaItem) => {
  return (
    <>
      <TableRow>
        <TableCell align='center'>
          <Typography variant='h6'>{criterion.name}</Typography>
          <Typography variant='body2'>Valor: {criterion.percent} %</Typography>
        </TableCell>
        <TableCell align='center'>
          <Tooltip title='Calificar'>
            <Button component={Link} to={`/dashboard/juries/${criterion.id}`} color='primary'>
              <BorderColorIcon />
            </Button>
          </Tooltip>
        </TableCell>
      </TableRow>
    </>
  )
}

export default CriteriaItem
