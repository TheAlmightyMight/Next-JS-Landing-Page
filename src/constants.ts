import { StaticImageData } from 'next/image'

import Project1 from './assets/other/Project-1.jpg'
import Project2 from './assets/other/Project-2.jpg'
import Project3 from './assets/other/Project-3.jpg'
import Project4 from './assets/other/Project4.jpg'
import Project5 from './assets/other/Project5.jpg'
import Project6 from './assets/other/Project6.jpg'
import Project7 from './assets/other/Project7.jpg'
import Project8 from './assets/other/Project8.jpg'
import Project9 from './assets/other/Project9.jpg'
import Project10 from './assets/other/Project10.jpg'
import Project11 from './assets/other/Project11.jpg'
import Project12 from './assets/other/Project12.jpg'

export interface SliderImage {
	image: StaticImageData
	projectName: string
	address: string
}

export const SliderImages: SliderImage[] = [
	{
		image: Project1,
		projectName: 'Aurora Rise Project',
		address: '501 S Cherry St, Denver, CO 80246',
	},
	{
		image: Project2,
		projectName: 'Emerald Bay Development',
		address: '547 Seabright Ave, Santa Cruz, CA 95062',
	},
	{
		image: Project3,
		projectName: 'Ironwood Heights Project',
		address: '1200 Alamo Dr, Vacaville, CA 95687',
	},
	{
		image: Project4,
		projectName: 'Sapphire Ridge Development',
		address: '111 S Grand Ave, Los Angeles, CA 90012',
	},
	{
		image: Project5,
		projectName: 'City Side Plaza',
		address: '1027 Wilshire Blvd, Santa Monica, CA 90401',
	},
	{
		image: Project6,
		projectName: 'Tropical Breezes Development',
		address: '1234 Ocean Ave, Santa Monica, CA 90401',
	},
	{
		image: Project7,
		projectName: 'Prairie View Heights',
		address: '100 Main St, Des Moines, IA 50309',
	},
	{
		image: Project8,
		projectName: 'Riverfront Park Project',
		address: '1150 NW Quimby St, Portland, OR 97209',
	},
	{
		image: Project9,
		projectName: 'Maplewood Grove Development',
		address: '3111 Motor Ave, Los Angeles, CA 90034',
	},
	{
		image: Project10,
		projectName: 'Windmill Heights Project',
		address: '199 E Paseo Del Centro, Los Angeles, CA 90095',
	},
	{
		image: Project11,
		projectName: 'Fountain View Development',
		address: '11911 San Vicente Blvd, Los Angeles, CA 90049',
	},
	{
		image: Project12,
		projectName: 'Meadow Brook Heights',
		address: '2100 88th St, North Bergen, NJ 07047',
	},
]
