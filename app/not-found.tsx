import { FaBackspace } from "react-icons/fa";
import { Button } from "./components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl mb-3">404 - Not Found</h1>
            <Link href='/' replace>
            <Button className="bg-sky-500" icon={<FaBackspace/>}>Homepages</Button>
            </Link>
        </div>
    )
}

export default NotFoundPage;