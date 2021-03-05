import { goTologinPage } from "../Coordination/coordination"

export const logout = (history) => {
    localStorage.removeItem("token")
    goTologinPage(history)
}