import Image from 'next/image';
import {
	HomeIcon,
	SearchIcon,
	BadgeCheckIcon,
	CollectionIcon,
	LightningBoltIcon,
	UserIcon
} from '@heroicons/react/outline';
import HeaderItems from './HeaderItems';
function Header() {
	return (
		<header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
			<div className="flex flex-grow justify-evenly max-w-2xl">
				<HeaderItems Title="Home" Icon={HomeIcon} />
				<HeaderItems Title="Trending" Icon={LightningBoltIcon} />
				<HeaderItems Title="Verified" Icon={BadgeCheckIcon} />
				<HeaderItems Title="Collection" Icon={CollectionIcon} />
				<HeaderItems Title="Search" Icon={SearchIcon} />
				<HeaderItems Title="Account" Icon={UserIcon} />
			</div>
			<Image className="object-contain" src="https://links.papareact.com/ua6" width={200} height={100} />
		</header>
	);
}

export default Header;
