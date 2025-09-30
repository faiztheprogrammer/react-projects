function Modal({ isOpen, onClose }) {

    return (
        <>
        {
            isOpen &&
                <div onClick={onClose} className="fixed top-0 left-0 w-full h-full bg-white/60 flex items-center justify-center">
                    <div onClick={(e)=> e.stopPropagation()} className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Modal heading</h3>
                        <p>Here's some text for the Modal</p>
                        <button
                            className="pl-4 pr-4 pt-2 pb-2 mt-3 rounded-lg bg-blue-500 text-white"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
        }
        </>

    )
}

export default Modal;