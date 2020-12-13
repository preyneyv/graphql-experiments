import React from 'react'
import classNames from 'classnames'
import CloseIcon from '@material-ui/icons/Close'

declare namespace Modal {
    export interface IProps {
        show: boolean
        title: string
        onClose?: () => void
        children: React.ReactNode
        className?: string
    }
}

export const Modal = ({ show, title, onClose, children, className }: Modal.IProps) => {
    return <div
        className={ classNames('ExperimentsIDE__modal', className, { show }) }>
        <div className='ExperimentsIDE__modal__container'>
            <div className="ExperimentsIDE__modal__title">
                <h1>{ title }</h1>
                <button className="ExperimentsIDE__modal__close"
                        onClick={ () => onClose?.() }>
                    <CloseIcon/>
                </button>
            </div>
            <div className="ExperimentsIDE__modal__body">
                { children }
            </div>
        </div>
    </div>
}
