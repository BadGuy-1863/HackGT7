import React from "react"

import { requestCoordinates } from "./request-address";


export const AddressLookup = () => {
    const [address, setAddress] = React.useState("")
    const [coords, setCoords] = React.useState("None")

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        const c = await requestCoordinates(address)
        setCoords(c)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>
                Address:
                <input type="text" value={address} onChange={handleChange} />
            </label>
            <label>
                Submit
            <input type="submit" />
            </label>
        </form>
        <p>
            {`${coords.lat}, ${coords.lng}`}
        </p>
        </div>
    )
}