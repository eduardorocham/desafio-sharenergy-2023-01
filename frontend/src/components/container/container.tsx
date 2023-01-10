import './container.css';

type Props = {
    children: JSX.Element
}

const Container = ({children} : Props) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container;