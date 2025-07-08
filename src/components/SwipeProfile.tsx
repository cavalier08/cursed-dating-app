import Image from 'next/image';
// profile of users to swipe on
export default function SwipeProfile() {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        

    }

    function SwipeButton({rating}: {rating: number}) {
        return (
           <button onClick={handleClick} className="bg-slate-600 w-20 h-10 hover:bg-pink-300">
            {rating}
    
           </button>
        );
    }

    const pfpURL = "/grumpy_lucky.png";
    const pfpStyle = {

    }

    return (
        
        <div className="bg-slate-800 w-80 h-90 absolute bottom-0">
            <Image 
                src={pfpURL}
                alt="pfp of person"
                width={100}
                height={100}
                style={pfpStyle} />

            <div className="flex wrap absolute bottom-0 w-100">
            <SwipeButton rating={1} />
            <SwipeButton rating={2} />
            <SwipeButton rating={3} />
            <SwipeButton rating={4} />
            <SwipeButton rating={5} />
            <SwipeButton rating={6} />
            </div>
             
        </div>
    )
}



 