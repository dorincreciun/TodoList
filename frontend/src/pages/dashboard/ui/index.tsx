import {PageLayout} from "../../../shared/layouts/PageLayout";

export const DashboardPage = () => {
    return (
        <PageLayout className={'w-full'}>
            <div className={'grid grid-cols-3 gap-6'}>

                {/* Element */}
                <div className={'p-5 bg-[#1E1F25] w-full rounded-2xl'}>

                    {/* Header */}
                    <div className={'pb-6.5 flex items-center justify-between border-b border-[#24252D]'}>
                        <div className={'flex items-center gap-3'}>
                            <div className={'size-8.5 rounded-full bg-[#282932]'}></div>
                            <h3 className={'font-medium text-base text-[#E1E3E7]'}>Task Completed</h3>
                        </div>
                        <div className={'font-bold text-2xl text-[#E1E3E7]'}>08</div>
                    </div>

                    {/* Body */}
                    <div className={'flex items-center justify-between py-8'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="133"
                            height="68"
                            fill="none"
                            viewBox="0 0 133 68"
                        >
                            <g filter="url(#filter0_d_2_364)">
                                <path
                                    stroke="#5051F9"
                                    strokeWidth="2"
                                    d="M9 45.757c.432.209 1.252.567 6.262-3.965 6.263-5.663 11.956-9.628 18.218-4.53s10.248 17.558 18.218 14.16c7.97-3.4 10.817-28.887 20.495-32.285 9.678-3.399 15.94 16.425 22.772 5.664S109.198.446 114.322 2.145c4.099 1.36 8.16 6.985 9.678 9.629"
                                ></path>
                            </g>
                            <defs>
                                <filter
                                    id="filter0_d_2_364"
                                    width="132.301"
                                    height="68.001"
                                    x="0.566"
                                    y="-0.001"
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        result="hardAlpha"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    ></feColorMatrix>
                                    <feOffset dy="7"></feOffset>
                                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                                    <feColorMatrix values="0 0 0 0 0.313725 0 0 0 0 0.317647 0 0 0 0 0.976471 0 0 0 0.4 0"></feColorMatrix>
                                    <feBlend
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_2_364"
                                    ></feBlend>
                                    <feBlend
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_2_364"
                                        result="shape"
                                    ></feBlend>
                                </filter>
                            </defs>
                        </svg>

                        <div className={'text-end'}>
                            <div className={'font-bold text-base text-[#898999]'}>10+ more</div>
                            <div className={'font-bold text-base text-[#898999]'}>from last week</div>
                        </div>
                    </div>
                </div>

                {/* Element */}
                <div className={'p-5 bg-[#1E1F25] w-full rounded-2xl'}>

                    {/* Header */}
                    <div className={'pb-6.5 flex items-center justify-between border-b border-[#24252D]'}>
                        <div className={'flex items-center gap-3'}>
                            <div className={'size-8.5 rounded-full bg-[#282932]'}></div>
                            <h3 className={'font-medium text-base text-[#E1E3E7]'}>Task Completed</h3>
                        </div>
                        <div className={'font-bold text-2xl text-[#E1E3E7]'}>08</div>
                    </div>

                    {/* Body */}
                    <div className={'flex items-center justify-between py-8'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="133"
                            height="68"
                            fill="none"
                            viewBox="0 0 133 68"
                        >
                            <g filter="url(#filter0_d_2_375)">
                                <path
                                    stroke="#1EA7FF"
                                    strokeWidth="2"
                                    d="M9 45.757c.432.209 1.252.567 6.262-3.965 6.263-5.663 11.956-9.628 18.218-4.53s10.248 17.558 18.218 14.16c7.97-3.4 10.817-28.887 20.495-32.285 9.678-3.399 15.94 16.425 22.772 5.664S109.198.446 114.322 2.145c4.099 1.36 8.16 6.985 9.678 9.629"
                                ></path>
                            </g>
                            <defs>
                                <filter
                                    id="filter0_d_2_375"
                                    width="132.301"
                                    height="68.001"
                                    x="0.566"
                                    y="-0.001"
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        result="hardAlpha"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    ></feColorMatrix>
                                    <feOffset dy="7"></feOffset>
                                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                                    <feColorMatrix values="0 0 0 0 0.117647 0 0 0 0 0.654902 0 0 0 0 1 0 0 0 0.4 0"></feColorMatrix>
                                    <feBlend
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_2_375"
                                    ></feBlend>
                                    <feBlend
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_2_375"
                                        result="shape"
                                    ></feBlend>
                                </filter>
                            </defs>
                        </svg>

                        <div className={'text-end'}>
                            <div className={'font-bold text-base text-[#898999]'}>10+ more</div>
                            <div className={'font-bold text-base text-[#898999]'}>from last week</div>
                        </div>
                    </div>
                </div>

                {/* Element */}
                <div className={'p-5 bg-[#1E1F25] w-full rounded-2xl'}>

                    {/* Header */}
                    <div className={'pb-6.5 flex items-center justify-between border-b border-[#24252D]'}>
                        <div className={'flex items-center gap-3'}>
                            <div className={'size-8.5 rounded-full bg-[#282932]'}></div>
                            <h3 className={'font-medium text-base text-[#E1E3E7]'}>Task Completed</h3>
                        </div>
                        <div className={'font-bold text-2xl text-[#E1E3E7]'}>08</div>
                    </div>

                    {/* Body */}
                    <div className={'flex items-center justify-between py-8'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="133"
                            height="68"
                            fill="none"
                            viewBox="0 0 133 68"
                        >
                            <g filter="url(#filter0_d_2_386)">
                                <path
                                    stroke="#FF614C"
                                    strokeWidth="2"
                                    d="M9 45.757c.432.209 1.252.567 6.262-3.965 6.263-5.663 11.956-9.628 18.218-4.53s10.248 17.558 18.218 14.16c7.97-3.4 10.817-28.887 20.495-32.285 9.678-3.399 15.94 16.425 22.772 5.664S109.198.446 114.322 2.145c4.099 1.36 8.16 6.985 9.678 9.629"
                                ></path>
                            </g>
                            <defs>
                                <filter
                                    id="filter0_d_2_386"
                                    width="132.301"
                                    height="68.001"
                                    x="0.566"
                                    y="-0.001"
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        result="hardAlpha"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    ></feColorMatrix>
                                    <feOffset dy="7"></feOffset>
                                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.380392 0 0 0 0 0.298039 0 0 0 0.4 0"></feColorMatrix>
                                    <feBlend
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_2_386"
                                    ></feBlend>
                                    <feBlend
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_2_386"
                                        result="shape"
                                    ></feBlend>
                                </filter>
                            </defs>
                        </svg>

                        <div className={'text-end'}>
                            <div className={'font-bold text-base text-[#898999]'}>10+ more</div>
                            <div className={'font-bold text-base text-[#898999]'}>from last week</div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
