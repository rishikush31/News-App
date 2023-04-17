import './Navbar.css';

function Navbar() {
    return (
        <div className="nvbar">
            <div className="logo">
                DEV.NEWS
            </div>
            <div className="it">
                <a href="/#">Home</a>
                <a href="/#">About</a>
                <a href="/#">Other</a>
                
            </div>
        </div>
    );
}

export default Navbar;