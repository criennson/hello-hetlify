import * as React from 'react'

interface State {
    name: string
    email: string
    tel: string
    message: string
}

const initialState: State = {
    name: '',
    email: '',
    tel: '',
    message: '',
}

const Contact = () => {
    const [formValues, setFormValues] = React.useState(initialState)

    const composeValues = (name: string, value: string) => {
        setFormValues(state => ({
            ...state,
            [name]: value,
        }))
    }

    return (
        <div className="App">
            <header>
                <form name="contact" method="POST">
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="tel">Tel</label>
                        <input type="text" id="tel" name="tel" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" />
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </header>
        </div>
    )
}

export default Contact