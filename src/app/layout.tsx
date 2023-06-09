import Dot from '@/components/UI/DotMouse';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/styles/globals';
import { Montserrat } from 'next/font/google';

const font = Montserrat({ subsets: ['latin'] });

export const metadata = {
	title: 'drexdev',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR">
			<body className={font.className}>
				<StyledComponentsRegistry>
					<GlobalStyle />
					<Dot />
					
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}