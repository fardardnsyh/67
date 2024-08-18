// IMPORTS
import { Button } from '@mui/material'
import Axios from 'axios'

export default function Home() {
    //FUNCTIONS
    const sendRequest = () => {
        console.log(3)
    }

    // RETURNS
    return (
        <Button
            variant="contained"
            onClick={sendRequest}
        >
            Click me
        </Button>
    )
}
