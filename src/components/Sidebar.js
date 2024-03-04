import React from 'react';

const menuItems = [
    "Menu",
    "About",
    "Contacts",
];

// function SidebarList({items}) {
//     let res = items.map((e)=>{
//         return <li>{e}</li>;
//     });
//     return (
//         <div className='Sidebar-list'>
//         {res}
//         </div>
//     );
// }

const Sidebar = () => {
    const [clickState, setClickState] = React.useState("");

    function clickHandler(e){
        e.preventDefault();
        setClickState(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className='Sidebar'>
            <ul className="nav flex-column">
                {menuItems.map((elem, index)=>{
                    return (
                        <li className="nav-item">
                            <button key={elem} id={elem} className={clickState===elem?"nav-link active":"nav-link"} 
                                onClick={clickHandler} value={elem}
                                aria-current={clickState===elem ? "page" : ""}>{elem}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

export default Sidebar;
