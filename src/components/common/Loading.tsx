import loadingIcon from '../../assets/loading.gif'
import './Loading.css'

const Loading = (props: any) => {
    const { message } = props

    return (
        <div className="loader">
            <canvas></canvas>
            <img src={loadingIcon} alt="loading icon" />
            <div className="text">{message}</div>
        </div>
    )
}

export { Loading }