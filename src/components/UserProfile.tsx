import { User } from '../pages/matches';
import Image from "next/image";

export default function UserProfile({data}: {data: User}) {
    const yourRankExists = (data.yourRank != -1);
    const theirRankExists = (data.theirRank != -1);
    const diff = (data.yourRank - data.theirRank);
    const pfpStyle={
        margin: 'auto',
        marginBottom: '20px',
        borderRadius: '5px',
    }
    return (
        <div className="p-5 m-auto md:m-3 bg-gray-900 w-100 text-center rounded-xl hover:shadow-md hover:shadow-gray-700">
            <h3 className="text-xl m-4">{ data.name }</h3>
            {data.theirPfP != null && 
            <Image
                src={data.theirPfP}
                alt="pfp of ur future wifey"
                width={200}
                height={200}
                style={pfpStyle}  />}

            <div className="">
            {yourRankExists && <p>You ranked them a { data.yourRank }</p>}
            {theirRankExists && <p>You were ranked a { data.theirRank }</p>}
            {(diff == 0) && <p>Congratulations! You're a match!</p>}
            {(diff < 0) && <p></p>}
            {(diff > 0) && <p></p>}

            </div>
            
        </div>
    )
}