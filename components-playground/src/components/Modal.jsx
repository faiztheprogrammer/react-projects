function Modal({isOpen, onClose}) {


    return (
        <>
            {
                isOpen &&
                <div className="fixed top-0 left-0 w-full h-full bg-amber-50/60 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Modal heading</h3>
                        <p>Here's some text for the Modal</p>
                        <button
                            onClick={onClose}
                            className="mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600">
                            Close
                        </button>
                    </div>
                </div>
            }

        </>
    )
}

export default Modal;