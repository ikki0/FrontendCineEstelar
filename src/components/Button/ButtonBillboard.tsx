import './ButtonBillboard.css';

interface ButtonBillBoardProps {
    title: string;
}

function ButtonBillboard({title}: ButtonBillBoardProps) {
    return (
        <button className="button-billboard">
            <span className="text">
            {title}
            </span>
        </button>
    )
}

export { ButtonBillboard };