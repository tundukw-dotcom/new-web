import "./NumberPad.css";
import { FaBackspace } from "react-icons/fa";
import { FaFingerprint } from "react-icons/fa6";

export default function NumberPad({ onPress, onDelete }) {

    const numbers=[1,2,3,4,5,6,7,8,9];

    return (

        <div className="keyboard">

            {numbers.map((n)=>(

                <button
                    key={n}
                    className="key"
                    onClick={()=>onPress(String(n))}
                >
                    {n}
                </button>

            ))}

            <button className="key">
                <FaFingerprint/>
            </button>

            <button
                className="key"
                onClick={()=>onPress("0")}
            >
                0
            </button>

            <button
                className="key"
                onClick={onDelete}
            >
                <FaBackspace/>
            </button>

        </div>

    );

}