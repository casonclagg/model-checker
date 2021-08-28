import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = (props: any) => {

    const headingStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#c3073f",
        color: "#fff",
        fontSize: "30px",
        padding: "20px"
    }

    const brandStyle = {
        textDecoration: "none",
        color: "#fff",
        fontFamily: "Helvetica, Arial, sans-serif",
        textTransform: "uppercase" as const
    }

    return (
        <div style={headingStyle}>
            <Link to={"/"} style={brandStyle}>
                <div className="brand">
                    <FontAwesomeIcon icon={faMicrophoneAlt} style={{ marginRight: "15px", fontWeight: "normal" }} />
                    Model Checks
                </div>
            </Link>
            <div style={{ fontSize: "18px" }}>Hello...</div>
        </div>
    )
}

export {
    Header
}