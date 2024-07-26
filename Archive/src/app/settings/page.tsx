"use client"

import { useActionState } from "react";
import { handleChangeLogin } from "../lib/actions";

export default function Settings() {
    const [state, handleLoginAction] = useActionState(handleChangeLogin, { message: "" })

    return (
        <main className="p-4 px-6 mx-6">
            <h1 className="is-size-3">Change login</h1>
            <div className="columns">
                <div className="column is-two-fifths p-4">
                    <form className="box" action={handleLoginAction}>
                        {state?.message && <p style={{ color: 'red' }}>{state.message}</p>}
                        <div className="field my-4">
                            <input
                                type="text"
                                className="input is-dark"
                                placeholder="please enter your current login"
                                name="login"
                            />
                        </div>
                        <div className="field my-4">
                            <input
                                type="password"
                                className="input is-dark"
                                placeholder="please enter your current password"
                                name="password"
                            />
                        </div>
                        <div className="field my-4">
                            <input
                                type="text"
                                className="input is-dark"
                                placeholder="please enter your new login"
                                name="newLogin"
                            />
                        </div>
                        <button className="button is-success">submit</button>
                    </form>
                </div>
            </div>
        </main>
    )
}
