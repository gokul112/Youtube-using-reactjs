import React,{useState} from 'react'

function Header(props) {
    const [search, setsearch] = useState("")

    function searchChange(e){
        setsearch(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        props.onSubmit(search);
    }
    const onKeyPress = (event) => {
      if (event.key === "Enter") {
        props.onSubmit(search);
      }
    }
    return (
        <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">{props.title}</a>
            <div className="d-inline p-200">
                <input className="input search" type="search" aria-label="search" onChange={searchChange} placeholder="Search" onKeyPress={onKeyPress}/>
                <button className="but" onClick={(e)=>handleSubmit(e)} >
                <i className="fa fa-search"></i>
                </button>
             </div>
        </div>
      </div>
    </nav>
    )
}

export default Header
