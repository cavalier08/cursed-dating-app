import { User } from '../pages/matches copy';

interface PropsType {
    data: User
}

export default function UserProfile(props: PropsType) {
    const yourRankExists = (props.data.yourRank != -1);
    const theirRankExists = (props.data.theirRank != -1);
    const diff = (props.data.yourRank - props.data.theirRank);
    return (
        <div className="m-3 p-3 bg-slate-800 border w-md">
            <p>{ props.data.name }</p>
            {yourRankExists && <p>You ranked them a { props.data.yourRank }</p>}
            {theirRankExists && <p>You were ranked a { props.data.theirRank }</p>}
            {(diff == 0) && <p>Congratulations! You're a match!</p>}
            {(diff < 0) && <p></p>}
            {(diff > 0) && <p></p>}
        </div>
    )
}