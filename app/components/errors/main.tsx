export const MainErrorFallback = () => {
    return (
        <div
        className="flex h-screen w-screen flex-col items-center justify-center text-red-500" role="alert"
        >
            <h2 className="text-lg font-semibold">Something went wrong :( </h2>
        </div>
    )
}