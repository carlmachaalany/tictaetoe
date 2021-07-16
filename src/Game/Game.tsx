import {CellStatus as C} from '../types';
import { useEffect, useState } from 'react';
import './Game.scss';

const Game = () => {

    const [winner, setWinner] = useState<string | null>(null)
    const [xturn, setXturn] = useState(true);    
    const [status1, setStatus1] = useState(C.Empty);
    const [status2, setStatus2] = useState(C.Empty);
    const [status3, setStatus3] = useState(C.Empty);
    const [status4, setStatus4] = useState(C.Empty);
    const [status5, setStatus5] = useState(C.Empty);
    const [status6, setStatus6] = useState(C.Empty);
    const [status7, setStatus7] = useState(C.Empty);
    const [status8, setStatus8] = useState(C.Empty);
    const [status9, setStatus9] = useState(C.Empty);
    
    const handleStatus = (num: number) => {
        if (num===1) changeStatus(status1, setStatus1);
        else if (num===2) changeStatus(status2, setStatus2);
        else if (num===3) changeStatus(status3, setStatus3);
        else if (num===4) changeStatus(status4, setStatus4);
        else if (num===5) changeStatus(status5, setStatus5);
        else if (num===6) changeStatus(status6, setStatus6);
        else if (num===7) changeStatus(status7, setStatus7);
        else if (num===8) changeStatus(status8, setStatus8);
        else changeStatus(status9, setStatus9);
    }

    const changeStatus = (status: C, setStatus: React.Dispatch<React.SetStateAction<C>>) => {
        if (status === C.Empty) {
            if (xturn) {
                setStatus(C.Cross);
            } else {
                setStatus(C.Round);
            }
            setXturn(!xturn);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            checkIfWin();
        }, 250)
    }, [xturn])

    const checkIfWin = () => {
        if ((((status1===status2 && status2===status3) || (status1===status4 && status4===status7)) && (status1!==C.Empty))
        || (((status1===status5 && status5===status9) || (status3===status5 && status5===status7) || (status2===status5 && status5===status8) || (status4===status5 && status5===status6)) && status5!==C.Empty)
        || (((status7===status8 && status8===status9) || (status9===status6 && status6===status3)) && status9!==C.Empty)) {
            if (xturn) setWinner("O")
            else setWinner("X")

        }
    }

    const resetGame = () => {
        setStatus1(C.Empty);
        setStatus2(C.Empty);
        setStatus3(C.Empty);
        setStatus4(C.Empty);
        setStatus5(C.Empty);
        setStatus6(C.Empty);
        setStatus7(C.Empty);
        setStatus8(C.Empty);
        setStatus9(C.Empty);
        setWinner(null);
        setXturn(true);
    }

    return (
        <>
        {winner ? <h1>Winner is {winner} !</h1> : <h1 style={{visibility: "hidden"}}>W</h1>}
        <div className="board">
            <div className="row">
                <svg onClick={() => handleStatus(1)} className="cell cross__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    {status1===C.Cross ?
                        <>
                        <path className="cross__path cross__path--right" fill="none" d="M16,16 l20,20" />
                        <path className="cross__path cross__path--left" fill="none" d="M16,36 l20,-20" />
                        </>
                        :
                    status1===C.Round ?
                        <circle className="cross__circle" cx="26" cy="26" r="11" fill="none"/>
                        :
                        <></>
                    }
                </svg>
                <svg onClick={() => handleStatus(2)} id="cell2" className="cell cross__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    {status2===C.Cross ?
                        <>
                        <path className="cross__path cross__path--right" fill="none" d="M16,16 l20,20" />
                        <path className="cross__path cross__path--left" fill="none" d="M16,36 l20,-20" />
                        </>
                        :
                    status2===C.Round ?
                        <circle className="cross__circle" cx="26" cy="26" r="11" fill="none"/>
                        :
                        <></>
                    }
                </svg>
                <svg onClick={() => handleStatus(3)} id="cell3" className="cell cross__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    {status3===C.Cross ?
                        <>
                        <path className="cross__path cross__path--right" fill="none" d="M16,16 l20,20" />
                        <path className="cross__path cross__path--left" fill="none" d="M16,36 l20,-20" />
                        </>
                        :
                    status3===C.Round ?
                        <circle className="cross__circle" cx="26" cy="26" r="11" fill="none"/>
                        :
                        <></>
                    }
                </svg>
            </div>
            <div className="row">
                <svg onClick={() => handleStatus(4)} className="cell cross__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    {status4===C.Cross ?
                        <>
                        <path className="cross__path cross__path--right" fill="none" d="M16,16 l20,20" />
                        <path className="cross__path cross__path--left" fill="none" d="M16,36 l20,-20" />
                        </>
                        :
                    status4===C.Round ?
                        <circle className="cross__circle" cx="26" cy="26" r="11" fill="none"/>
                        :
                        <></>
                    }
                </svg>
                <svg onClick={() => handleStatus(5)} className="cell cross__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    {status5===C.Cross ?
                        <>
                        <path className="cross__path cross__path--right" fill="none" d="M16,16 l20,20" />
                        <path className="cross__path cross__path--left" fill="none" d="M16,36 l20,-20" />
                        </>
                        :
                    status5===C.Round ?
                        <circle className="cross__circle" cx="26" cy="26" r="11" fill="none"/>
                        :
                        <></>
                    }
                </svg>
                <svg onClick={() => handleStatus(6)} className="cell cross__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    {status6===C.Cross ?
                        <>
                        <path className="cross__path cross__path--right" fill="none" d="M16,16 l20,20" />
                        <path className="cross__path cross__path--left" fill="none" d="M16,36 l20,-20" />
                        </>
                        :
                    status6===C.Round ?
                        <circle className="cross__circle" cx="26" cy="26" r="11" fill="none"/>
                        :
                        <></>
                    }
                </svg>
            </div>
            <div className="row">
                <svg onClick={() => handleStatus(7)} className="cell cross__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    {status7===C.Cross ?
                        <>
                        <path className="cross__path cross__path--right" fill="none" d="M16,16 l20,20" />
                        <path className="cross__path cross__path--left" fill="none" d="M16,36 l20,-20" />
                        </>
                        :
                    status7===C.Round ?
                        <circle className="cross__circle" cx="26" cy="26" r="11" fill="none"/>
                        :
                        <></>
                    }
                </svg>
                <svg onClick={() => handleStatus(8)} className="cell cross__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    {status8===C.Cross ?
                        <>
                        <path className="cross__path cross__path--right" fill="none" d="M16,16 l20,20" />
                        <path className="cross__path cross__path--left" fill="none" d="M16,36 l20,-20" />
                        </>
                        :
                    status8===C.Round ?
                        <circle className="cross__circle" cx="26" cy="26" r="11" fill="none"/>
                        :
                        <></>
                    }
                </svg>
                <svg onClick={() => handleStatus(9)} className="cell cross__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    {status9===C.Cross ?
                        <>
                        <path className="cross__path cross__path--right" fill="none" d="M16,16 l20,20" />
                        <path className="cross__path cross__path--left" fill="none" d="M16,36 l20,-20" />
                        </>
                        :
                    status9===C.Round ?
                        <circle className="cross__circle" cx="26" cy="26" r="11" fill="none"/>
                        :
                        <></>
                    }
                </svg>
            </div>
        </div>
        <button className="button" onClick={resetGame}>Reset Game</button>
        </>
    )
}

export default Game;