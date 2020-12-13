import React, { useState } from 'react'
import { ConfigurationModal } from './ConfigurationModal'
import { IConfiguration } from '../types/IConfiguration'
import { localStore } from '../utils/LocalStore'

export const ExperimentsIDE = () => {
    const [ showConfiguration, setShowConfiguration ] = useState(true)
    const [ configuration, setConfiguration ] = useState<IConfiguration | null>(localStore.get('configuration'))
    return <div className='ExperimentsIDE__container'>
        <ConfigurationModal show={ showConfiguration }
                            configuration={ configuration }
                            setConfiguration={ setConfiguration }
                            onClose={ () => setShowConfiguration(false) }/>
    </div>
}
