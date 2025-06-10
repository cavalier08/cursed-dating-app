export default function Profile({ data = { name: "", username: "", yourRank: -1, theirRank: -1 } }) {
    const yourRankExists = (data.yourRank != -1);
    const theirRankExists = (data.theirRank != -1);
    return (
        <div>
            <p>{ data.name }</p>
            {yourRankExists && <p>You ranked them a { data.yourRank }</p>}
            {theirRankExists && <p>They ranked you a { data.theirRank }</p>}
        </div>
    )
}