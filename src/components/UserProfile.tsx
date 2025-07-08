import { User } from '../pages/matches';

export default function UserProfile({data}: {data: User}) {
    const yourRankExists = (data.yourRank != -1);
    const theirRankExists = (data.theirRank != -1);
    const diff = (data.yourRank - data.theirRank);
    return (
        <div className="m-3 p-3 bg-slate-800 border w-md">
            <p>{ data.name }</p>
            {yourRankExists && <p>You ranked them a { data.yourRank }</p>}
            {theirRankExists && <p>You were ranked a { data.theirRank }</p>}
            {(diff == 0) && <p>Congratulations! You're a match!</p>}
            {(diff < 0) && <p></p>}
            {(diff > 0) && <p></p>}
        </div>
    )
}