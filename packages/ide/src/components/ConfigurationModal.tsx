import React from 'react'
import { Modal } from './Modal'
import { IConfiguration } from '../types/IConfiguration'

declare namespace ConfigurationModal {
    export interface IProps {
        show: boolean,
        configuration: IConfiguration | null
        setConfiguration: (config: IConfiguration) => void
        onClose?: () => void
    }
}

export const ConfigurationModal = ({ show, onClose }: ConfigurationModal.IProps) => {
    return <Modal show={ show } title={ 'Configuration' } onClose={ onClose }>
        <section>
            <h2>Connect to GraphQL</h2>

        </section>
        <hr className="ExperimentsIDE__or-divider"/>
        <section>
            <h2>Import Your Schema</h2>
        </section>
    </Modal>
}
