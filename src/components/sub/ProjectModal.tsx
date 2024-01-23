import React, { useCallback, useEffect, useRef } from "react";
import "@/components/styles/overlay.scss";

interface ProjectModalProps {
	isOpen: boolean;
	handleClose: () => void;
	videoSrc: string;
	name: string;
	description: string;
	link_repo: string;
	link_host: string | null | undefined;
}

const ProjectModal = ({
	isOpen,
	handleClose,
	videoSrc,
	name,
	description,
	link_repo,
	link_host,
}: ProjectModalProps) => {
	// initialize a useRtef, then put it on the ref={} attribute on the div
	const overlayRef = useRef<HTMLDivElement>(null);

	// close modal when pressing escape key
	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) =>
			e.key === "Escape" ? handleClose() : null;
		document.body.addEventListener("keydown", closeOnEscapeKey);
		return (): void =>
			document.body.removeEventListener("keydown", closeOnEscapeKey);
	}, [handleClose]);

	// block scrollbar when modal is open :D
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "unset";
		return (): void => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	// close the modal if the click was on the overlay itself
	const handleOverlayClick = useCallback(
		(event: MouseEvent) => {
			if (overlayRef.current && overlayRef.current === event.target) {
				handleClose();
			}
		},
		[overlayRef, handleClose],
	);

	// puts the listener on the overlay reference (useRef hook)
	// it must be the current one so u can use .current
	useEffect(() => {
		const currentOverlay = overlayRef.current;

		if (currentOverlay && isOpen) {
			currentOverlay.addEventListener("click", handleOverlayClick);
		}

		return () => {
			if (currentOverlay) {
				currentOverlay.removeEventListener("click", handleOverlayClick);
			}
		};
	}, [handleOverlayClick, isOpen]);

	if (!isOpen) return null;

	return (
		<div
			ref={overlayRef}
			className={`modal-overlay ${
				isOpen ? "active" : ""
			} rounded-[1rem] w-full  h-full z-[1000]`}>
			<article className="modal w-full h-full max-w-[85rem] max-h-[42rem] bg-[#03001417] backdrop-blur-lg border border-[#2a0e61] rounded-[0.8rem] relative flex flex-col">
				<div className="flex flex-row  h-full items-center justify-around z-[1001] px-[2rem] border-b border-b-[#2a0e61] rounded-t-[0.8rem]">
					<div className="w-full h-full max-w-[36rem] max-h-[24rem] my-[2rem] rounded-[0.8rem] overflow-hidden">
						<video loop autoPlay muted className=" object-fill h-full w-full">
							<source src={videoSrc} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>

					<aside className="flex flex-col h-full w-full py-[4rem] max-w-[36rem]">
						<h2 className="colorful-span text-[2.4rem] max-w-[28rem]">
							{name}
						</h2>
						<p>{description}</p>
					</aside>
				</div>
				<div className="flex flex-row   h-full max-h-[12rem] items-center justify-around z-[1001]">
					<a
						href={link_repo}
						target="_blank"
						className="p-[0.8rem] text-[1rem] tracking-[0.1rem] button-primary text-center text-cyan-100  cursor-pointer rounded-[0.8rem] max-w-[24rem] border border-[#7042f88b] opacity-[0.9]">
						Veja o repositório do <span className="font-extrabold">{name}</span>{" "}
					</a>
					{link_host && (
						<a
							href={link_host}
							target="_blank"
							className="p-[0.8rem] text-[1rem] tracking-[0.1rem] button-primary text-center text-cyan-100  cursor-pointer rounded-[0.8rem] max-w-[24rem] border border-[#7042f88b] opacity-[0.9]">
							Veja o site do <span className="font-extrabold">{name}</span>{" "}
						</a>
					)}
				</div>
				<button
					onClick={handleClose}
					className="rounded-full bg-[#7971a841] w-[5rem] h-[3.2rem] border border-[#2a0e61] select-none text-[1rem] absolute top-[2rem] right-[2rem] hover:bg-[#4f496e41] active:bg-[#03001417] cursor-pointer z-[1002]">
					Fechar
				</button>
			</article>
		</div>
	);
};

export default ProjectModal;
