import { Link  } from "react-router-dom"

const Buttons2 = ({cls,image,content,to,badge}) => {
    return (
        <Link className={cls} to={to}>
            <div className="content">
                <span class="material-symbols-outlined">{image}</span>
                <div>{content}</div>
            </div>
            <div className="badge">
                {badge}
            </div>
        </Link>
    )
}

export default Buttons2
