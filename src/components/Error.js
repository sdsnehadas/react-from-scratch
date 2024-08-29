import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
                    <h1>oops</h1>

            <h1>SOMETHING WENT WRONG</h1>
            <h3>{err.statusText}</h3>

        </div>
    )
}
export default Error;