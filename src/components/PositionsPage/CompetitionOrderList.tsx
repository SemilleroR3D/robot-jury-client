import { ICompetitionRegistration } from '../../services/positions'
import CompetitionOrderItem from './CompetitionOrderItem'

interface ICompetitionOrderList {
  competitionRegistrations: ICompetitionRegistration[];
}

const CompetitionOrderList = ({
  competitionRegistrations
}: ICompetitionOrderList) => {
  return (
    <div>
      {competitionRegistrations.map((competitionRegistration) => (
        <div key={competitionRegistration.id}>
          <h5>{competitionRegistration.robot.name}</h5>
          <CompetitionOrderItem
            participationOrder={competitionRegistration.participationOrder}
          />
        </div>
      ))}
    </div>
  )
}

export default CompetitionOrderList
