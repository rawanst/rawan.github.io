const Header = () => {
    return (
      <div 
         style = {{
           position: 'sticky',
           zIndex: '100',
           top: '0',
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'flex-start',
           justifyContent: 'flex-start',
           fontSize: 'calc(10px + 2vmin)',
           marginLeft: '1%',
           width: '98%',
           height: '1.5em',
           borderRadius: '0 0 1em 1em',
           backgroundColor:' #823ccbff',
           color: '#e8e3edff',
         }}
       >
         <p 
           style={{
                 fontFamily: "Melodrama-Light", 
                 fontWeight: '500',
                 marginLeft: '1%',
                 marginTop: '-0.2%',
           }}
         >
           rawanst
         </p>
       </div>
    )
}

export default Header;