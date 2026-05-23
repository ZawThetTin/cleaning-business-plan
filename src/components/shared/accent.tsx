import { PropsWithChildren } from 'react';

export default function Accent({ children }: PropsWithChildren) {
	return <span className='text-blue-300 font-bold'>{children}</span>;
}
