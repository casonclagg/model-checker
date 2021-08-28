/* eslint-disable @typescript-eslint/no-unused-vars */

import * as _ from 'lodash'
import { useEffect, useRef, useState } from 'react'
import globalStyles from '../global-styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faSave, faMicrophoneAlt, faMicrophoneAltSlash, faRecycle } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid'

const MainPage = (props: any) => {
    const [chatMessages, setChatMessages] = useState<any>([]);

    // On startup - Get voices from server and set session ID
    useEffect(() => {
        let localSession = localStorage.getItem('chat-session')
        if (!localSession) {
            localSession = uuidv4()
        }
        // localStorage.setItem('chat-session', localSession)

        // voice.getVoices()
        //     .then(responseVoices => {
        //         let sortedVoices: Array<IVoice> = _.sortBy(responseVoices.voices, ['quality', 'name']).reverse()
        //         setVoices(sortedVoices)
        //         onSelectVoice(sortedVoices[0])
        //     })
    }, [])

    // if (!voices || voices.length === 0) return <Loading message="Loading..." />
    return (
        <div>
            Boo
        </div>
    )
}

export default MainPage
