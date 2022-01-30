import "../styles/globals.scss";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import '../styles/globals.css'
//import { ESLint } from "eslint";

//import { SessionProvider } from "next-auth/react"

// export default function App({
//   Component, 
//   pageProps: { session, ...pageProps }
// }) {
//   return (
//     <SessionProvider session={session}>
        
//         <Component {...pageProps} />
        
//     </SessionProvider>
//   )
// }

function MyApp({ 
	Component,
	 pageProps: { session, ...pageProps }
	 }) {
	const frontPaths = [
		"M 0,640 V 608.8 C 0,608.8 17.8,591 53.41,597.3 89.01,603.5 89.9,588.3 119.2,591.9 148.6,595.4 162.9,618.6 206.5,600.8 250.1,583 264,580.4 301.7,594.7 339.5,608.9 360,598.2 360,598.2 V 640 Z",
		"M 0,640 V 17.98 C 0,17.98 11.86,22.7 34.72,16.94 61.65,10.15 89.01,22.23 118.3,25.83 147.7,29.44 168.6,22.09 215.4,16.89 255.4,12.44 274.3,21.49 298.8,22.46 342,24.16 360,11.75 360,11.75 V 640 Z",
		"M 0,640 V 54.25 C 0,54.25 17.8,16.87 53.41,23.17 89.01,29.37 89.9,47.15 119.2,50.75 148.6,54.25 162.9,37.36 206.5,19.56 250.1,1.757 264,25.81 301.7,40.11 339.5,54.31 360,36.53 360,36.53 V 640 Z",
	];

	const backPaths = [
		"M 0,640 V 608.8 C 0,608.8 17.8,591 53.41,597.3 89.01,603.5 89.9,588.3 119.2,591.9 148.6,595.4 162.9,618.6 206.5,600.8 250.1,583 264,580.4 301.7,594.7 339.5,608.9 360,598.2 360,598.2 V 640 Z",
		"M 0,640 V 17.98 C 0,17.98 11.86,22.7 34.72,16.94 61.65,10.15 89.01,22.23 118.3,25.83 147.7,29.44 168.6,22.09 215.4,16.89 255.4,12.44 274.3,21.49 298.8,22.46 342,24.16 360,11.75 360,11.75 V 640 Z",
	];

	return (
		<MantineProvider theme={{ colorScheme: "dark" }}>
			<div className="container">
				<Nav />
				<SessionProvider session={session}>
					<Component {...pageProps} />
				</SessionProvider>
			</div>
			<Footer />
			<svg
				className="background"
				viewBox="0 0 360 640"
				preserveAspectRatio="none"
				height="93vh"
				width="100vw"
				aria-hidden
			>
				<motion.path
					fill="#09f"
					fillOpacity={0.25}
					d={backPaths[1]}
					animate={{ d: backPaths }}
					transition={{
						duration: 0.85,
						easings: ["easeIn"],
					}}
				/>
				<motion.path
					fill="#09f"
					fillOpacity={0.5}
					animate={{ d: frontPaths }}
					transition={{
						easings: ["linear", "easeOut"],
						times: [0, 0.65, 1],
					}}
				/>
			</svg>
		</MantineProvider>
	);

				}

export default MyApp;