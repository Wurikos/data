import React from "react";
import theme from "theme";
import { Theme, Image, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Override slot="SectionContent" />
			<Stack justify-content="space-around" margin="-16px -16px 120px -16px" md-justify-content="flex-start">
				{"    "}
				<StackItem width="205px" display="flex">
					{"        "}
					<Image width="120px" height="30px" src="https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/logo.svg?v=2020-10-08T15:38:18.532Z" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-display="none">
					<Override slot="StackItemContent" align-items="center" justify-content="space-around" />
					<Link href="#" text-decoration-line="initial" color="--dark" font="500 14px/20px --fontFamily-googleInter">
						About
					</Link>
					<Link href="#" text-decoration-line="initial" color="--dark" font="500 14px/20px --fontFamily-googleInter">
						Products{"\n\n"}
					</Link>
					<Link href="#" text-decoration-line="initial" color="--dark" font="500 14px/20px --fontFamily-googleInter">
						Pricing{"\n\n"}
					</Link>
					<Link href="#" text-decoration-line="initial" color="--dark" font="500 14px/20px --fontFamily-googleInter">
						Blog{"\n\n"}
					</Link>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="205px" display="flex" md-display="none">
					<Link
						href="#"
						display="flex"
						align-items="center"
						justify-content="center"
						width="100px"
						height="40px"
						color="--dark"
						text-decoration-line="initial"
						font="700 14px/20 --fontFamily-googleInter"
						background="#F1E4FF"
						margin="0px 14px 0px 0px"
						border-radius="8px"
					>
						Login{"\n\n"}
					</Link>
					<Link
						href="#"
						display="flex"
						align-items="center"
						justify-content="center"
						width="100px"
						height="40px"
						color="--light"
						text-decoration-line="initial"
						background="--color-purpleLand"
						font="700 14px/20 --fontFamily-googleInter"
						border-radius="8px"
					>
						Login{"\n\n"}
					</Link>
					{"        "}{"    "}
				</StackItem>
			</Stack>
			<Box
				display="flex"
				flex-direction="column"
				justify-content="center"
				align-items="center"
				margin="0px 0px 500px 0px"
			>
				<Text
					font="700 72px/93px --fontFamily-googleInter"
					text-align="center"
					margin="16px 0px 32px 0px"
					md-font="700 56px/67px --fontFamily-googleInter"
					md-width="90%"
					sm-font="700 36px/67px --fontFamily-googleInter"
				>
					Track your product sales from anywhere, anytime{"\n\n"}
				</Text>
				<Link
					href="#"
					display="flex"
					align-items="center"
					justify-content="center"
					width="188px"
					height="62px"
					text-decoration-line="initial"
					color="--light"
					background="--color-purpleLand"
					font="700 14px/20 --fontFamily-googleInter"
					border-radius="8px"
				>
					Start using{"\n\n"}
				</Link>
			</Box>
		</Section>
		<Section height="366px" background="--color-purpleLand url() 0% 0% /auto repeat scroll padding-box" position="relative">
			<Override slot="SectionContent" width="100%" />
			<Box
				width="280px"
				height="560px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/iPhone%20X.png?v=2020-10-08T15:52:03.685Z) 0% 0% /auto no-repeat scroll padding-box"
				position="absolute"
				top="-363px"
				right="auto"
				bottom="auto"
				left="40%"
				md-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/iPhone%20X.png?v=2020-10-08T15:52:03.685Z) -5%/auto no-repeat scroll padding-box"
				md-bottom="400.594px"
				md-height="386px"
				md-top="-372.594px"
				md-left="33%"
				md-right={0}
				sm-left="25%"
			/>
			<Box>
				<Text font="800 48px/64px --fontFamily-googleInter" color="--light" text-align="center">
					Are already using{"\n\n"}
				</Text>
				<Text font="300 18px/32px --fontFamily-googleInter" color="--light" text-align="center">
					We have been working with some 500 clients{"\n\n"}
				</Text>
			</Box>
		</Section>
		<Section inner-width="100%" padding="24px 0 0 0">
			<Stack
				justify-content="center"
				position="relative"
				align-items="center"
				padding="0px 100px 0px 100px"
				height="400px"
				md-height="100%"
				md-flex-direction="column"
			>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" justify-content="center" />
					{"        "}
					<Text
						font="normal 800 40px/54px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="block"
						text-align="left"
						sm-font="normal 800 36px/43px --fontFamily-googleInter"
					>
						Intuitive dashboard for monitoring{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					{"        "}
					<Text
						font="normal 400 18px/32px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="block"
						sm-color="#43444B"
						sm-font="normal 400 16px/32px --fontFamily-googleInter"
					>
						Track sales and customers on any device, a very simple and intuitive interface where you will not have any difficulties, as well as advanced teamwork{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Section height="400PX" background=" #F6EFFF" padding="0 0 0 0">
				<Override slot="SectionContent" width="100%" />
			</Section>
		</Section>
		<Section background="#050028">
			<Override slot="SectionContent" align-items="center" />
			<Text font="800 48px/64px --fontFamily-googleInter" color="--light" text-align="center" margin="80px 0px 48px 0px">
				The advantages of our product{"\n\n"}
			</Text>
			<Stack color="--light" justify-content="center" margin="-16px -16px 48px -16px">
				{"    "}
				<StackItem
					width="30%"
					display="flex"
					background="--color-light"
					color="--dark"
					height="290px"
					border-radius="8px"
					max-width="290px"
					margin="0px 30px 0px 0px"
					md-min-height="380px"
					sm-width="100%"
					sm-margin="0px 0 20px 0px"
					sm-height="280px"
					sm-min-height="280px"
					sm-max-width="320px"
				>
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" md-justify-content="center" />
					{"        "}
					<Image width="32px" height="32px" src="https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/feature%201.svg?v=2020-10-08T16:14:36.546Z" margin="0px 0px 54px 0px" />
					<Box>
						<Text font="normal 600 24px/32px --fontFamily-googleInter" margin="0px 0px 10px 0px" display="inline-block" padding="0px 0px 0x 0px">
							Fast response{"\n\n"}
						</Text>
						<Text font="normal 400 16px/26px --fontFamily-googleInter" margin="0px 0px 0px 0px" display="inline-block">
							Works quickly both in the browser and on the desktop application of your computer{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="30%"
					display="flex"
					background="--color-light"
					color="--dark"
					height="290px"
					border-radius="8px"
					max-width="290px"
					margin="0px 30px 0px 0px"
					md-min-height="380px"
					sm-width="100%"
					sm-margin="0px 0 20px 0px"
					sm-min-height="280px"
					sm-max-width="320px"
				>
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" md-justify-content="center" />
					{"        "}
					<Image
						width="32px"
						height="32px"
						src="https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/feature%202.svg?v=2020-10-08T16:14:36.541Z"
						margin="0px 0px 54px 0px"
						object-fit="cover"
					/>
					<Box>
						<Text font="normal 600 24px/32px --fontFamily-googleInter" margin="0px 0px 10px 0px" display="inline-block" padding="0px 0px 0x 0px">
							Intuitive design{"\n\n"}
						</Text>
						<Text font="normal 400 16px/26px --fontFamily-googleInter" margin="0px 0px 0px 0px" display="inline-block">
							A simple and competent interface for the productive work of your team will not make{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="30%"
					display="flex"
					background="--color-light"
					color="--dark"
					height="290px"
					border-radius="8px"
					max-width="290px"
					md-min-height="380px"
					sm-width="100%"
					sm-min-height="280px"
					sm-max-width="320px"
				>
					<Override slot="StackItemContent" flex-direction="column" justify-content="center" md-justify-content="center" />
					{"        "}
					<Image width="32px" height="32px" src="https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/feature%203.svg?v=2020-10-08T16:14:36.548Z" margin="0px 0px 54px 0px" />
					<Box>
						<Text font="normal 600 24px/32px --fontFamily-googleInter" margin="0px 0px 10px 0px" display="inline-block" padding="0px 0px 0x 0px">
							Responsive platform{"\n\n"}
						</Text>
						<Text font="normal 400 16px/26px --fontFamily-googleInter" margin="0px 0px 0px 0px" display="inline-block">
							Tablet, phone or computer, work on any device and be always aware of the events{" \n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Link
				href="#"
				display="flex"
				align-items="center"
				justify-content="center"
				width="188px"
				height="62px"
				text-decoration-line="initial"
				color="--light"
				background="--color-purpleLand"
				font="700 14px/20 --fontFamily-googleInter"
				border-radius="8px"
				margin="0px 0px 80px 0px"
			>
				Start using{"\n\n"}
			</Link>
		</Section>
		<Section>
			<Override slot="SectionContent" md-justify-content="center" md-align-items="center" />
			<Text font="800 48px/64px --fontFamily-googleInter" margin="82px 0px 16px 0px" sm-font="800 36px/43px --fontFamily-googleInter">
				The most selling apps{"\n\n"}
			</Text>
			<Stack
				justify-content="center"
				margin="-16px -16px 80px -16px"
				md-flex-direction="column"
				md-align-items="center"
				md-width="100%"
			>
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					height="462px"
					max-width="540px"
					md-width="100%"
					md-max-width="100%"
					sm-position="relative"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Box
						height="80%"
						background="#A0DCFF"
						border-radius="8px"
						position="relative"
						md-width="100%"
					>
						<Box
							width="280px"
							height="288px"
							background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/mobile.png?v=2020-10-08T16:29:34.311Z) 0% 0% /auto no-repeat scroll padding-box"
							position="absolute"
							top="auto"
							right="auto"
							bottom="0px"
							left="109px"
							md-left="30%"
							sm-left="97px"
							sm-z-index="1"
							sm-bottom="0px"
							sm-right="auto"
							sm-top="auto"
						/>
						<Box
							position="absolute"
							width="100px"
							height="100px"
							background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/Frame%20967.png?v=2020-10-08T16:36:05.051Z) 0% 0% /cover no-repeat scroll padding-box"
							bottom="auto"
							left="86px"
							right="auto"
							top="113px"
							z-index="1"
							md-display="none"
						/>
					</Box>
					<Text font="normal 600 24px/32px --fontFamily-googleInter" margin="16px 0px 0px 0px" display="inline-block">
						Travel.Spot{"\n\n"}
					</Text>
					<Text font="normal 400 16px/26px --fontFamily-googleInter" margin="8px 0px 0px 0px" display="inline-block" color="#A5A1C1">
						iOS{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					height="462px"
					max-width="540px"
					md-width="100%"
					md-max-width="100%"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Box height="80%" background="#FDD9D9" border-radius="8px" position="relative">
						<Box
							width="458px"
							background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/laptop%202.png?v=2020-10-08T16:30:48.936Z) 0% 0% /cover no-repeat scroll padding-box"
							position="absolute"
							top="auto"
							right="-2px"
							bottom="6px"
							left="52px"
							height="324px"
							md-left="52px"
							md-right="-97px"
							md-width="553px"
							sm-left="0px"
							sm-right="auto"
							sm-width="402px"
							sm-bottom="auto"
							sm-top="8px"
						/>
					</Box>
					<Text font="normal 600 24px/32px --fontFamily-googleInter" margin="16px 0px 0px 0px" display="inline-block">
						DocDoc{"\n\n"}
					</Text>
					<Text font="normal 400 16px/26px --fontFamily-googleInter" margin="8px 0px 0px 0px" display="inline-block" color="#A5A1C1">
						Web app{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#F4F5F7">
			<Override slot="SectionContent" align-items="center" />
			<Text
				font="800 48px/64px --fontFamily-googleInter"
				margin="80px 0px 54px 0px"
				width="53%"
				text-align="center"
				md-width="100%"
			>
				Watch a video overview of our application{"\n\n"}
			</Text>
			<Box height="550px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/Project%20Cover.png?v=2020-10-08T16:42:02.522Z) 0% 0% /cover no-repeat scroll padding-box" width="100%" margin="0px 0px 55px 0px" />
			<Stack
				justify-content="center"
				position="relative"
				align-items="center"
				padding="0px 0px 0px 20px"
				margin="-16px -16px 80px -16px"
				md-flex-direction="column"
			>
				{"    "}
				<StackItem display="flex" width="50%" md-width="100%">
					<Override slot="StackItemContent" justify-content="center" md-justify-content="flex-start" />
					{"        "}
					<Text
						font="normal 800 40px/54px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="block"
						text-align="left"
						md-font="normal 800 28px/40px --fontFamily-googleInter"
					>
						Intuitive dashboard for monitoring{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					{"        "}
					<Text font="normal 400 18px/32px --fontFamily-googleInter" margin="0px 0px 0px 0px" display="block" md-font="normal 400 16px/26px --fontFamily-googleInter">
						Track sales and customers on any device, a very simple and intuitive interface where you will not have any difficulties, as well as advanced teamwork{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section>
			<Override slot="SectionContent" justify-content="center" align-items="center" />
			<Text font="800 48px --fontFamily-googleInter">
				FAQ{"\n\n"}
			</Text>
			<Link
				href="#"
				display="flex"
				align-items="center"
				justify-content="center"
				width="230px"
				height="62px"
				text-decoration-line="initial"
				color="--light"
				background="--color-purpleLand"
				font="700 14px/20 --fontFamily-googleInter"
				border-radius="8px"
				margin="0px 0px 80px 0px"
			>
				Start Ask your question{"\n\n"}
			</Link>
		</Section>
		<Section background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				display="flex"
				width="100%"
				margin="64px 0px 100px 0px"
				justify-content="center"
				sm-flex-direction="column"
			>
				<Box width="60%" margin="0 0px 0px 0px" sm-width="100%">
					<Stack
						color="#fff"
						width="70%"
						sm-width="100%"
						sm-flex-direction="column"
						sm-align-items="center"
						sm-margin="-16px -16px 50px 0"
					>
						{"    "}
						<StackItem width="50%" display="flex" sm-margin="0px 0px 20px 0px">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text font="normal 700 18px/28px --fontFamily-googleInter" margin="0px 0px 24px 0px" display="inline-block" sm-text-align="center">
								Company{"\n\n"}
							</Text>
							<Box display="flex" flex-direction="column" color="#fff" sm-text-align="center">
								<Link
									href="#"
									text-decoration-line="initial"
									color="--light"
									font="400 14px/24px --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
								>
									About Us{"\n\n"}
								</Link>
								<Link
									href="#"
									text-decoration-line="initial"
									color="--light"
									font="400 14px/24px --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
								>
									Blog{"\n\n"}
								</Link>
								<Link
									href="#"
									text-decoration-line="initial"
									color="--light"
									font="400 14px/24px --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
								>
									Careers{"\n\n"}
								</Link>
								<Link href="#" text-decoration-line="initial" color="--light" font="400 14px/24px --fontFamily-googleInter">
									Contact Us{"\n\n"}
								</Link>
							</Box>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text font="normal 700 18px/28px --fontFamily-googleInter" margin="0px 0px 24px 0px" display="inline-block" sm-text-align="center">
								Support{"\n\n"}
							</Text>
							<Box display="flex" flex-direction="column" color="#fff" sm-text-align="center">
								<Link
									href="#"
									text-decoration-line="initial"
									color="--light"
									font="400 14px/24px --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
								>
									Help Center{"\n\n"}
								</Link>
								<Link
									href="#"
									text-decoration-line="initial"
									color="--light"
									font="400 14px/24px --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
								>
									Safety Center{"\n\n\n\n"}
								</Link>
								<Link
									href="#"
									text-decoration-line="initial"
									color="--light"
									font="400 14px/24px --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
								>
									Community Guidelines{"\n\n"}
								</Link>
							</Box>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
				</Box>
				<Box
					width="30%"
					display="flex"
					flex-direction="column"
					align-items="center"
					sm-flex-direction="row"
					sm-width="100%"
					sm-justify-content="center"
				>
					<Image
						width="162px"
						height="48px"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/Google%20Play%20Badge.svg?v=2020-10-08T16:53:29.406Z) 0% 0% /auto repeat scroll padding-box"
						margin="0px 0px 20px 0px"
						sm-margin="0px 20px 0 0px"
					/>
					<Image width="162px" height="48px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/App%20Store%20Badge.svg?v=2020-10-08T16:53:29.419Z) 0% 0% /auto repeat scroll padding-box" />
				</Box>
			</Box>
		</Section>
		<Section background="--color-dark">
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex" color="#fff">
					<Override slot="StackItemContent" justify-content="center" align-items="center" />
					{"        "}
					<Text font="normal 300 14px/24px --fontFamily-googleInter" margin="0px 0px 0px 0px" display="inline-block" color="#D9DBE1">
						© 2020 All rights reserved{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" color="#fff">
					<Override slot="StackItemContent" justify-content="center" />
					<Link
						href="#"
						width="32px"
						height="32px"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/Instagram.png?v=2020-10-08T17:01:54.945Z) 0% 0% /auto repeat scroll padding-box"
						margin="0px 16px 0px 0px"
					/>
					<Link
						href="#"
						width="32px"
						height="32px"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/Dribbble.png?v=2020-10-08T17:03:08.437Z) 0% 0% /auto repeat scroll padding-box"
						margin="0px 16px 0px 0px"
					/>
					<Link
						href="#"
						width="32px"
						height="32px"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/Twitter.png?v=2020-10-08T17:03:19.388Z) 0% 0% /auto repeat scroll padding-box"
						margin="0px 16px 0px 0px"
					/>
					<Link href="#" width="32px" height="32px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f7f229a2e3a2a001faf4a37/images/Youtube.png?v=2020-10-08T17:04:24.747Z) 0% 0% /auto repeat scroll padding-box" />
					{"        "}{"    "}
				</StackItem>
			</Stack>
		</Section>
	</Theme>;
});