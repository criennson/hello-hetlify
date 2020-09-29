import * as React from 'react'
import TextField from "./text-field";

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
                    <div className="form-group">
                        <TextField
                            name="name"
                            type="text"
                            value={formValues.name}
                            label="Name"
                            placeholder=""
                            onChange={composeValues}
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            name="email"
                            type="email"
                            value={formValues.email}
                            label="Email"
                            placeholder=""
                            onChange={composeValues}
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            name="tel"
                            type="text"
                            value={formValues.tel}
                            label="Tel"
                            placeholder=""
                            onChange={composeValues}
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            name="message"
                            type="text"
                            value={formValues.message}
                            label="Message"
                            placeholder="message"
                            onChange={composeValues}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </header>
        </div>
    )
}

export default Contact