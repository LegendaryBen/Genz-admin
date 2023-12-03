import Delete_author from "./Delete_author"



const Authors_card = ({data,click}) => {
    return (
        <div className="authors_card" style={{height:!data.dropped ? "50px" : "100px",transition:"0.5s"}}>
            <div className="div4" onClick={()=>{click(data.id)}} >
                <div className="div3">
                    <span className="material-symbols-outlined">person</span>
                    <div>Benjamin Chimaobi</div>
                </div>
                <span className="material-symbols-outlined" style={{transform:!data.dropped ? "rotate(0deg)":"rotate(180deg)",transition:"0.5s"}} >navigate_next</span> 
            </div>
            <div className="div5">
                <Delete_author color="delete_author" text="Delete"/>
                <Delete_author color="edit_author" text="Edit"/>
            </div>
        </div>
    )
}

export default Authors_card
