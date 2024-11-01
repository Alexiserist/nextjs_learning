import { ReactNode } from "react"
import DashboardLayout from "../components/layout/dashboard"

export const DashboardPage = ({children} : {children: ReactNode}) => {
    return(
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}


export default DashboardPage