import React, { useCallback, useEffect, useRef } from "react";
import modalStyles from "../../styles/general_styles/_overlay.module.scss";
import styles from "../../styles/component_styles/Projects.module.scss";
import Image from "next/image";

type ProjectModalProps = {
	isOpen: boolean;
	handleClose: () => void;
	imageSrc: string;
	name: string;
	description: string;
	link_repo: string;
	videoSrc?: string | null | undefined;
	link_host?: string | null | undefined;
};

const ProjectModal = ({
	isOpen,
	handleClose,
	videoSrc,
	imageSrc,
	name,
	description,
	link_repo,
	link_host,
}: ProjectModalProps) => {
	/// initialize a useRef, then put it on the ref={} attribute on the div
	const overlayRef = useRef<HTMLDivElement>(null);

	/// close modal when pressing escape key
	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) =>
			e.key === "Escape" ? handleClose() : null;
		document.body.addEventListener("keydown", closeOnEscapeKey);
		return (): void =>
			document.body.removeEventListener("keydown", closeOnEscapeKey);
	}, [handleClose]);

	/// block scrollbar when modal is open :D
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "unset";
		return (): void => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	/// close the modal if the click was on the overlay itself
	const handleOverlayClick = useCallback(
		(event: MouseEvent) => {
			if (overlayRef.current && overlayRef.current === event.target) {
				handleClose();
			}
		},
		[overlayRef, handleClose],
	);

	/// puts the listener on the overlay reference (useRef hook)
	/// it must be the current one so u can use .current
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
			className={`${modalStyles["modal-overlay"]} ${isOpen ? "active" : ""}`}>
			<article className={styles["project-modal"] + " backdrop-blur-lg"}>
				<div className={styles["video-area"]}>
					<div className={styles["video-player"]}>
						{videoSrc ? ( // check if videoSrc exists
							<video loop autoPlay muted>
								<source src={videoSrc} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						) : (
							<Image src={imageSrc} alt="Fallback Image" fill />
						)}
					</div>

					<aside className={styles["project-commentary"] + " backdrop-blur-lg"}>
						<h2 className={styles["colorful-span"]}>{name}</h2>
						<p>{description}</p>
					</aside>
				</div>
				<div className={styles["links-area"]}>
					<a
						href={link_repo}
						target="_blank"
						className={`${styles["button-primary"]} ${styles["button-link"]}`}>
						Veja o repositório do <span className="font-extrabold">{name}</span>{" "}
					</a>
					{link_host && (
						<a
							href={link_host}
							target="_blank"
							className={`${styles["button-primary"]} ${styles["button-link"]}`}>
							Veja o site do <span className="font-extrabold">{name}</span>{" "}
						</a>
					)}
				</div>
				<button onClick={handleClose} className={styles["close-modal-button"]}>
					Fechar
				</button>
			</article>
		</div>
	);
};

export default ProjectModal;
