
export const Toggle  = ({theme, toggleTheme}) => {
    // console.log(theme);
    return (
        <button className='toggleBtn' onClick={toggleTheme}>
       Dark/Light
        </button>
    )
}