import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useBoard } from '../hooks/useBoard'
import BoardTable from '../components/BoardPage/BoardTable'

const BoardPage = () => {
  const { board } = useBoard()

  if (!board) return

  return (
    <Container maxWidth='lg' className='board'>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          minHeight: '200px'
        }}
      >
        <img
          src='http://45.71.181.109/source-ua3d/iconnav.png'
          alt='Logo semillero'
          height='200'
        />
        <Typography align='center' variant='h3' fontSize='md'>
          {board.name}
        </Typography>
        <img
          src='http://45.71.181.109/source-ua3d/iconoudla.png'
          alt='Logo semillero'
          height='200'
        />
      </div>
      <BoardTable competitionRegistrations={board.categories[0].competitionRegistrations} />
    </Container>
  )
}

export default BoardPage
