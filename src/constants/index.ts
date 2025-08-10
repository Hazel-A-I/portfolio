const BASE_PATH = "/portfolio";

export const Skill_data = [
	{
		skill_name: "Html5",
		Image: `${BASE_PATH}/html5-plain.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "Css",
		Image: `${BASE_PATH}/css3-plain.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "JavaScript",
		Image: `${BASE_PATH}/javascript-plain.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "Sass",
		Image: `${BASE_PATH}/sass-original.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "TailwindCss",
		Image: `${BASE_PATH}/tailwindcss-plain.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "React",
		Image: `${BASE_PATH}/react-original.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "TypeScript",
		Image: `${BASE_PATH}/typescript-plain.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "Next.js",
		Image: `${BASE_PATH}/nextjs-original.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "Framer Motion",
		Image: `${BASE_PATH}/framer-motion.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "Node.js",
		Image: `${BASE_PATH}/nodejs-plain.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "Express.js",
		Image: `${BASE_PATH}/express-original.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "Postgre SQL",
		Image: `${BASE_PATH}/postgresql-plain.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "Bootstrap",
		Image: `${BASE_PATH}/bootstrap-plain.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "Graphql",
		Image: `${BASE_PATH}/graphql-plain.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "Dart",
		Image: `${BASE_PATH}/dart-plain.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "Flutter",
		Image: `${BASE_PATH}/flutter-plain.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "Firebase",
		Image: `${BASE_PATH}/firebase-plain.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "Jest",
		Image: `${BASE_PATH}/jest-plain.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "jQuery",
		Image: `${BASE_PATH}/jquery-plain.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "Blender",
		Image: `${BASE_PATH}/blender-original.svg`,
		width: 40,
		height: 40,
	},
	{
		skill_name: "Photoshop",
		Image: `${BASE_PATH}/photoshop-plain.svg`,
		width: 40,
		height: 40,
	},
];

export const Socials = [
	{
		name: "Github",
		src: `${BASE_PATH}/github.svg`,
		link: "https://github.com/Hazel-A-I",
	},
	{
		name: "LinkedIn",
		src: `${BASE_PATH}/linkedin.svg`,
		link: "https://www.linkedin.com/in/hazel-arcangelo/",
	},
];

export const Project_data = [
	{
		name: "Portfólio",
		description:
			"O atual portfólio que você está visualizando. Decidi utilizar Next.js para o projeto em sua totalidade, Framer Motion para as animações do letreiro e das animações de deslizar quando você usa o scroll. também irei adicionar uma seção para listar os meus cursos realizados, por enquanto estou muito satisfeito com o resultado, demorei um tanto para fazê-lo pois tenho diversas coisas em mente, inclusive um projeto de fórum onde eu utilizei react e bootstrap.",
		background_image: `${BASE_PATH}/projects/portfolio-thumb.png`,
		link_repo: "https://github.com/Hazel-A-I/portfolio",
		link_host: "#",
		width: 600,
		height: 400,
	},
	{
		name: "Sistema CRUD + Auth Entrevista Ambisis",
		description:
			"Sistema requisitado na entrevista da empresa Ambisis com o prazo de uma semana, uma empresa focada em sistema de gestão ambiental, foi um desafio muito prazeroso de ser feito, justamente por utilizar uma das minhas tecnologias favoritas, Flutter, e mesmo que infelizmente eu não tenha sido aceito na empresa, foi uma experiência primordial sendo minha primeira entrevista como programador. Foi utilizado Dart & Flutter como acima mencionado, Firebase para a autênticação e banco de dados, BLoC (Cubit) para gerência de estados da aplicação (atualizar os dados de forma mais eficiente, e permitindo um maior controle do tratamento de erros), GoRouter para agilizar o roteamento das páginas, e eu também planejei implementar uma maior segurança, sincronização offline com SQFLite e testes também, mas não tive o tempo necessário devido a minha inexperiência. Mas eu estou satisfeito com o resultado.",
		background_image: `${BASE_PATH}/projects/ambisis-thumb.png`,
		link_repo: "https://github.com/Hazel-A-I/ambisis_challenge",

		width: 600,
		height: 400,
		video_source: `${BASE_PATH}/projects/ambisis-video.mp4`,
	},
	{
		name: "Projeto com Angular",
		description: "Em desenvolvimento!",
		background_image: `${BASE_PATH}/depositphotos_31468817-stock-photo-coming-soon-sign.jpg`,
		link_repo: "#",
		width: 600,
		height: 400,
	},
];

