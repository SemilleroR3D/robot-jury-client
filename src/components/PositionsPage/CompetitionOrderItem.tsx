import { useState } from 'react'
import { IParticipationOrder } from '../../services/positions'
import { useCompetitionOrder } from '../../hooks/useCompetitionOrder'

interface ICompetitionOrderItem {
  participationOrder: IParticipationOrder;
}

const CompetitionOrderItem = ({
  participationOrder
}: ICompetitionOrderItem) => {
  const { addTry, removeTry, changeRunning } = useCompetitionOrder()
  const [order, setOrder] = useState(participationOrder)

  return (
    <div style={{ backgroundColor: order.isRunning ? 'green' : 'red' }}>
      <h6>{`Lugar: ${order.place}`}</h6>
      <p>{`Intento: ${order.try}`}</p>
      <p>{`${order.isRunning ? 'Corriendo' : 'Esperando'}`}</p>
      <button
        onClick={() => {
          addTry(order.id, order.try).then(setOrder)
        }}
      >
        addTry
      </button>
      <button
        onClick={() => {
          removeTry(order.id, order.try).then(setOrder)
        }}
      >
        removeTry
      </button>
      <button
        onClick={() => {
          changeRunning(order.id, order.isRunning).then(setOrder)
        }}
      >
        Change Running
      </button>
    </div>
  )
}

export default CompetitionOrderItem
