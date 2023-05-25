import Button from "./Button"

const Header = ({ title, onAdd, showAdd }: any) => {
    const onClick = (e: any) => {
        console.log("clicked here at the header!!!")
    }

    return (
        <header className='header'>
            <h1> {title} </h1>
            <Button 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'ReactJS & TypeScript'
}

export default Header
