import Link from 'next/link';
import Logout from './Logout';

interface props {
    href1: string,
    page1: string,
    
    href2: string,
    page2: string,
    title?: string,
}

export default function NavBar(props: props) {
    return (
        <div>
            <div>
                <div className="w-full h-15 flex justify-between md:justify-end">
                <Link
                    href={`/${props.href2}`}>
                    <button className="w-30 h-10 bg-blue-900 hover:bg-slate-500 rounded-sm p-1 text-center m-4 mr-0">{props.page2}</button>
                </Link>
                    <Link
                        href={`/${props.href1}`}>
                        <button className="w-30 h-10 bg-blue-900 hover:bg-slate-500 rounded-sm p-1 text-center m-4 mr-0">{props.page1}</button>
                    </Link>
                    <Logout />
                    

                </div>

            </div>
            
            
            <div className="w-full text-center absolute top-20">
                <h2 className="text-xl md:text-3xl">{props.title}</h2>


            </div>


        </div>
    )
}