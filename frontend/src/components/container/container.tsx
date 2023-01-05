import './container.css';

const Container = ({children} : any) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container;