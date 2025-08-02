export const Logo = () => {
    return (
        <div className={'flex flex-col items-center justify-center gap-1 px-4 py-5'}>
            <img src="/logo.png" alt="Application logo icon" width={31} height={36}/>
            <span className={'text-base font-bold text-[#F1F1F1]'}>OCTOM.</span>
        </div>
    )
}