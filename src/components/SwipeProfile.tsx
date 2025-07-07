import image from 'next';
// profile of users to swipe on
export default function SwipeProfile() {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {

    }

    function SwipeButton({rating}: {rating: number}) {
        return (
           <button onClick={handleClick} className="bg-slate-300 w-10 h-5">
            {rating}
    
           </button>
        );
    }

    const pfpURL = "";

    return (
        
        <div className="bg-slate-800 w-40 h-60">

            <div className="flex wrap">
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



 