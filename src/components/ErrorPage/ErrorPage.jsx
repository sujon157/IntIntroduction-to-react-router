import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Oopps!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>Go back where you from </p>
                    <Link to='/'>    <button className="bg-rose-700 px-5 p-2">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;