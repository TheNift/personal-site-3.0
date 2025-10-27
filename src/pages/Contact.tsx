import { useBackground } from '@/contexts/BackgroundContext';
import { motion } from 'motion/react';
import { useLanguage } from '@contexts/LanguageContext';
import ScrambleText from '@/components/ScrambleText';

function Contact() {
	const { isCameraMoving } = useBackground();
	const { strings } = useLanguage();

	return (
		<div className="flex flex-row w-full h-full justify-center">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: isCameraMoving ? 0 : 1 }}
				exit={{ opacity: 0 }}
				transition={{
					duration: 0.3,
					ease: 'easeIn',
				}}
				className="flex flex-col justify-center grow max-w-[520px] lg:max-w-[600px] bg-black overflow-y-scroll px-[15px] py-[30px]"
			>
				<h1 className="text-[36px] leading-[36px] sm:text-[50px] sm:leading-[50px] lg:text-[70px] lg:leading-[70px] text-yorha font-doto tracking-tighter font-[800] mb-[60px] text-center">
					<ScrambleText
						playOnMount={false}
						delay={300}
						scramble={3}
						step={2}
						speed={0.6}
					>
						{strings.contact.title}
					</ScrambleText>
				</h1>
				<ContactForm />
			</motion.div>
		</div>
	);
}

function ContactForm() {
	const { strings } = useLanguage();

	return (
		<form className="flex flex-col gap-6" autoComplete="off">
			<div className="flex flex-col gap-2">
				<label htmlFor="name" className="text-yorha text-sm">
					{strings.contact.form.name}
				</label>
				<input
					type="text"
					id="name"
					name="name"
					className="bg-transparent border border-yorha text-yorha px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yorha"
				/>
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor="email" className="text-yorha text-sm">
					{strings.contact.form.email}
				</label>
				<input
					type="email"
					id="email"
					name="email"
					className="bg-transparent border border-yorha text-yorha px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yorha"
				/>
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor="message" className="text-yorha text-sm">
					{strings.contact.form.message}
				</label>
				<textarea
					id="message"
					name="message"
					rows={6}
					className="bg-transparent border border-yorha text-yorha px-3 py-2 resize-none focus:outline-none focus:ring-1 focus:ring-yorha"
				/>
			</div>
		</form>
	);
}

export default Contact;
