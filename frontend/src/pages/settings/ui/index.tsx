import {PageLayout} from "../../../shared/layouts/PageLayout";
import {Button} from "../../../shared/components/Button";
import {Input} from "../../../shared/components/Input";
import {AtSign} from "lucide-react";

const tabSections = [
    {name: 'My details'},
    {name: 'Profile'},
    {name: 'Password'},
    {name: 'Team'},
    {name: 'Plan'},
    {name: 'Billing'},
    {name: 'Email'},
    {name: 'Notifications'},
]

export const SettingsPage = () => {
    return (
        <PageLayout className={'flex-1'}>

            {/* Image background */}
            <div className={'w-full h-auto overflow-hidden'}>
                <img
                    className={'object-cover w-full'}
                    src="/settings_background.png"
                    alt="abstract background settings"
                />
            </div>

            <div className={'relative -top-12 px-12.5'}>

                {/* Header section */}
                <div className={'flex items-end justify-between'}>
                    <div className={'flex gap-7.5 items-end'}>
                        <div className={'size-34 rounded-full bg-[#5051F9] border-5 border-[#131517]'}></div>
                        <h1 className={'font-bold text-3xl text-[#EEEEEE] pb-7.5'}>Settings</h1>
                    </div>

                    <div className={'flex items-center gap-2.5 pb-7.5'}>
                        <Button variant={'secondary'}>Cancel</Button>
                        <Button>Save</Button>
                    </div>
                </div>

                {/* Settings tab */}
                <div className={'mt-7.5 mb-12.5'}>
                    <ul className={'flex gap-7.5'}>
                        {
                            tabSections.map(({name}) => (
                                <li
                                    key={name}
                                    className={'font-medium text-sm text-[#505664] cursor-pointer hover:text-[#E4E4E4]'}
                                >
                                    {name}
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Tab content */}
                <div>

                    <div className={'max-w-[600px] w-full flex gap-6'}>

                        {/* First name */}
                        <div className={'flex-1'}>
                            <label
                                htmlFor="first_name"
                                className={'font-medium text-sm text-[#E4E4E4]'}
                            >
                                First name
                            </label>

                            <Input
                                id={'first_name'}
                                className={'mt-1.5'}
                                placeholder={'Your name'}
                            />
                        </div>
                        {/* Last name */}
                        <div className={'flex-1'}>
                            <label
                                htmlFor="last_name"
                                className={'font-medium text-sm text-[#E4E4E4]'}
                            >
                                Last name
                            </label>

                            <Input
                                id={'last_name'}
                                className={'mt-1.5'}
                                placeholder={'Your name'}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className={'py-12.5 max-w-[600px] w-full'}>
                        <div className={'mb-1.5'}>
                            <label className="block text-sm font-semibold text-[#E2E8F0]">
                                Email address
                            </label>
                        </div>

                        <Input
                            iconStart={<AtSign size={18}
                                               className="text-[#8899A8] group-focus-within:text-[#5051F9] transition-colors"/>}
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className={'pl-12 pr-4 py-3 bg-[#282932]/50 border-[#282932] focus:border-[#5051F9] focus:bg-[#282932] transition-all duration-300'}
                        />
                    </div>

                </div>
            </div>
        </PageLayout>
    )
}